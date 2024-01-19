import React from 'react';

import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import ApplicationNavigator from './src/navigation/ApplicationNavigator';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
      </PersistGate>
    </Provider>
  );
}
