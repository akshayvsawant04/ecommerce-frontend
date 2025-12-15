import React from 'react';
import { Plus } from 'lucide-react';
import { mockOrders } from './mockData';

const Orders = () => {
  
  const getStatusColor = (status) => {
    const statusColors = {
      'Delivered': 'bg-green-100 text-green-700',
      'Shipped': 'bg-blue-100 text-blue-700',
      'Pending': 'bg-yellow-100 text-yellow-700',
      'Processing': 'bg-purple-100 text-purple-700'
    };
    return statusColors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Orders Management</h1>
          <p className="text-gray-600">Manage and track all your orders</p>
        </div>
        
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-200">
          <Plus className="w-5 h-5" /> 
          New Order
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Order ID</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Customer</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Date</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Quantity</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Status</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-gray-100">
              {mockOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-900">#{order.id}</span>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{order.customerName}</p>
                      <p className="text-sm text-gray-500">Customer ID: {order.customerId}</p>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4 text-gray-600">
                    {order.orderDate}
                  </td>
                  
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-900">₹{order.orderAmount}</span>
                  </td>
                  
                  <td className="px-6 py-4 text-gray-600">
                    {order.quantity}
                  </td>
                  
                  <td className="px-6 py-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Showing <span className="font-bold text-gray-900">{mockOrders.length}</span> orders
          </p>
          <p className="text-gray-600">
            Total Revenue: <span className="font-bold text-gray-900">
              ₹{mockOrders.reduce((sum, order) => sum + order.totalPrice, 0).toLocaleString()}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Orders;