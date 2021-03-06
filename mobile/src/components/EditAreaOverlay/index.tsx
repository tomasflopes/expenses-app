import React, { Dispatch, SetStateAction } from 'react';
import { Modal, TextInput, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import styles from './styles';

interface Props {
  closeOverlay: () => void;
  editingArea: string;
  editingAreaIndex: number;
  setEditingArea: Dispatch<SetStateAction<string>>;
  submitArea: (index: number) => Promise<void>;
  visible: boolean;
}

const EditAreaOverlay: React.FC<Props> = ({
  closeOverlay,
  editingArea,
  editingAreaIndex,
  submitArea,
  setEditingArea,
  visible
}) => {
  function submitEdit() {
    submitArea(editingAreaIndex);
  }

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      collapsable
      style={styles.modal}
    >
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            onPress={closeOverlay}
            style={styles.closeIconContainer}
          >
            <Feather name="x" style={styles.closeIcon} />
          </TouchableOpacity>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Type a new area"
              autoCapitalize="words"
              returnKeyType="done"
              onChangeText={setEditingArea}
              onSubmitEditing={submitEdit}
              value={editingArea}
              style={styles.input}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditAreaOverlay;
