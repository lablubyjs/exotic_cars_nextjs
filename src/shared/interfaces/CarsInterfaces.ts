export interface ICarsResponse {
    cars?: ICar[];
    car?: ICar;
}

export interface IModel {
    color: string;
    photo: string;
}

export interface ICar {
    _id: string;
    model: string;
    brand: string;
    price: number;
    period: string;
    brand_logo: string;
    cover_photo: string;
    photos: IModel[];
}
