import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import useDarkMode from 'use-dark-mode';

import './styles/App.scss';
import { ConfigureStore } from './store/configureStore';
import Routing from './components/routes/Routing';

const store = ConfigureStore();

function App() {
	const darkMode = useDarkMode(false);
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routing {...{ darkMode }} />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
