import express from 'express'
import apirouter from './routes/router.js';
import cors from 'cors'

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors())
app.use('/api', apirouter);

app.listen(port, () => {
    console.log(`server running on ${port}`)
})
