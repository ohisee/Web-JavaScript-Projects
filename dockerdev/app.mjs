/**
 * @fileoverview main app 
 */
import express from 'express';

import connectToRemoteHost from './helpers.mjs'

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>How are you!</h2>');
});

await connectToRemoteHost();

app.listen(3000);
