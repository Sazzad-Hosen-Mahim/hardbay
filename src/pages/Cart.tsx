import React from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks/useRedux';
import {
	updateQuantity,
	// removeFromCart,
} from '@/store/Slices/CartSlice/cartSlice';

const CartPage = () => {
	const cartItems = useAppSelector(state => state.cart.items);
	const dispatch = useAppDispatch();

	const handleQuantityChange = (id: string, delta: number) => {
		dispatch(updateQuantity({ id, delta }));
	};

	// const handleRemove = (id: string) => {
	// 	dispatch(removeFromCart(id));
	// };

	const total = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	return (
		<div className="max-w-4xl mx-auto p-6">
			<h2 className="text-2xl font-semibold mb-6 text-center">Shopping Cart</h2>
			<div className="w-full overflow-x-auto">
				<table className="w-full table-auto text-left rounded-xl overflow-hidden">
					<thead className="bg-gray-100">
						<tr>
							<th className="p-4">Preview</th>
							<th className="p-4">Product</th>
							<th className="p-4">Price</th>
							<th className="p-4">Quantity</th>
							<th className="p-4">Subtotal</th>
						</tr>
					</thead>
					<tbody>
						{cartItems.map(item => (
							<tr key={item.id} className="border-b">
								<td className="p-4">
									<img
										src={item.image}
										alt={item.name}
										className="h-16 w-20 object-cover rounded"
									/>
								</td>
								<td className="p-4">{item.name}</td>
								<td className="p-4">${item.price}</td>
								<td className="p-4">
									<div className="flex items-center space-x-2">
										<button
											onClick={() => handleQuantityChange(item.id, -1)}
											className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
											disabled={item.quantity === 1}
										>
											-
										</button>
										<span>{item.quantity}</span>
										<button
											onClick={() => handleQuantityChange(item.id, 1)}
											className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
										>
											+
										</button>
									</div>
								</td>
								<td className="p-4">${item.price * item.quantity}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="flex justify-between items-center mt-6">
				<h3 className="text-xl font-semibold">Total: ${total}</h3>
				<button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
					Proceed to Payment
				</button>
			</div>
		</div>
	);
};

export default CartPage;
