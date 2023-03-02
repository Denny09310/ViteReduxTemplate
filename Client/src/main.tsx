import App from '@/App';
import store from '@/app/store';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import '@/main.css';
import '@/sw.registration';

const base = document.head.getElementsByTagName('base')[0].getAttribute('href');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<Router basename={base!}>
			<App />
		</Router>
	</Provider>
);

