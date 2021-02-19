import React, { useState, useRef, Dispatch, SetStateAction } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import styles from './styles';
import generateHeaders from '../../utils/generateAuthHeader';

interface Props {
  areas: string[];
  editable?: boolean;
  newArea: string;
  setNewArea: Dispatch<SetStateAction<string>>;
  addNewArea: () => Promise<void>;
}

const FinanceAreasInputs: React.FC<Props> = ({
  areas,
  editable,
  newArea,
  setNewArea,
  addNewArea
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
              <>
                <Feather name="edit" size={18} />
                <Feather name="x" size={18} />
              </>
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
