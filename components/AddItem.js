import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/shoppingListSlice';

const AddItem = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (name && quantity) {
      dispatch(addItem({ id: Date.now().toString(), name, quantity, purchased: false }));
      setName('');
      setQuantity('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Item Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default AddItem;
