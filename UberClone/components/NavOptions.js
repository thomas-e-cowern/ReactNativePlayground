import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={{
            padding: 2,
            paddingLeft: 6,
            paddingBottom: 8,
            paddingTop: 4,
            backgroundColor: "lightgray",
            margin: 2,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={{ marginTop: 2, fontWeight: "bold" }}>
              {item.title}
            </Text>
            <Icon
              style={{
                marginTop: 8,
                fontWeight: "bold",
                backgroundColor: "black",
                padding: 5,
                borderRadius: 10,
                borderWidth: 1,
              }}
              type="antdesign"
              color="white"
              name="arrowright"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
