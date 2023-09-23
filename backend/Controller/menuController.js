const menu = require("../Model/menu");


const menuController = async(req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No image provided' });
        }

        const image = req.file.filename;
        const { name, description, price } = req.body;



        let obj = {
            name: name,
            description: description,
            price: price,
            image: image
        }

        await menu.create(obj);

        return res.status(201).json({ message: 'Menu item added successfully' });

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in add menu api",
            error
        });
    }
}





module.exports = menuController;