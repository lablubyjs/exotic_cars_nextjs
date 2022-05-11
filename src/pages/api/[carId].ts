import type {NextApiRequest, NextApiResponse} from 'next';

import {connectDatabase, getCar} from '@db';

import {CarApiResponseData} from '@shared/types';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<CarApiResponseData>
) {
    let client;
    let result;

    const id = req.body.id;

    if (req.method !== 'POST') {
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
        result = await getCar(client, 'cars', id);
    } catch (error) {
        res.status(500).json({message: 'Getting data failed!'});
        return;
    }

    client.close();

    res.status(200).json({car: result, message: 'Success get car.'});
}
