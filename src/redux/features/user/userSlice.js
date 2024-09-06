import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

import { Navigate } from "react-router-dom";
import { userApis } from "../../../apis/userApis";
import { ROUTES } from "../../../constants/router";
import { globalNavigate } from "../../utils/globalHistory";

const initialState = {
  isLoading: false,
  users: [],
  errors: {},
  isLogin: JSON.parse(localStorage.getItem("isLogin")) || false,
  userInfo: JSON.parse(localStorage.getItem("userInfo")) || {},
};

export const actCreateNewUser = createAsyncThunk(
  "users/createNewUser",
  async (formValue, thunkAPI) => {
    try {
      //get all users về để check với giá trị formValue
      const users = await userApis.getAllUsers();
      const { user, email, phoneNumber } = formValue;
      const foundUser = users.find((u) => u.user === user);
      const foundEmail = users.find((u) => u.email === email);
      const foundPhoneNumber = users.find((u) => u.phoneNumber === phoneNumber);
      // nếu user đã tồn tại => trả về lỗi
      if (foundUser) {
        return thunkAPI.rejectWithValue("User đã được sử dụng!");
      } else if (foundEmail) {
        return thunkAPI.rejectWithValue("Email đã được sử dụng!");
      } else if (foundPhoneNumber) {
        return thunkAPI.rejectWithValue("SDT đã được sử dụng!");
      } else {
        await userApis.createNewUser(formValue);
      }
    } catch (error) {}
  }
);

export const actLogin = createAsyncThunk(
  "users/login",
  async (formValue, thunkAPI) => {
    const users = await userApis.getAllUsers();
    const { user, password } = formValue;
    const foundUser = users.find(
      (u) => u.user === user && u.password === password
    );
    // find() 1 obj trả về 1 obj {user: "", password:""}
    delete foundUser.confirmPassword;
    // delete bớt confirmPassword không cần sd

    if (foundUser) {
      thunkAPI.dispatch(loginSuccess(foundUser));
    } else {
      // return thunkAPI.dispatch(loginFailure());
      return thunkAPI.rejectWithValue("User or Password incorrect!");
    }
  }
);

export const actFetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async (params) => {
    return await userApis.getAllUsers({ params: params });
  }
);

export const actFetchUserById = createAsyncThunk(
  "users/fetchMyUser",
  async (userId) => {
    const user = await userApis.getUserById(userId);
    return user;
  }
);

export const actUpdateUserById = createAsyncThunk(
  "users/updateUserById",
  async ({ id, userUpdate }, thunkAPI) => {
    await userApis.updateUserById(id, userUpdate);
    thunkAPI.dispatch(setUserInfo(userUpdate));
    thunkAPI.dispatch(actFetchAllUsers());
    // globalNavigate(ROUTES.HOME_PAGE);
    return;
  }
);

export const actUpdatePasswordById = createAsyncThunk(
  "users/updatePasswordById",
  async ({ id, userUpdate }, thunkAPI) => {
    await userApis.updateUserById(id, userUpdate);
    thunkAPI.dispatch(actFetchAllUsers());
    return userUpdate;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    loginSuccess: (state, action) => {
      // console.log("ádasdasdasd");
      state.isLoading = false;
      state.isLogin = true;
      state.userInfo = action.payload;
      message.success("Đăng nhập thành công!");
      localStorage.setItem("isLogin", true);
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      globalNavigate(ROUTES.HOME_PAGE);
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.isLogin = false;
      state.userInfo = null;
      message.error("Tên đăng nhập hoặc mật khẩu không chính xác!");
      localStorage.setItem("isLogin", false);
      localStorage.setItem("userInfo", JSON.stringify({}));
    },
    logout: (state, action) => {
      state.isLogin = false;
      localStorage.setItem("isLogin", false);
      localStorage.setItem("userInfo", JSON.stringify(null));
      globalNavigate(ROUTES.HOME_PAGE);
      message.success("Đăng xuất thành công");
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      console.log(action.payload, "action.payload");
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
  },

  extraReducers: (builder) => {
    builder.addCase(actCreateNewUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(actCreateNewUser.rejected, (state, action) => {
      state.errors = {};
      message.error(action.payload);
      state.isLoading = false;
    });
    builder.addCase(actCreateNewUser.fulfilled, (state, action) => {
      state.users = action.payload;
      message.success("Đăng ký thành công");
      state.isLoading = false;
      globalNavigate(ROUTES.LOGIN_PAGE);
    });

    builder.addCase(actLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(actLogin.rejected, (state, action) => {
      state.errors = {};
      message.error("Mật khẩu không chính xác");
      state.isLoading = false;
      console.log("login failure", action.payload);
    });

    builder.addCase(actFetchAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });

    builder.addCase(actFetchUserById.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });

    builder.addCase(actUpdateUserById.fulfilled, (state, action) => {
      message.success("Cập nhật thông tin cá nhân thành công");
      // state.userInfo = action.payload;
    });

    builder.addCase(actUpdatePasswordById.fulfilled, (state, action) => {
      // console.log(action.payload, "payload ne");
      state.userInfo.password = action.payload.password;
      state.userInfo.confirmPassword = action.payload.confirmPassword;
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
      message.success("Update password success!!!");
    });
  },
});

export const { setLoading, loginSuccess, loginFailure, logout, setUserInfo } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
