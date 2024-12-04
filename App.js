import React from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import store from './redux/store';
import AddItem from './components/AddItem';
import ShoppingList from './components/ShoppingList';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AddItem />
        <ShoppingList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});
