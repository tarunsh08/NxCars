import mongoose from 'mongoose'

const carSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: [1900, "Year must be after 1900"],
        max: [2025, "Year must be before 2025"]
    },
    color: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price cannot be negative"],
        max: [1000000, "Price must be less than 1000000"]
    },
    image: {
        type: String,
        required: true
    }
})

const Car = mongoose.model('Car', carSchema)

export default Car
