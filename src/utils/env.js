import { Platform } from "react-native";
const liveHost = "https://us-central1-mealstogo-917c0.cloudfunctions.net";
const localHost = "http://10.0.2.2:5001/mealstogo-917c0/us-central1";
export const isDevelopment = process.env.NODE_ENV === "development";

export const isAndroid = Platform.OS === "android";
export const host = localHost;
// export const host = !isDevelopment || isAndroid ? liveHost : localHost;
export const isMock = true;
