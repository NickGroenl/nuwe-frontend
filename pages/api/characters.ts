import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const results = await axios({
      method: 'post',
      headers : { 'Content-type': 'application/json' },
      url: `http://localhost:3001/character`,
      data: req.body,
    })
    res.status(results.status).json(results.data)
  } catch (error) {
    res.status(404).json(error)
  }
}

export default handler