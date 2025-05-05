import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
	image: string;
}

interface CartState {
	items: CartItem[];
}

const initialState: CartState = {
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<CartItem>) => {
			const item = action.payload;
			const existing = state.items.find(i => i.id === item.id);
			if (existing) {
				existing.quantity += item.quantity;
			} else {
				state.items.push(item);
			}
		},
		updateQuantity: (
			state,
			action: PayloadAction<{ id: string; delta: number }>
		) => {
			const item = state.items.find(i => i.id === action.payload.id);
			if (item) {
				item.quantity = Math.max(1, item.quantity + action.payload.delta);
			}
		},
		removeFromCart: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter(i => i.id !== action.payload);
		},
		clearCart: state => {
			state.items = [];
		},
	},
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } =
	cartSlice.actions;

export default cartSlice.reducer;
