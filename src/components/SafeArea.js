import styled from "styled-components/native";

import { SafeAreaView, StatusBar } from "react-native";
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  border: 1px solid pink;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export default SafeArea;
