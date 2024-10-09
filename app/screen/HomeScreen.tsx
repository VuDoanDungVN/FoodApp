import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Carousel, { Pagination } from "react-native-snap-carousel";

const { width: screenWidth } = Dimensions.get("window");

const foodItems = [
  {
    name: "Shopska Salad",
    image: require("../../assets/food/thitvit.png"),
    location: "Naha, okinawa",
    distance: "3.2 Kms",
    rating: 4.5,
    reviews: 200,
    price: "¥850",
  },
  {
    name: "Margherita Pizza",
    image: require("../../assets/food/harumaki.png"),
    location: "Tokyo, Japan",
    distance: "1.5 Kms",
    rating: 4.7,
    reviews: 150,
    price: "¥1200",
  },
  {
    name: "Cheeseburger",
    image: require("../../assets/food/thitga.png"),
    location: "Osaka, Japan",
    distance: "2.0 Kms",
    rating: 4.3,
    reviews: 180,
    price: "¥900",
  },
  {
    name: "Donuts",
    image: require("../../assets/food/banhxeo.png"),
    location: "Kyoto, Japan",
    distance: "2.5 Kms",
    rating: 4.6,
    reviews: 220,
    price: "¥500",
  },
  {
    name: "Green Salad",
    image: require("../../assets/food/thitnuong.png"),
    location: "Nagoya, Japan",
    distance: "3.0 Kms",
    rating: 4.8,
    reviews: 170,
    price: "¥750",
  },
];

const Categories = [
  { name: "Pizza", image: require("../../assets/icon/hambager.png") },
  { name: "Pizza", image: require("../../assets/icon/donuts.png") },
  { name: "Pizza", image: require("../../assets/icon/rau.png") },
  { name: "Pizza", image: require("../../assets/icon/drink.png") },
  { name: "Pizza", image: require("../../assets/icon/pizza.png") },
  { name: "Pizza", image: require("../../assets/icon/hambager.png") },
  { name: "Pizza", image: require("../../assets/icon/hambager.png") },
  { name: "Pizza", image: require("../../assets/icon/hambager.png") },
  { name: "Pizza", image: require("../../assets/icon/donuts.png") },
  { name: "Pizza", image: require("../../assets/icon/rau.png") },
  { name: "Pizza", image: require("../../assets/icon/drink.png") },
  { name: "Pizza", image: require("../../assets/icon/pizza.png") },
  { name: "Pizza", image: require("../../assets/icon/hambager.png") },
  { name: "Pizza", image: require("../../assets/icon/hambager.png") },
];

const voucherData = [
  { image: require("../../assets/voucher/voucher1.jpg") },
  { image: require("../../assets/voucher/voucher2.jpg") },
  { image: require("../../assets/voucher/voucher3.jpg") },
  { image: require("../../assets/voucher/voucher4.jpg") },
  { image: require("../../assets/voucher/voucher5.jpg") },
];

const foodVoucher = [{ image: require("../../assets/voucher/voucher6.png") }];

const _renderItem = ({ item }: any, navigation: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
      <View style={styles.popularItemContainer}>
        <Image source={item.image} style={styles.popularItemImage} />
        <View style={{ padding: 10 }}>
          <Text style={styles.popularItemText}>{item.name}</Text>
          <Text style={styles.popularItemSubText}>
            {item.location} | {item.distance}
          </Text>
          <View style={styles.popularItemDetails}>
            <View style={styles.popularItemRating}>
              <AntDesign name="star" size={24} color="#c02727" />
              <Text style={styles.popularItemRatingText}>{item.rating}</Text>
              <Text style={styles.popularItemRatingText}>
                ({item.reviews}+)
              </Text>
            </View>
          </View>
          <View style={styles.popularItemFooter}>
            <View>
              <Text style={styles.popularItemPrice}>{item.price}</Text>
            </View>
            <Text style={styles.popularItemIcon}>Detail</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }: any) => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {foodVoucher.map((voucher, index) => (
            <View style={{ paddingHorizontal: 10 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
                <Image source={voucher.image} style={styles.voucherImage} />
              </TouchableOpacity>
            </View>
          ))}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Experience the great food !!</Text>
          </View>

          <View style={styles.scrollContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {Categories.map((category, index) => (
                <TouchableOpacity key={index}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={category.image}
                      style={{ width: 40, height: 40 }}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Popular</Text>
            </View>
            <View style={styles.popularSection}>
              <Carousel
                layout={"default"}
                data={foodItems}
                sliderWidth={screenWidth}
                itemWidth={screenWidth / 2}
                renderItem={({ item }) => _renderItem({ item }, navigation)}
                onSnapToItem={(index) => setActiveSlide(index)}
                contentContainerCustomStyle={styles.carouselContentContainer}
              />
              <Pagination
                dotsLength={foodItems.length}
                activeDotIndex={activeSlide}
                containerStyle={styles.paginationContainer}
                dotStyle={styles.paginationDot}
                inactiveDotStyle={styles.paginationInactiveDot}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.8}
              />
            </View>
          </View>

          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Voucher</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {voucherData.map((voucher, index) => (
                <TouchableOpacity key={index}>
                  <Image
                    source={voucher.image}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                      marginHorizontal: 10,
                    }}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Top Food</Text>
            </View>
            {/* Top Food */}
            {foodItems.map((item, index) => (
              <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
                <View style={styles.topFoodContainer}>
                  <View>
                    <Image
                      source={item.image}
                      style={styles.topFoodItemImage}
                    />
                  </View>
                  <View style={styles.topFoodContent}>
                    <Text style={styles.popularItemText}>{item.name}</Text>
                    <Text style={styles.popularItemSubText}>
                      {item.location} | {item.distance}
                    </Text>
                    <View style={styles.popularItemDetails}>
                      <View style={styles.popularItemRating}>
                        <AntDesign name="star" size={24} color="#c02727" />
                        <Text style={styles.popularItemRatingText}>
                          {item.rating}
                        </Text>
                        <Text style={styles.popularItemRatingText}>
                          ({item.reviews}+)
                        </Text>
                      </View>
                    </View>
                    <View style={styles.popularItemFooter}>
                      <View>
                        <Text style={styles.popularItemPrice}>
                          {item.price}
                        </Text>
                      </View>
                      <Text style={styles.popularItemIcon}>Detail</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* <Button title="Logout" onPress={() => navigation.replace("Login")} /> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  imageContainer: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 10,
    // Shadow properties
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  voucherImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
    // Shadow properties
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  popularItemContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    // Shadow properties
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
  },
  popularItemImage: {
    width: screenWidth / 2 - 20,
    height: 180,
  },
  popularItemDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  titleContainer: {
    margin: 10,
    width: "40%",
  },
  titleText: {
    fontSize: 25,
    fontWeight: "600",
    color: "#5D5D5D",
  },
  popularSection: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popularItemWrapper: {
    width: "50%",
    paddingHorizontal: 10,
  },
  popularItemText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#5D5D5D",
  },
  popularItemSubText: {
    fontSize: 16,
    color: "#5D5D5D",
  },
  popularItemPrice: {
    fontSize: 20,
    fontWeight: "600",
    color: "#5D5D5D",
  },
  popularItemIcon: {
    fontSize: 16,
  },
  popularItemRating: {
    flexDirection: "row",
    alignItems: "center",
  },
  popularItemRatingText: {
    marginLeft: 5,
  },
  popularItemFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  paginationContainer: {
    backgroundColor: "transparent",
    paddingVertical: 0,
    marginTop: 5,
    width: 50,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#c02727",
  },
  paginationInactiveDot: {
    backgroundColor: "#ccc",
  },
  carouselContentContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  topFoodContainer: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    alignItems: "center",
    height: 130,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    // Shadow properties
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
  },
  topFoodContent: {
    display: "flex",
    width: "60%",
    justifyContent: "center",
  },
  topFoodItemImage: {
    width: 120,
    height: 120,
    borderRadius: 10, // Shadow properties
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default HomeScreen;
