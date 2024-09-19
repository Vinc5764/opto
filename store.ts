// store.ts
import { create } from 'zustand';

type CartItem = {
  id: number;
  name: string;
  originalPrice: number;
  salePrice: number;
  quantity: number;
  color: string;
  image: {
    src: string;
    height: number;
    width: number;
    blurDataURL: string;
  };
  salePercentage: number;
};

type CartState = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: number, change: number) => void;
  removeItem: (id: number) => void;
  totalItems: () => number;
  totalPrice: () => number;
};

export const useStore = create<CartState>((set, get) => ({
  cartItems: [],

  addToCart: (item: CartItem) => set(state => {
    const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      return {
        cartItems: state.cartItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        ),
      };
    }
    return {
      cartItems: [...state.cartItems, item],
    };
  }),

  updateQuantity: (id: number, change: number) => set(state => ({
    cartItems: state.cartItems
      .map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      )
      .filter(item => item.quantity > 0),
  })),

  removeItem: (id: number) => set(state => ({
    cartItems: state.cartItems.filter(item => item.id !== id),
  })),

  totalItems: () => get().cartItems.reduce((sum, item) => sum + item.quantity, 0),

  totalPrice: () => get().cartItems.reduce((sum, item) => sum + item.salePrice * item.quantity, 0),
}));
