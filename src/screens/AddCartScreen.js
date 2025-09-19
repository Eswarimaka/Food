import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';

const AddToCartPage = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 250;
  const total = price * quantity;

  const recommendedItems = [
    { id: '1', name: 'DumBriyani', price: 130, image: require('./assets/dum_briyani.jpg') },
    { id: '2', name: 'Chicken', price: 160, image: require('./assets/chicken.jpg') },
    { id: '3', name: 'Biryani', price: 140, image: require('./assets/biryani.jpg') },
  ];

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} Chicken Wings to Cart. Total: ₦${total}`);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/chicken_wings.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Chicken Wings</Text>
      <Text style={styles.price}>₦{price}</Text>

      <View style={styles.qtyContainer}>
        <TouchableOpacity onPress={decreaseQty} style={styles.qtyBtn}>
          <Text style={styles.qtyText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.qtyNumber}>{quantity}</Text>
        <TouchableOpacity onPress={increaseQty} style={styles.qtyBtn}>
          <Text style={styles.qtyText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.description}>
        Chicken Wings is a delicious and popular dish. Served fresh with rich
        spices and flavors that make it unforgettable!
      </Text>
      <Text style={styles.calories}>
        (Each serving contains approximately 240 calories)
      </Text>

      <Text style={styles.recommendedTitle}>Recommended</Text>
      <FlatList
        horizontal
        data={recommendedItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.recommendItem}>
            <Image source={item.image} style={styles.recommendImage} />
            <Text>{item.name}</Text>
            <Text>₦{item.price}</Text>
          </View>
        )}
      />

      <View style={styles.bottomContainer}>
        <Text style={styles.totalText}>Total: ₦{total}</Text>
        <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
          <Text style={styles.cartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddToCartPage;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginVertical: 5,
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  qtyBtn: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
  },
  qtyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  qtyNumber: {
    marginHorizontal: 15,
    fontSize: 18,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
  },
  calories: {
    color: 'red',
    marginTop: 5,
  },
  recommendedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  recommendItem: {
    marginRight: 15,
    marginTop: 10,
    width: 100,
    alignItems: 'center',
  },
  recommendImage: {
    width: 100,
    height: 80,
    borderRadius: 5,
  },
  bottomContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartButton: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
