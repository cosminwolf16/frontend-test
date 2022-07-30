import { NextApiRequest, NextApiResponse } from 'next';
import mock_data from './mock-data.json';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json(mock_data);
  }
};

export default handler;
