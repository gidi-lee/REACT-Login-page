import { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
	const adminUser = {
		name: 'Gidi',
		email: 'aaa@aaa.com',
		password: '1234'
	};

	const [user, setUser] = useState({ name: '', email: '' });
	const [error, setError] = useState('');

	const login = (details) => {
		console.log(details);

		if (
			details.email == adminUser.email &&
			details.password == adminUser.password &&
			details.name == adminUser.name
		) {
			console.log('Logged in');
			setUser({
				name: details.name,
				email: details.email
			});
		} else {
			console.log('Details do not match');
			setError('Details do not match');
		}
	};

	const logout = () => {
		console.log('logOut');
		setUser({ name: '', email: '' });
	};

	return (
		<div className='App'>
			{user.email != '' ? (
				<div className='welcome'>
					<h2>
						welcome <span>{user.name}</span>
					</h2>
					<button onClick={logout}>Logout</button>
				</div>
			) : (
				<LoginForm login={login} error={error} />
			)}
		</div>
	);
}

export default App;
