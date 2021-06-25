import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/RestaurantInfo";

const Search = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const List = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const Restaurants = () => {
  return (
    <>
      <Search>
        <Searchbar placeholder="Search" />
      </Search>
      <List>
        <RestaurantInfo />
      </List>
    </>
  );
};

export default Restaurants;
