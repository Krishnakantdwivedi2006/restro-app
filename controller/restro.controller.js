import MenuModel from "../model/menu.model.js";

class RestroController {
  static async addMenuItem(req, res) {
    try {
      const { id, name, price, description, image, category } = req.body;

      if (!name || price === undefined) {
        return res.status(400).json({
          message: "Name and price are required",
        });
      }

      const newMenuItem = await MenuModel.create({
        id,
        name,
        price,
        description,
        image,
        category,
      });

      return res.status(201).json({
        message: "Menu item added successfully",
        menuItem: newMenuItem,
      });
    } catch (error) {
      console.error("Error adding menu item:", error);
      return res.status(500).json({ message: "Error adding menu item" });
    }
  }

  static async getMenuItems(req, res) {
    try {
      const menuItems = await MenuModel.find();
      return res.status(200).json({ menuItems });
    } catch (error) {
      console.error("Error fetching menu items:", error);
      return res.status(500).json({ message: "Error fetching menu items" });
    }
  }
}

export default RestroController;