import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../redux/slices/appSlice'
import basketReducer from '../redux/slices/basketSlice'
import productReducer from '../redux/slices/productSlice'

export const store = configureStore({
  reducer: {

    app: appReducer,
    product: productReducer,
    basket :  basketReducer
  }
})