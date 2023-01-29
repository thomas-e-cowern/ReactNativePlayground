import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const data = [
  {
    id: "123",
    title: "Get a Ride",
    image: "https:links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image: "https:links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            padding: 2,
            paddingLeft: 6,
            paddingBottom: 8,
            paddingTop: 4,
            backgroundColor: "lightgray",
            margin: 2,
          }}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={{ marginTop: 2, fontWeight: "bold" }}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
