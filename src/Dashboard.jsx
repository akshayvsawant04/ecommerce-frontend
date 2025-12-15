import React from 'react';
import { DollarSign, ShoppingBag, Package, Users } from 'lucide-react';
import StatCard from './StatCard';
import { mockOrders, mockProducts, mockCustomers } from './mockData';

const Dashboard = () => {
  
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.totalPrice, 0);
  const lowStockProducts = mockProducts.filter(product => product.quantity < 50);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Delivered':
        return 'bg-green-100 text-green-700';
      case 'Shipped':
        return 'bg-blue-100 text-blue-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Processing':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your store today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Revenue" 
          value={`₹${totalRevenue.toLocaleString()}`}
          icon={DollarSign} 
          trend={12.5} 
          color="bg-gradient-to-br from-emerald-500 to-emerald-600" 
        />
        
        <StatCard 
          title="Total Orders" 
          value={mockOrders.length}
          icon={ShoppingBag} 
          trend={8.2} 
          color="bg-gradient-to-br from-blue-500 to-blue-600" 
        />
        
        <StatCard 
          title="Total Products" 
          value={mockProducts.length}
          icon={Package} 
          trend={5.1} 
          color="bg-gradient-to-br from-purple-500 to-purple-600" 
        />
        
        <StatCard 
          title="Total Customers" 
          value={mockCustomers.length}
          icon={Users} 
          trend={15.3} 
          color="bg-gradient-to-br from-pink-500 to-pink-600" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Orders</h3>
          
          <div className="space-y-3">
            {mockOrders.slice(0, 3).map(order => (
              <div 
                key={order.id} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div>
                  <p className="font-semibold text-gray-900">Order #{order.id}</p>
                  <p className="text-sm text-gray-600">{order.customerName}</p>
                </div>
                
                <div className="text-right">
                  <p className="font-bold text-gray-900">₹{order.totalPrice}</p>
                  <span className={`text-xs px-3 py-1 rounded-full ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Low Stock Alert</h3>
          
          <div className="space-y-3">
            {lowStockProducts.map(product => (
              <div 
                key={product.id} 
                className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-100"
              >
                <div>
                  <p className="font-semibold text-gray-900">{product.productName}</p>
                  <p className="text-sm text-gray-600">{product.category}</p>
                </div>
                
                <div className="text-right">
                  <p className="text-red-600 font-bold">{product.quantity} left</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;