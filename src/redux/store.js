import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./features/product/productSlice";
import { userReducer } from "./features/user/userSlice";
import { appReducer } from "./features/app";
import { cartReducer } from "./features/addCart/cartSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
    app: appReducer,
    cart: cartReducer,
  },
});
