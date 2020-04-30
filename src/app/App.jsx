import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import initStore from '../app/Redux/store/index';

import ServiceApp from '../ServiceApp';
import { onAuthStateChanged, storeAuthUser } from '../app/Redux/actions/index';

const store = initStore();

function App() {
	useEffect(() => {
		const unsubscribeFromAuth = onAuthStateChanged((authUser) => {
			store.dispatch(storeAuthUser(authUser));
		});

		return () => unsubscribeFromAuth();
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<ServiceApp />
			</Router>
		</Provider>
	);
}

export default App;
