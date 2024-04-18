import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct, deleteProduct } from '../../redux/actions/products';

const ProductManagementComponent = ({product}) => {
    const dispatch = useDispatch();
   

    const [formData, setFormData] = useState({
        name: '',
        photo: '',
        description: '',
        price: '',
        compare_price: '',
        category: '',
        quantity: '',
        sold: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddProduct = () => {
        dispatch(addProduct(formData))
            .then(() => {
                // Limpiar el formulario después de agregar el producto
                setFormData({
                    name: '',
                    photo: '',
                    description: '',
                    price: '',
                    compare_price: '',
                    category: '',
                    quantity: '',
                    sold: ''
                });
            })
            .catch(error => {
                // Manejo de errores
                console.error('Error adding product:', error);
            });
    };

    const handleModifyProduct = (productId) => {
        dispatch(updateProduct(productId, formData))
            .then(() => {
                // Limpiar el formulario después de modificar el producto
                setFormData({
                    name: '',
                    photo: '',
                    description: '',
                    price: '',
                    compare_price: '',
                    category: '',
                    quantity: '',
                    sold: ''
                });
            })
            .catch(error => {
                // Manejo de errores
                console.error('Error updating product:', error);
            });
    };

    const handleDeleteProduct = (productId) => {
        dispatch(deleteProduct(productId))
            .catch(error => {
                // Manejo de errores
                console.error('Error deleting product:', error);
            });
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Product Management</h2>
            <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Add Product</h3>
                <div className="grid grid-cols-2 gap-4">
                    <input className="border border-gray-300 p-2 rounded-md" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                    <input className="border border-gray-300 p-2 rounded-md" type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
                    <input className="border border-gray-300 p-2 rounded-md" type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
                    <input className="border border-gray-300 p-2 rounded-md" type="number" name="compare_price" value={formData.compare_price} onChange={handleChange} placeholder="Compare Price" />
                    <input className="border border-gray-300 p-2 rounded-md" type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
                    <input className="border border-gray-300 p-2 rounded-md" type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" />
                    <input className="border border-gray-300 p-2 rounded-md" type="number" name="sold" value={formData.sold} onChange={handleChange} placeholder="Sold" />
                    
                </div>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddProduct}>Add Product</button>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-2">Products</h3>
                <ul>
                    {product.map(product => (
                        <li key={product.id} className="border border-gray-300 rounded p-4 mb-4">
                            <strong className="text-lg">{product.name}</strong>
                            <p className="mt-2">Description: {product.description}</p>
                            <p>Price: ${product.price}</p>
                            <p>Compare Price: ${product.compare_price}</p>
                            <p>Category: {product.category}</p>
                            <p>Quantity: {product.quantity}</p>
                            <p>Sold: {product.sold}</p>
                            <button className="mt-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleModifyProduct(product.id)}>Update</button>
                            <button className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductManagementComponent;



