import React, { useContext } from "react";
import styled from "styled-components/native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import RestaurantInfo from "../components/RestaurantInfo";
import SafeArea from "../components/SafeArea";
import { RestaurantsContext } from "../services/restaurant/context";
const Search = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const List = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 8,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const Restaurants = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <Search>
        <Searchbar placeholder="Search" />
      </Search>
      {isLoading ? (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      ) : (
        <List>
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
            // keyExtractor={(item) => item.name.toLocaleString()}
          />
        </List>
      )}
    </SafeArea>
  );
};

export default Restaurants;
