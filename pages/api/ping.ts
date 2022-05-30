import type { NextApiRequest, NextApiResponse } from 'next'
import rateLimit from '@utils/rate-limit'

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
})

const ping = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await limiter.check(res, 10, `rate-limit-ip:${req.headers['x-real-ip']}`)
  } catch {
    res.status(429).json({ pong: false })
  }

  res.status(200).json({ pong: true })
}

export default ping
