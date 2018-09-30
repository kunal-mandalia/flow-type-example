// @flow
import express from 'express'
import type { $Request, $Response } from 'express';

import { square } from './square'

const app = express()

app.get('/square/:n', (req: $Request, res: $Response) => {
  const n = req.params.n
  return res.status(200).json({ result: square(n) })
})

app.listen(5000, () => {
  console.log("Flow-type-example server listening on port 5000")
})
