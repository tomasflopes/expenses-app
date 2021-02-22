import React, { useState, useRef, Dispatch, SetStateAction } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import styles from './styles';
import generateHeaders from '../../utils/generateAuthHeader';

interface Props {
  addNewArea: () => Promise<void>;
  areas: string[];
  editable?: boolean;
  newArea: string;
  removeArea: (index: number) => Promise<void>;
  setNewArea: Dispatch<SetStateAction<string>>;
}

const FinanceAreasInputs: React.FC<Props> = ({
  addNewArea,
  areas,
  editable,
  newArea,
  removeArea,
  setNewArea
}) => {
  const [newAreaOpen, setNewAreaOpen] = useState(false);

  const inputRef = useRef<TextInput>(null);

  function handleNewAreaOpen() {
    setNewAreaOpen(state => !state);
  }

  async function handleAddNewArea() {
    await addNewArea();
    setNewAreaOpen(false);
  }

  return (
    <>
      <Text style={styles.label}>Your Areas</Text>
      {areas.map((area, index) => (
        <View style={styles.container} key={index}>
          <View style={styles.inputContainer}>
            <Text style={styles.disabledPlaceholder}>{area}</Text>
            {editable && (
              <View style={styles.iconsContainer}>
                <TouchableOpacity>
                  <Feather name="edit" style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => removeArea(index)}>
                  <Feather name="x" style={styles.cancelIcon} />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      ))}

      {newAreaOpen ? (
        <View style={styles.addNewAreaInputContainer}>
          <TextInput
            placeholder="Type a new area"
            ref={inputRef}
            autoCapitalize="words"
            returnKeyType="done"
            onChangeText={setNewArea}
            onSubmitEditing={handleAddNewArea}
            value={newArea}
            style={styles.input}
          />
          <TouchableOpacity onPress={handleAddNewArea}>
            <Feather
              name="plus"
              styles={styles.addNewAreaInputIcon}
              size={18}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onPress={handleNewAreaOpen}
          style={styles.addNewAreaContainer}
        >
          <Feather name="plus" style={styles.addNewAreaIcon} />
          <Text style={styles.addNewAreaText}>Click to add a new area</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default FinanceAreasInputs;
