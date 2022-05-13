import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';

import {ICar} from '@shared/interfaces';

import {CarsSlice} from '@shared/types';

import {carsServices} from '@shared/services';

import {RootState} from '.';

const {getCar} = carsServices();

const initialCurrentModelState: CarsSlice = {
    currentModel: {
        _id: 'initial state',
        model: 'initial state',
        brand: 'initial state',
        price: 0,
        period: 'initial state',
        brand_logo: 'initial state',
        cover_photo: 'initial state',
        photos: [],
    },
    currentColorIndex: 0,
    pending: false,
    error: false,
};

const currentModelSlice = createSlice({
    name: 'cars',

    initialState: initialCurrentModelState,

    reducers: {
        setCurrentColorIndex: (state, action: PayloadAction<number>) => {
            state.currentColorIndex = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(asyncSetCurrentModel.pending, (state) => {
                state.pending = true;
            })
            .addCase(
                asyncSetCurrentModel.fulfilled,
                (state, action: PayloadAction<ICar>) => {
                    state.pending = false;
                    state.currentModel = action.payload;
                }
            )
            .addCase(asyncSetCurrentModel.rejected, (state) => {
                state.pending = false;
                state.error = true;
            });
    },
});

export const asyncSetCurrentModel = createAsyncThunk<any, string>(
    'models/getCar',
    async (id: string) => {
        const response = await getCar(id);
        return response.car!;
    }
);

export const {setCurrentColorIndex} = currentModelSlice.actions;

export const currentModel = (state: RootState) => state.models.currentModel;
export const pending = (state: RootState) => state.models.pending;
export const error = (state: RootState) => state.models.error;
export const currentColorIndex = (state: RootState) => state.models.currentColorIndex;

export default currentModelSlice.reducer;
