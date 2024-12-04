import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setItems } from '../redux/shoppingListSlice';
import { loadShoppingList, saveShoppingList } from '../utils/persistence';
import ListItem from './ListItem';

const ShoppingList = () => {
  const items = useSelector((state) => state.shoppingList);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const savedItems = await loadShoppingList();
      dispatch(setItems(savedItems));
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    saveShoppingList(items);
  }, [items]);

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ListItem item={item} />}
    />
  );
};

export default ShoppingList;
