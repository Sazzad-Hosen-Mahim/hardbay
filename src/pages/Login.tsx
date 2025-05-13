import { LogInComponent } from '@/components/logIn/LogInComponent';

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
