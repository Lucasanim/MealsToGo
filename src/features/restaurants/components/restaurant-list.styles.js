import { FlatList } from "react-native";

import { Button, List } from "react-native-paper";

import styled from "styled-components";
import { colors } from "../../../infrastructure/theme/colors";
export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const Accordion = styled(List.Accordion)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const OrderButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[1]};
  width: 80%;
  align-self: center;
`;
