import React, { useState, useRef } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import styles from './styles';

interface Props {
  editable?: boolean;
}

const FinanceAreasInputs: React.FC<Props> = ({ editable }) => {
  const [newAreaOpen, setNewAreaOpen] = useState(false);
  const [newArea, setNewArea] = useState('');

  const inputRef = useRef<TextInput>(null);

  function handleNewAreaOpen() {
    setNewAreaOpen(state => !state);
  }

  function handleAddNewArea() {
    console.log(newArea);
  }

  const areas = ['Job', 'Food', 'Gifts'];

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
