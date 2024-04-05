import express from 'express';
import { createList } from '../controllers/createList';

const router = express.Router()


router.post('/create', createList)



export default router;