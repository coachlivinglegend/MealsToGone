import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

// export const Title = styled.Text`
//   font-family: ${(props) => props.theme.fonts.heading};
//   font-size: ${(props) => props.theme.fontSizes.body};
//   color: ${(props) => props.theme.colors.ui.primary};
// `;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Rating = styled.View`
  flex-direction: row;
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

// export const ClosedTemporarily = styled.Text`
//   color: ${(props) => props.theme.colors.ui.error};
// `;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
