import { store, persistor } from '../redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes'
import Tema from './theme';

function App() {
  return (
    <Tema>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Rotas />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </Tema>
  )
}

export default App
