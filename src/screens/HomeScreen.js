import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
  const handleCategoryPress=(category) => {
    navigation.navigate('Menu', {categoryId: category.id, categoryName: category.name});
  }    
  const [searchText, setSearchText] = useState('');
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const Categories=[
    {id:1, name:'Meals'},
    {id:2, name:'Icecreams'},
    {id:3, name:'Snacks'},
    {id:4, name:'Drinks'},
    {id:5, name:'Briyani'},
  ]

  const popularItems = [
    {
      id: '1',
      name: 'Noodeles',
      price: '₦100',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qw-J12DleRgkpCbetdz_J0Sk6_mT3Q2Yiw&s',
    },
    {
      id: '2',
      name: 'Samosa',
      price: '₦50',
      image: 'https://thumbs.dreamstime.com/b/indian-tea-time-snacks-chole-chaat-made-boiled-chickpea-curry-samosa-curd-mint-chutney-tamarind-chutney-indian-snacks-chole-109155914.jpg',
    },
    {
      id: '3',
      name: 'Fried Rice',
      price: '₦200',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsDqjeJsLrh_RQX4OQaMuYORSe9rbAcO3qVw&s',
    },
    {
      id: '4',
      name: 'Burger',
      price: '₦250',
      image: 'https://media.istockphoto.com/id/1498243668/photo/tasty-cheeseburger-with-lettuce-cheddar-cheese-tomato-and-pickles-burger-bun-with-sesame.jpg?s=612x612&w=0&k=20&c=m2fYc-3o7yjL2qUVxxKlGkniKYIw5qh7gaSdagUNSbU=',
    },
    {
      id: '5',
      name: 'Pizza',
      price: '₦400',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSH5sF5LdtmDfNxiht4k2WWrOr7Ykr5ewkQ&s',
    },
    {
      id: '6',
      name: 'Chicken Biriyani',
      price: '₦360',
      image: 'https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__1200_0_0_0_auto.jpg',
    },
    {
      id: '7',
      name: 'Pasta',
      price: '₦80',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBDL8Kib8jUMS4rkrSZY4pQSA8zb4CbhJCTA&s',
    },
    {
      id: '8',
      name: 'KFC',
      price: '₦500',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRy82vaaazF8CL_o4zYxCX7RQglmVl6vgpDw&s',
    },

  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.name}</Text>
      </TouchableOpacity>
      <Text style={styles.cardPrice}>{item.price}</Text>
      <TouchableOpacity
        style={styles.heartIcon}
        onPress={() => toggleFavorite(item.id)}
      >
        <Icon
          name={favorites[item.id] ? 'heart' : 'heart-outline'}
          size={20}
          color={favorites[item.id] ? 'orange' : '#aaa'}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>
        What would you like to <Text style={styles.eat}>Eat?</Text>
      </Text>

      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter your dish name"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="Go" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
    <View style={styles.sectionC}>
        <Text style={styles.sectionTitleC}>Categories</Text>

        <FlatList
          data={Categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.buttonC}
              onPress={() => handleCategoryPress(item)}>
              <Text style={styles.buttonTextC}>{item.name}</Text>
            </TouchableOpacity>
          )}

        />
      </View>

      {/* Special Offer */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today's Special offer</Text>
        <View style={styles.specialCard}>
          <Image
            source={{
              uri: 'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2503,h_2503,c_limit/Smashburger-recipe-120219.jpg',
            }}
            style={styles.specialImage}
          />
          <View style={styles.specialContent}>
            <Text style={styles.specialText}>Yummies Special Burger Now</Text>
            <Text style={styles.price}>₦80</Text>
            <TouchableOpacity style={styles.cartButton}>
              <Text style={styles.cartButtonText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Popular Now */}
      <View style={styles.featured}>
        <Text style={styles.featuredText}>Popular Now</Text>
       
     
       <FlatList
          data={popularItems}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={styles.row}

        />
       </View>
      

      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
        <Icon name="home" size={24} color="orange" />
        <Icon name="heart-outline" size={24} />
        <Icon name="cart-outline" size={24} />
        <Icon name="person-outline" size={24} />
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20,marginTop:20 },
  greeting: { fontSize: 16, color: '#555' },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 8 },
  eat: { color: 'orange' },

  searchContainer: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 40,
  },
  searchButton: {
    backgroundColor: 'orange',
    marginLeft: 5,
    padding: 5,
    borderRadius: 5,
  },sectionC: {
    marginVertical: 10,
  },
  sectionTitleC: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#3e2723',
  },
  buttonTextC: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonC: {
    backgroundColor: '#9c6951ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    borderRadius: 20,
  },

  section: { marginTop: 24 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },

  specialCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    padding: 12,
    alignItems: 'center',
  },
  specialImage: {
    width: 70,
    height: 70,
    marginRight: 12,
    borderRadius: 10,
  },
  specialContent: { flex: 1 },
  specialText: { fontSize: 14 },
  price: { fontWeight: 'bold', marginVertical: 4 },
  cartButton: {
    backgroundColor: 'orange',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  cartButtonText: { color: '#f8f2f2d8' },

  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#e2dadaff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    width: '48%',
    alignItems: 'center',
    position: 'relative',
  },
  cardImage: {
    width: 150,
    height: 150,
    marginBottom: 5,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '500',
        textAlign: 'center'

  },
  cardPrice: {
    fontWeight: 'bold',
    marginVertical: 4,
    textAlign: 'center'
  },
  heartIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  featured: {
    marginTop: 10

  },
  featuredText: {
    fontSize: 20,
    marginBottom: 2,
    color: '#3e2723'

  },
});

export default HomeScreen;
