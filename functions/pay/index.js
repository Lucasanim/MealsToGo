module.exports.payRequest = (request, response, stripe) => {
  const { amount, token, name } = JSON.parse(request.body);
  stripe.paymentIntents
    .create({
      amount,
      currency: "USD",
      payment_method_types: ["card"],
      payment_method_data: {
        type: "card",
        card: {
          token,
        },
      },
      confirm: true,
    })
    .then((paymentIntent) => {
      response.json(paymentIntent);
    })
    .catch((e) => {
      console.log(e);
      response.status(400).send(e);
    });
};
