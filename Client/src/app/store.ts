import { baseApi } from "@/api/baseApi";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([baseApi.middleware]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
