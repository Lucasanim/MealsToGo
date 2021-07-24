import camelize from "camelize";

import { host, isMock } from "../../utils/env";

export const locationRequest = (searchTerm) => {
  return fetch(`${host}/geocode?city=${searchTerm}&mock=${isMock}`)
    .then((res) => {
      console.log("response: ", res);
      return res.json();
    })
    .catch((e) => console.log(e));
};

export const locationTransform = (result) => {
  console.log("res:", result);
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
