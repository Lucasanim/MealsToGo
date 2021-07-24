import createStripe from "stripe-client";

import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51IKQbmF87Y56UerjUpytRBOmTyAXc5nBtvZKl62OyKFm5fQ0u08yPSPEAZdnRs2czoxfrE3WAGj1hMFdg6BdwDvr00M62xa7F9"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("Something went wrong processing your payment");
    }
    return res.json();
  });
};
