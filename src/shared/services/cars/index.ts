import instance from '../axios.config';

import {ICarsResponse} from '@shared/interfaces';

import {ICars} from './interfaces';

const carsServices = (): ICars => {
    async function getCars(): Promise<ICarsResponse> {
        return instance.get('/api/cars');
    }

    async function getCar(id: string): Promise<ICarsResponse> {
        return instance.post(`/api/${id}`, JSON.stringify({id: id}));
    }

    return {getCars, getCar};
};

export default carsServices;
