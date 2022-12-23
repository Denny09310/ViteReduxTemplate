import React from 'react';
import Routes from '@/app/Routes';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
	return (
		<>
			<Routes />
			<Toaster position='bottom-right' />
		</>
	);
};

export default App;

