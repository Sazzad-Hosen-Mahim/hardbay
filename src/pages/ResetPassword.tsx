import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ResetPassword = () => {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	// const { token } = useParams();
	// console.log(token);

	const token = searchParams.get('token');
	console.log(token);

	const handleReset = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!password || password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			const res = await fetch(
				`https://tortuga7-backend.onrender.com/auth/reset-password`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ resetToken: token, newPassword: password }),
				}
			);

			if (!res.ok) {
				throw new Error('Reset failed');
			}
			console.log(res);

			alert('Password reset successful!');
			console.log();
			navigate('/login');
		} catch (err) {
			console.error('Error:', err);
			alert('Something went wrong.');
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<form
				onSubmit={handleReset}
				className="bg-white p-6 rounded-lg shadow-md w-80"
			>
				<h2 className="text-xl font-semibold mb-4">Reset Password</h2>
				<input
					type="password"
					placeholder="New Password"
					className="mb-3 w-full border px-3 py-2 rounded"
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
				<input
					type="password"
					placeholder="Confirm Password"
					className="mb-3 w-full border px-3 py-2 rounded"
					value={confirmPassword}
					onChange={e => setConfirmPassword(e.target.value)}
					required
				/>
				<button
					type="submit"
					className="w-full bg-primary-blue text-white py-2 rounded hover:bg-primary-orange"
				>
					Reset Password
				</button>
			</form>
		</div>
	);
};

export default ResetPassword;

// http://localhost:5173/reset-password?token=a40a83d572c20bd652faf897b2f0c1ef03c455bf24517b7f3b068a5c1156450c
