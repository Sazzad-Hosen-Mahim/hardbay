import { LogInComponent } from '@/components/logIn/LogInComponent';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const Login = () => {
	return (
		<div>
			<Toaster position="top-right" reverseOrder={false} />
			<LogInComponent />
		</div>
	);
};

export default Login;
