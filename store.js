import { configureStore } from "@reduxjs/toolkit";
import pcBuilderSlice from "./features/pcBuilder/pcBuilderSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

// const persistConfig={
//   key:"root",
   
//   storage
// }
// const reducer = combineReducers({
//   pcBuilder: pcBuilderSlice,
// })
// const persistedReducer = persistReducer(persistConfig,reducer)

const store = configureStore({
  reducer:{
    pcBuilder: pcBuilderSlice,
  }
});
export default store;
