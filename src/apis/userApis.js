import axios from "axios";

export const userApis = {
  createNewUser: async (user) => {
    return await axios.post(`${process.env.REACT_APP_BE_URL}users`, user);
  },

  getAllUsers: async (params) => {
    const { data } = await axios.get(`${process.env.REACT_APP_BE_URL}users`, {
      params: params,
    });
    return data;
  },

  getUserById: async (userId) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}users/${userId}`
    );
    return response.data;
  },

  updateUserById: async (userId, userUpdate) => {
    return await axios.patch(
      `${process.env.REACT_APP_BE_URL}users/${userId}`,
      userUpdate
    );
  },
};
