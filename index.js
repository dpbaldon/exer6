import express from 'express'
import router from './router.js';
const app = express();
router(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000)