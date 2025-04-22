import React from 'react';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
	const navigate = useNavigate(); // 👈 initialize navigate
	const submitEmail = async (e: React.FormEvent) => {
		e.preventDefault();
		const form = e.currentTarget;
		const emailInput = form.querySelector(
			'input[name="email"]'
		) as HTMLInputElement | null;
		const email = emailInput?.value;
		console.log(email);
		if (!email) {
			console.error('Email is required');
			return;
		}
		try {
			const response = await fetch(
				'https://tortuga7-backend.onrender.com/auth/forgot-password',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ email }),
				}
			);
			console.log(response);
			if (!response.ok) {
				throw new Error('Failed to send password reset email');
			}
			console.log('Password reset email sent successfully');
			navigate('/login'); // Navigate to login page after successful email submission
		} catch (error) {
			console.error('Error sending password reset email:', error);
		}
	};
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<h1 className="text-2xl font-bold mb-4">Forget Password</h1>
			<p className="mb-4">Please enter your email to reset your password.</p>
			<form
				onSubmit={submitEmail}
				className="bg-white p-6 rounded shadow-md w-80"
			>
				<label className="block mb-2 text-sm font-medium text-gray-700">
					Email
				</label>
				<input
					className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
					type="email"
					placeholder="Enter your Email"
					name="email"
					required
				/>
				<button
					className="w-full cursor-pointer mt-4 bg-primary-blue text-white py-2 rounded-md hover:bg-primary-orange"
					type="submit"
				>
					Reset Password
				</button>
			</form>
		</div>
	);
};

export default ForgetPassword;
