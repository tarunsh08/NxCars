import { Router } from 'express'
import { addNewCar, deleteCarById, getAllCars, getCarById } from '../controllers/car.controllers.js';
import multer from "multer"

const router = Router();
const upload = multer();

router.post('/cars', upload.single("file"), addNewCar);
router.get('/cars', getAllCars);
router.get('/car/:id', getCarById);
router.delete('/car/:id', deleteCarById);

export default router;
