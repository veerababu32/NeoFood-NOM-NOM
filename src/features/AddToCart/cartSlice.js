import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // updateUserCartFirebase(state.cartItems);
    },

    removeItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (itemIndex === -1) {
        return;
      } else {
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
        } else if (state.cartItems[itemIndex].cartQuantity === 1) {
          const nextCartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.id
          );
          state.cartItems = nextCartItems;
        }

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        // updateUserCartFirebase(state.cartItems);
      }
    },

    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // updateUserCartFirebase(state.cartItems);
    },

    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { pricePerServing, cartQuantity } = cartItem;
          const itemTotal = pricePerServing * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total.toFixed(2);
    },
  },
});

// async function updateUserCartFirebase(cartData) {
//   // try {
//   //   // const docRef = await addDoc(collection(db, "userCart"), {cartItems: cartData});
//   //   const user =
//   //     localStorage.getItem("userData") &&
//   //     JSON.parse(localStorage.getItem("userData"));
//   //   console.log(user);
//   //   const docRef = await setDoc(
//   //     doc(db, "userCart", user.email),
//   //     { cartItems: cartData },
//   //     { merge: true }
//   //   );
//   //   console.log("Document written with ID: ", docRef);
//   // } catch (e) {
//   //   console.error("Error adding document: ", e);
//   // }
// }

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart, getTotals } = cartSlice.actions;
