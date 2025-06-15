import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

export default function MenuScreen() {
  const [menu, setMenu] = useState([]);

  // Example data (replace with fetched data)
  // Each item must have a unique key/id for FlatList
  // Here we use name as key, assuming unique names
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu.json'
        );
        const data = await response.json();
        setMenu(data.menu);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMenu();
  }, []);

  const renderItem = ({ item }) => {
    // Image URL format based on provided instructions
    const imageUrl = `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${item.image}?raw=true`;

    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={menu}
      keyExtractor={(item) => item.name}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingBottom: 12,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  description: {
    color: '#555',
  },
  price: {
    marginTop: 8,
    color: '#228B22',
    fontWeight: '600',
  },
});
