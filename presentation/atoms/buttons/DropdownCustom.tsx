import { Colors } from '@/shared/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    FlatList,
    Modal,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    ViewStyle
} from 'react-native';
import Label from '../Label';

interface DropdownCustomProps {
  label: string;
  value: string;
  options: string[];
  onSelect: (item: string) => void;
  style?: ViewStyle;
  styleDropdown?: ViewStyle;
}

const DropdownCustom = ({ label, value, options, onSelect, style, styleDropdown }: DropdownCustomProps) => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => setVisible(!visible);

  const handleSelect = (item: string) => {
    onSelect(item);
    setVisible(false);
  };

  return (
    <View style={[styles.rowContainer, style]}>
      <TouchableOpacity 
        style={[styles.dropdownButton, styleDropdown]} 
        activeOpacity={0.8}
        onPress={toggleDropdown}
      >
        <Label style={[styles.dropdownText, {color: Colors.light.primaryColor}]}>{value}</Label>
        <Ionicons name={visible ? "chevron-up" : "chevron-down"} size={20} color={Colors.light.primaryColor} />
      </TouchableOpacity>

      <Modal visible={visible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.optionsContainer}>
              <FlatList
                data={options}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity 
                    style={styles.optionItem} 
                    onPress={() => handleSelect(item)}
                  >
                    <Label>{item}</Label>
                    {item === value && (
                      <Ionicons name="checkmark" size={18} color="#4fc3f7" />
                    )}
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default DropdownCustom;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontSize: 16,
    flex: 1,
    marginRight: 10,
  },
  dropdownButton: {
    flexDirection: 'row',
    backgroundColor: '#37474f',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 25,
    alignItems: 'center',
    minWidth: 100,
    justifyContent: 'space-between',
  },
  dropdownText: {
    color: 'white',
    fontSize: 16,
    marginRight: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsContainer: {
    width: '80%',
    backgroundColor: '#37474f',
    borderRadius: 12,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#20292eff',
  },
  optionText: {
    color: 'white',
    fontSize: 16,
  },
});