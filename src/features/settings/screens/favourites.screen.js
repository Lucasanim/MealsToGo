import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Text } from "../../../components/typography/text.component";

import { Spacer } from "../../../components/spacer/spacer.component";

import { SafeArea } from "../../../components/utility/safe-area-component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";

import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

const FavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Detail", { restaurant: item })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <FavouritesArea>
      <Text center>No favourites yer</Text>
    </FavouritesArea>
  );
};
