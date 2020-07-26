import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './styles/App.scss';
import { ConfigureStore } from './store/configureStore';
import Routing from './components/routes/Routing';

const store = ConfigureStore();

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routing />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
