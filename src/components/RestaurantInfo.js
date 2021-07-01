import React from "react";
import { SvgXml } from "react-native-svg";
import Spacing from "./Spacing";
import Text from "./Text";
import star from "../../assets/star";
import open from "../../assets/open";
import {
  Address,
  Icon,
  Info,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  SectionEnd,
} from "./RestaurantInfoStyles";

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some rest",
    icon = "https://img.theculturetrip.com/wp-content/uploads/2018/03/1950222.jpg",
    photos = [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    ],
    address = "My house is a hoe house",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.round(rating)));
  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily ? (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              ) : null}
              <Spacing position="left" size="large">
                {isOpenNow ? (
                  <SvgXml xml={open} width={20} height={20} />
                ) : null}
              </Spacing>
              <Spacing position="left" size="large" />
              <Icon source={{ uri: icon }} />
            </SectionEnd>
          </Section>
          <Address>{address} </Address>
        </Info>
      </RestaurantCard>
    </>
  );
};

export default RestaurantInfo;
