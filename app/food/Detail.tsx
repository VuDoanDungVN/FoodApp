import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
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

const _renderItem = ({ item }: any, navigation: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
      <View style={styles.popularItemContainer}>
        <Image source={item.image} style={styles.popularItemImage} />
      </View>
    </TouchableOpacity>
  );
};
export default function Detail({ navigation }: any) {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Carousel
            layout={"default"}
            data={foodItems}
            sliderWidth={screenWidth}
            itemWidth={screenWidth / 1}
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
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Bún chả viên</Text>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>by Vũ Dũng Plaza | 2.2 Kms</Text>
            <Ionicons name="heart" size={24} color="#c02727" />
          </View>
          <View style={styles.ratingContainer}>
            <View style={styles.starsContainer}>
              <AntDesign name="star" size={24} color="#c02727" />
              <AntDesign name="star" size={24} color="#c02727" />
              <AntDesign name="star" size={24} color="#c02727" />
              <AntDesign name="star" size={24} color="#c02727" />
              <AntDesign name="star" size={24} color="#c02727" />
              <Text style={styles.ratingText}>(200+)</Text>
            </View>
            <Text style={styles.price}>¥ 1850</Text>
          </View>
          <View
            style={{
              backgroundColor: "#cbcbcb",
              height: 1,
              marginVertical: 10,
              opacity: 0.5,
            }}
          ></View>
          <Text style={styles.description}>
            Duck Noodle Soup, known as "Bún Thịt Vịt" in Vietnamese, is a
            delightful and aromatic dish that showcases the rich flavors of
            tender duck meat and fresh rice noodles. This dish typically
            features succulent pieces of duck, cooked to perfection, served over
            a bed of soft, chewy rice vermicelli noodles. The broth is a key
            component, made by simmering duck bones and spices, resulting in a
            savory, fragrant soup that warms the soul. Fresh herbs, such as
            cilantro and mint, add a burst of freshness, while crispy fried
            shallots provide a crunchy texture. Bún Thịt Vịt is often
            accompanied by a side of pickled vegetables and a splash of fish
            sauce or chili for those who enjoy a bit of heat. Whether enjoyed
            for breakfast, lunch, or dinner, this dish offers a delicious and
            satisfying experience that highlights the unique flavors of
            Vietnamese cuisine. Duck Noodle Soup, known as "Bún Thịt Vịt" in
            Vietnamese, is a delightful and aromatic dish that showcases the
            rich flavors of tender duck meat and fresh rice noodles. This dish
            typically features succulent pieces of duck, cooked to perfection,
            served over a bed of soft, chewy rice vermicelli noodles. The broth
            is a key component, made by simmering duck bones and spices,
            resulting in a savory, fragrant soup that warms the soul. Fresh
            herbs, such as cilantro and mint, add a burst of freshness, while
            crispy fried shallots provide a crunchy texture. Bún Thịt Vịt is
            often accompanied by a side of pickled vegetables and a splash of
            fish sauce or chili for those who enjoy a bit of heat. Whether
            enjoyed for breakfast, lunch, or dinner, this dish offers a
            delicious and satisfying experience that highlights the unique
            flavors of Vietnamese cuisine.
          </Text>
          <View
            style={{
              backgroundColor: "#cbcbcb",
              height: 1,
              marginVertical: 10,
              opacity: 0.5,
            }}
          ></View>
          <View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  detailsContainer: {
    padding: 10,
    backgroundColor: "#fff",
    margin: 10,
    borderWidth: 0.2,
    borderColor: "#cbcbcb",
    borderRadius: 10,
    shadowColor: "#cbcbcb",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5D5D5D",
    marginBottom: 5,
  },
  subtitleContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#A1A1A1",
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  starsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    color: "#A1A1A1",
    fontSize: 15,
    marginLeft: 5,
  },
  price: {
    color: "#5D5D5D",
    fontSize: 25,
    fontWeight: "600",
  },
  description: {
    fontSize: 15,
    color: "#5D5D5D",
    lineHeight: 22,
  },
  buttonContainer: {
    backgroundColor: "#c02727",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
  },
  popularItemContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
  },
  popularItemImage: {
    width: 300,
    height: 300,
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
  popularItemDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  carouselContentContainer: {
    paddingLeft: 10,
    paddingRight: 10,
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
});
