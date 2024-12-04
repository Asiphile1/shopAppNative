import React from 'react';
import { View, Text, Button, StyleSheet, CheckBox } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteItem, togglePurchased } from '../redux/shoppingListSlice';

const ListItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <CheckBox
        value={item.purchased}
        onValueChange={() => dispatch(togglePurchased(item.id))}
      />
      <Text style={[styles.text, item.purchased && styles.purchased]}>
        {item.name} - {item.quantity}
      </Text>
      <Button title="Delete" onPress={() => dispatch(deleteItem(item.id))} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  text: {
    flex: 1,
    marginLeft: 10,
  },
  purchased: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default ListItem;
