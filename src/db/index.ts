import {MongoClient, Sort, ObjectId} from 'mongodb';

export async function connectDatabase(
    user: string,
    password: string,
    name: string
) {
    const client = await MongoClient.connect(
        `mongodb+srv://${user}:${password}@cluster0.45q47.mongodb.net/${name}?retryWrites=true&w=majority`
    );

    return client;
}

export async function getAllCars(
    client: MongoClient,
    collection: string,
    sort: Sort
) {
    const db = client.db();

    const cars = await db.collection(collection).find().sort(sort).toArray();

    return cars;
}

export async function getCar(
    client: MongoClient,
    collection: string,
    id: string
) {
    const db = client.db();

    const objId = new ObjectId(id);

    const selectedCar = await db.collection(collection).findOne({_id: objId});

    return selectedCar;
}
