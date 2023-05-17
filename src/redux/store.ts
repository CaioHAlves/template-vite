import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistReducer,
  persistStore,
  getStoredState
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
})

const persistConfig = {
  key: 'template-vite',
  storage,
  blacklist: [/*Estados separadas por virgulas*/]
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.VITE_AMBIENTE !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})
const persistor = persistStore(store)

function persistorInit() {
  getStoredState({
    storage,
    key: 'template-vite'
  })
}

persistorInit()

export type RootState = ReturnType<typeof store.getState>
export { store, persistor }
