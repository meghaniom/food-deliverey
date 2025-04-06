import foodModel from "../models/foodModule.js";
import fs from 'fs'




// add food item

const addFood = async (req, res ) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel ({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
       res.json({success: true, message: 'food Added'})
    }
    catch (error) {
        console.log(error)
        res.json({success: false, message: 'error'})
    }

}

export{addFood}