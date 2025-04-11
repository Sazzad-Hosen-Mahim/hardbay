import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [isSubmitLogin, setIsSubmitLogin] = useState(false);

	const navigate = useNavigate(); // 👈 initialize navigate

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();

		if (!email || !password) {
			alert('Please enter both email and password.');
			return;
		}

		// Replace with your real login logic
		console.log('Logging in with:', { email, password });
		navigate('/');

		// After login, navigate somewhere (optional)
		// navigate("/dashboard");
	};

	const handleForgotPassword = () => {
		navigate('/forgot-password');
	};

	const handleUpdatePassword = () => {
		navigate('/update-password');
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md pb-2 ">
				<div className="mb-6">
					<h2 className="mt-6 text-center text-3xl font-bold text-gray-900 relative group pb-2 hover:text-primary-orange ">
						Login
						<span className="absolute left-0 bottom-0 w-full  h-[2px] bg-primary-orange transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
					</h2>
				</div>
				<form onSubmit={handleLogin}>
					<div className="mb-4">
						<label className="block text-gray-700 font-medium mb-1">
							Email
						</label>
						<input
							type="email"
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
							placeholder="Enter your email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 font-medium mb-1">
							Password
						</label>
						<input
							type={showPassword ? 'text' : 'password'}
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
							placeholder="Enter your password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							required
						/>
						<button
							type="button"
							className="text-sm text-blue-500 mt-1"
							onClick={() => setShowPassword(!showPassword)}
						>
							{showPassword ? 'Hide Password' : 'Show Password'}
						</button>
					</div>

					<button
						type="submit"
						disabled={isSubmitLogin}
						className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
							isSubmitLogin
								? 'bg-primary-orange cursor-pointer'
								: 'bg-primary-orange hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-3000'
						} transition-colors duration-200`}
					>
						{isSubmitLogin ? 'Logging in Account...' : 'Login Account'}
					</button>

					{/* Extra Buttons */}
					<div className="flex justify-between text-sm text-blue-500 py-3">
						<button type="button" onClick={handleForgotPassword}>
							Forgot Password?
						</button>
						<button type="button" onClick={handleUpdatePassword}>
							Update Password?
						</button>
					</div>
				</form>

				<p className="text-center text-sm text-gray-600 mt-6">
					Don't have an account?{' '}
					<a href="/signup" className="text-blue-500">
						Sign up
					</a>
				</p>
			</div>
		</div>
	);
};

export default Login;
