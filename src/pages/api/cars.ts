import type {NextApiRequest, NextApiResponse} from 'next';

import {connectDatabase, getAllCars} from '@db';

import {CarApiResponseData} from '@shared/types';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<CarApiResponseData>
) {
    let client;
    let result;

    if (req.method !== 'GET') {
        return;
    }

    try {
        client = await connectDatabase();
    } catch (error) {
        res.status(500).json({
            message: 'Connecting to the database failed!',
        });
        return;
    }

    try {
        result = await getAllCars(client, 'cars', {_id: 1});
    } catch (error) {
        res.status(500).json({message: 'Getting data failed!'});
        return;
    }

    client.close();

    res.status(200).json({cars: result, message: 'Success get all cars.'});
}
