import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productApis } from "../../../apis/productApi";
import { message } from "antd";

const initialState = {
  allProducts: [],
  isLoading: false,
  productInfo: {
    id: "",
    productName: "",
    price: "",
    imgURL: "",
  },
};

export const actFetchAllProduct = createAsyncThunk(
  "product/actFetchAllProduct",
  async (payload, thunkAPI) => {
    try {
      const response = await productApis.getAllProducts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error call API");
    }
  }
);

export const actFetchProductById = createAsyncThunk(
  "product/actFetchProductById",
  async (payload, thunkAPI) => {
    try {
      const data = await productApis.getProductsById(payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error call API");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actFetchAllProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(actFetchAllProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload.data;
    });
    builder.addCase(actFetchAllProduct.rejected, (state, action) => {
      state.isLoading = false;
      message.error("Has an errors");
    });
    builder.addCase(actFetchProductById.fulfilled, (state, action) => {
      state.productInfo = action.payload;
    });
  },
});

export const productReducer = productSlice.reducer;
