import Car from '../models/car.model.js'
import { uploadToCloudinary } from '../config/cloudinary.js'

export const addNewCar = async (req, res) => {
    try {
        const { make, model, year, color, price } = req.body

        if(!make || !model || !year || !color || !price) {
            return res.status(400).json({ message: 'All fields are required' })
        }
        if(!req.file) {
            return res.status(400).json({ message: 'Image is required' })
        }

        const result = await uploadToCloudinary(req.file.buffer)

        const newCar = await Car.create({
            make,
            model,
            year,
            color,
            price,
            image: result.secure_url
        })

        return res.status(201).json({
            message: 'Car added successfully',
            newCar
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Failed to add car',
            error: error.message
        })
    }
}

export const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();

        if(!cars) {
            return res.status(404).json({ message: 'No cars found' })
        }

        return res.status(200).json({
            message: 'Cars fetched successfully',
            cars
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Failed to fetch cars',
            error: error.message
        })
    }
}

export const getCarById = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findById(id);

        if(!car) {
            return res.status(404).json({ message: 'Car not found' })
        }

        return res.status(200).json({
            message: 'Car fetched successfully',
            car
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Failed to fetch car',
            error: error.message
        })
    }
}

export const deleteCarById = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findByIdAndDelete(id);

        if(!car) {
            return res.status(404).json({ message: 'Cannot find the car' })
        }

        return res.status(200).json({
            message: 'Car deleted successfully',
            car
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Failed to delete car',
            error: error.message
        })
    }
}