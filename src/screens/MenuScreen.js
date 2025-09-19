import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const tabs = ["Meals", "Snacks", "Slides"]

const menuData = {
 Meals: [
    { 
      id: "1",
      name: "Zera rice",
      price: 130,
      quantity: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUsd1oVzVB2j38OW4gf9iIV20Xme4WS5eekA&s",
    },
    {
      id: "2",
      name: "Tomato rice",
      price: 140,
      quantity: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJf16WVCQ4V7VrqbbSpJj5J1UqDl9sHF3lAA&s",
    },
    {
      id: "3",
      name: "Lemon Rice",
      price: 1400,
      quantity: 1,
      image: "https://www.shutterstock.com/image-photo/lemon-rice-fodnicha-bhat-south-260nw-1611916246.jpg",
    },
    {
      id: "4",
      name: "curd rice",
      price: 1600,
      quantity: 1,
      image: "https://static.vecteezy.com/system/resources/thumbnails/056/769/635/small_2x/delicious-rice-bowl-with-seeds-and-basil-on-transparent-background-png.png"
    },
  ],
  Snacks: [
    { 
      id: "1",
      name: "Punugulu",
      price: 50,
      quantity: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM-a42vkdwNnM7CC-YTbqcZX6VKA-pzly44g&s",
    },
    {
      id: "2",
      name: "Vada",
      price: 80,
      quantity: 1,
      image: "https://www.puvi.co/uploaded_images/1687765193.jpeg",
    },
    {
      id: "3",
      name: "pav bhaji",
      price: 100,
      quantity: 1,
      image: "https://media.istockphoto.com/id/1250269206/photo/image-of-traditional-indian-mumbai-food-pav-bhaji-dish-served-on-patterned-blue-plate-with.jpg?s=1024x1024&w=is&k=20&c=t6TnbCcqVEbhDBUM7FDZ6mHjxfB5a8xc5Mj1VlfcCuk=",
    },
    {
      id: "4",
      name: "Pani Puri ",
      price: 90,
      quantity: 1,
      image: "https://i.pinimg.com/736x/bd/47/55/bd47558ffcf8cc8a88ca8ef0f2636490.jpg",
    },
  ],
   Slides: [
    { 
      id: "1",
      name: "Veg Rolls",
      price: 130,
      quantity: 1,
      image: "https://static.vecteezy.com/system/resources/thumbnails/058/323/456/small_2x/delicious-tortilla-wraps-isolated-on-transparent-background-png.png",
    },
    {
      id: "2",
      name: "Nuguts",
      price: 140,
      quantity: 1,
      image: "https://img.freepik.com/premium-psd/chicken-nuggets-png-image-transparent-background_1022554-20.jpg",
    },
    {
      id: "3",
      name: "Momos",
      price: 160,
      quantity: 1,
      image: "https://t3.ftcdn.net/jpg/09/70/22/44/360_F_970224494_xR89Y9hODkPokKlzHUrQQbLviyvZTISO.jpg",
    },
    {
      id: "4",
      name: "Chicken Wings",
      price: 250,
      quantity: 1,
      image: "https://static.vecteezy.com/system/resources/thumbnails/035/675/711/small/ai-generated-grilled-chicken-wings-free-png.png",
    },
  ],
  
};

export default function MenuScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("Meals");
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleFavorite = (item) => {
    if (favorites.some((fav) => fav.id === item.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const addToCart = (item) => {
    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      setCart(
        cart.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Tabs */}
      <View style={styles.tabs}>
        {Object.keys(menuData).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              selectedTab === tab && {
                borderBottomWidth: 2,
                borderBottomColor: "orange",
              },
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={{
                fontWeight: selectedTab === tab ? "bold" : "normal",
              }}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Items */}
      <FlatList
        data={menuData[selectedTab]}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate("FoodDetail", { item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <TouchableOpacity
              style={styles.heart}
              onPress={() => toggleFavorite(item)}
            >
              <Ionicons
                name={
                  favorites.find((f) => f.id === item.id)
                    ? "heart"
                    : "heart-outline"
                }
                size={20}
                color="orange"
              />
            </TouchableOpacity>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₦{item.price}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => addToCart(item)}
            >
              <Text style={{ color: "#fff" }}>Add to Cart</Text>
            </TouchableOpacity>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  tab: {
    padding: 5,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: "#fdfbfbff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  heart: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  name: {
    marginTop: 10,
    fontWeight: "bold",
  },
  price: {
    color: "gray",
  },
  button: {
    marginTop: 6,
    backgroundColor: "orange",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
});