import React, {MouseEventHandler} from 'react';

import {ICar, IModel} from '@shared/interfaces';

export type ChildrenProp = {
    children: React.ReactNode;
};

export type ButtonProps = {
    width: number;
    height: number;
    backgroundColor: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    children: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
};

export type CarListProps = {
    cars: ICar[];
};

export type CarsSlice = {
    currentModel: ICar;
    currentColorIndex: number;
    pending: boolean;
    error: boolean;
};

export type CarApiResponseData = {
    car?: any;
    cars?: any;
    message: string;
};

export type CarDetailsProps = {
    car: ICar;
    currentColorIndex: number;
    setCurrentColorIndex: (index: number) => void;
};

export type CarSlide = {
    id: number;
    photo: string;
};

export type CarSliderProps = {
    models: CarSlide[];
    onChangeModelColor: (index: number) => void;
    currentIndex: number;
};
