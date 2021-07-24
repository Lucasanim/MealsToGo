import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Text } from "../typography/text.component";

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const isAndroid = Platform.OS === "android";
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption">
        {restaurant.name}
      </Text>
    </Item>
  );
};
