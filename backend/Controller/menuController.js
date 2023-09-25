const menu = require("../Model/menu");


const addMenuController = async(req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No image provided' });
        }

        const image = req.file.filename;
        const { name, description, price, seller } = req.body;


        let obj = {
            name: name,
            description: description,
            price: price,
            image: image,
            seller: seller
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


const getMenuController = async(req, res) => {
    try {
        const menuItems = await menu.find(); // Retrieve all menu items from your database
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in get menu api",
            error
        });
    }

}

const deleteMenuController = async(req, res) => {
    try {
        const menuItem = await menu.findByIdAndDelete(req.params.id);
        if (!menuItem) {
            return res.status(404).json({ error: 'Menu Item not found' });
        }
        res.json({ message: 'Menu Item deleted' });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in delete menu api",
            error
        });
    }
}

const updateMenuController = async(req, res) => {
    try {
        const menuItem = await menu.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true } // To return the updated document
        );
        if (!menuItem) {
            return res.status(404).json({ error: 'Menu Item not found' });
        }
        res.send(menuItem);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { addMenuController, getMenuController, deleteMenuController, updateMenuController };