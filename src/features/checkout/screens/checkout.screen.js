import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";

import { List, Divider } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { SafeArea } from "../../../components/utility/safe-area-component";
import { CartContext } from "../../../services/cart/cart.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { CreditCardInput } from "../components/credit-card.component";
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
  PaymentProcessing,
} from "../components/checkout.styles";

import { payRequest } from "../../../services/checkout/checkout.service";

export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      return navigation.navigate("CheckoutError", {
        error: "Please fill in a valid credit card",
      });
    }
    payRequest(card.id, sum, name)
      .then((result) => {
        setIsLoading(false);
        clearCart();
        navigation.navigate("CheckoutSuccess");
      })
      .catch((e) => {
        setIsLoading(false);
        navigation.navigate("CheckoutError", { error: e });
      });
  };

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>You cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      {isLoading && <PaymentProcessing />}
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }, index) => {
              return (
                <List.Item
                  key={index.toString()}
                  title={`${item} - $${price / 100}`}
                />
              );
            })}
          </List.Section>
          <Text>Total: {sum / 100}</Text>

          <Spacer position="top" size="large" />
          <Divider />

          <NameInput
            label="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </Spacer>
        <Spacer size="large">
          {name.length > 0 && (
            <>
              <Spacer position="left" size="medium">
                <CreditCardInput
                  name={name}
                  onSuccess={setCard}
                  onError={() =>
                    navigation.navigate("CheckoutError", {
                      error: "Something went wrong processing your payment",
                    })
                  }
                />
              </Spacer>
              <Spacer size="large">
                <PayButton
                  disabled={isLoading}
                  icon="cash-usd"
                  mode="contained"
                  onPress={onPay}
                >
                  Pay
                </PayButton>
              </Spacer>
            </>
          )}
        </Spacer>
        <ClearButton
          disabled={isLoading}
          icon="cart-off"
          mode="contained"
          onPress={clearCart}
        >
          Clear Cart
        </ClearButton>
      </ScrollView>
    </SafeArea>
  );
};
