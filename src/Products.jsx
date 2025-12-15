import React,{useEffect, useState} from 'react';
import { Plus, Package } from 'lucide-react';
import { mockProducts } from './mockData';
import axios from 'axios';

const Products = () => {
   const [mockProduct, setProducts] = useState([]);
  
        useEffect(() => {
      axios.get("http://localhost:8080/product/getAllProduct")
        .then(response => {
         setProducts(response.data);
          console.log("mode=>",mockProducts);
          
          console.log("response=>",response.data);
        })
        .catch(error => {
          console.error("Error fetching products:", error);
        });
    }, []);

  const getCategoryColor = (category) => {
    const categoryColors = {
      'Electronics': 'bg-blue-100 text-blue-700',
      'Clothing': 'bg-purple-100 text-purple-700',
      'Footwear': 'bg-green-100 text-green-700',
      'Accessories': 'bg-pink-100 text-pink-700',
      'Sports': 'bg-orange-100 text-orange-700'
    };
    return categoryColors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Products Catalog</h1>
          <p className="text-gray-600">Manage your product inventory</p>
        </div>
        
        <button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2 shadow-lg shadow-purple-200">
          <Plus className="w-5 h-5" /> 
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockProduct.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <Package className="w-16 h-16 text-gray-400" />
            </div>
            
            <div className="p-6">
              
              <div className="mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(product.category)}`}>
                  {product.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {product.productName}
              </h3>
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    ₹{product.productPrice}
                  </p>
                  <p className="text-sm text-gray-500">
                    Stock: {product.quantity}
                  </p>
                </div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('View product details:', product.id);
                  }}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-900 p-3 rounded-xl transition-colors"
                >
                  <Package className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Total Products: <span className="font-bold text-gray-900">{mockProducts.length}</span>
          </p>
          <p className="text-gray-600">
            Total Stock: <span className="font-bold text-gray-900">
              {mockProducts.reduce((sum, product) => sum + Number(product.quantity), 0)}
            </span> units
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;