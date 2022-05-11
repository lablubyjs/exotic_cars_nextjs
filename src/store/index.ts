import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';

import currentModelSlice from './cars-slice';

const store = configureStore({
    reducer: {
        models: currentModelSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<any>
>;

export default store;
