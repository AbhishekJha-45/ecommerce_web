import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
const initialState = {
  cart: [],
  total: 0,
};
const access_token = Cookies.get("access_token");
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (state, action) => {
    //   const item = action.payload;
    //   const existingItem = state.cart.find(
    //     (cartItem) => cartItem.item_id === item.item_id
    //   );
    //   if (existingItem) {
    //     existingItem.quantity += 1;
    //   } else {
    //     state.cart.push({ ...item, quantity: 1 });
    //   }
    //   state.total = state.cart.reduce(
    //     (total, item) => total + item.price * item.quantity,
    //     0
    //   );
    // },
    initialCart: (state, action) => {
      state.cart = action.payload;
      state.total = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateCartItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        console.table(action.payload);
        state.status = "succeeded";
        state.cart = state.cart.map((item) =>
          item.item_id === action.payload.item_id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
        state.total = state.cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.status = "failed";
      });

    builder
      .addCase(addToCart.pending, (state) => {
        state.status = "loading";
        console.log("adding to cart");
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        const item = action.payload;
        const existingItem = state.cart.find(
          (cartItem) => cartItem.item_id === item.item_id
        );
        if (existingItem) {builder
          .addCase(updateCartItem.pending, (state) => {
            state.status = "loading";
          })
          .addCase(updateCartItem.fulfilled, (state, action) => {
            console.table(action.payload);
            state.status = "succeeded";
            state.cart = state.cart.map((item) =>
              item.item_id === action.payload.item_id
                ? (item.quantity = action.payload.quantity)
                : { ...item }
            );
            state.total = state.cart.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            );
          })
          .addCase(updateCartItem.rejected, (state, action) => {
            state.status = "failed";
          });
          console.log("item already exists");
        } else {
          state.cart.push({ ...item });
        }
        state.total = state.cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = "failed";
        console.log("failed to add to cart");
      });

    builder
      .addCase(deleteCartItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = state.cart.filter(
          (item) => item.item_id !== action.payload.item_id
        );
        state.total = state.cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      });
  },
});

export const { incrementQuantity, decrementQuantity, initialCart } =
  cartSlice.actions;
export default cartSlice.reducer;

export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async ({ item_id, product_id, quantity }) => {
    console.log(item_id, product_id, quantity);
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL}/order/items/update-quantity`,
      {
        item_id,
        quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    // console.log(response.data);
    return response.data;
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (product_id) => {
    console.log("adding to cart", product_id);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cart/add-to-cart`,
      {
        product_id,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    return response.data.data;
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (item_id) => {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/order/items/delete-order-item`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        data: {
          item_id,
        },
      }
    );
    return response.data;
  }
);
