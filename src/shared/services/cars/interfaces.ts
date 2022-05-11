import {ICarsResponse} from '@shared/interfaces';

export interface ICars {
    getCars: () => Promise<ICarsResponse>;
    getCar: (id: string) => Promise<ICarsResponse>;
}
