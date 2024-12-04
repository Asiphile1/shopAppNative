import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'SHOPPING_LIST';

export const saveShoppingList = async (items) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error('Failed to save shopping list:', error);
  }
};

export const loadShoppingList = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load shopping list:', error);
    return [];
  }
};
