import React, { Component } from 'react';
import './Edimenu.css'; // Import CSS file for styling
import Header from './Header';
class EditMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [
                {
                    id: 1,
                    name: 'Item 1',
                    description: 'Description for Item 1',
                    price: 10.99,
                    image: 'item1.jpg',
                },
                {
                    id: 1,
                    name: 'Item 1',
                    description: 'Description for Item 1',
                    price: 10.99,
                    image: 'item1.jpg',
                },
                {
                    id: 1,
                    name: 'Item 1',
                    description: 'Description for Item 1',
                    price: 10.99,
                    image: 'item1.jpg',
                },
                {
                    id: 2,
                    name: 'Item 2',
                    description: 'Description for Item 2',
                    price: 15.99,
                    image: 'item2.jpg',
                },
                // Add more menu items here
            ],
            selectedItem: null,
            isEditing: false,
        };
    }

    handleEdit = (item) => {
        this.setState({
            selectedItem: { ...item },
            isEditing: true,
        });
    };

    handleDelete = (itemId) => {
        const updatedMenuItems = this.state.menuItems.filter((item) => item.id !== itemId);
        this.setState({ menuItems: updatedMenuItems });
    };

    handleSave = () => {
        const { selectedItem, isEditing } = this.state;
        if (isEditing) {
            // Update the selected item in the menuItems array
            const updatedMenuItems = this.state.menuItems.map((item) =>
                item.id === selectedItem.id ? selectedItem : item
            );
            this.setState({ menuItems: updatedMenuItems, selectedItem: null, isEditing: false });
        } else {
            // Add a new item to the menuItems array (generate a unique ID)
            const newItem = { ...selectedItem, id: Date.now() };
            this.setState((prevState) => ({
                menuItems: [...prevState.menuItems, newItem],
                selectedItem: null,
            }));
        }
    };

    handleCancel = () => {
        this.setState({ selectedItem: null, isEditing: false });
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            selectedItem: {
                ...prevState.selectedItem,
                [name]: value,
            },
        }));
    };

    render() {
        const { menuItems, selectedItem, isEditing } = this.state;

        return (
           <>
           <Header/>
            <div className="menu-edit-delete-page">
                <h1>Edit and Delete Menu Items</h1>
                <div className="menu-items">
                    {menuItems.map((item) => (
                        <div key={item.id} className="menu-item">
                            <img src={item.image} alt={item.name} />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p>Price: ${item.price}</p>
                            </div>
                            <div className="item-actions">
                                <button onClick={() => this.handleEdit(item)}>Edit</button>
                                <button onClick={() => this.handleDelete(item.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
                {isEditing && (
                    <div className="edit-form">
                        <h2>{selectedItem ? 'Edit Item' : 'Add New Item'}</h2>
                        <form>
                            <div className="form-group">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={selectedItem.name}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <input
                                    type="text"
                                    name="description"
                                    value={selectedItem.description}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Price:</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={selectedItem.price}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Image URL:</label>
                                <input
                                    type="text"
                                    name="image"
                                    value={selectedItem.image}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-buttons">
                                <button type="button" onClick={this.handleSave}>
                                    Save
                                </button>
                                <button type="button" onClick={this.handleCancel}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div></>
        );
    }
}

export default EditMenu;
