import React from 'react';
import { Plus } from 'lucide-react';
import { mockCustomers } from './mockData';

const Customers = () => {
  
  const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const formatPhoneNumber = (phoneNumber) => {
    const phone = phoneNumber.toString();
    return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Customer Directory</h1>
          <p className="text-gray-600">View and manage customer information</p>
        </div>
        
        <button className="bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-700 transition-colors flex items-center gap-2 shadow-lg shadow-pink-200">
          <Plus className="w-5 h-5" /> 
          Add Customer
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockCustomers.map((customer) => (
          <div 
            key={customer.id} 
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                {getInitials(customer.firstName, customer.lastName)}
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-gray-900 mb-1 truncate">
                  {customer.fullName}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">
                  Customer ID: #{customer.id}
                </p>
                
                <div className="space-y-2">
                  
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-gray-500 font-medium min-w-[50px]">Email:</span>
                    <span className="text-gray-900 font-medium break-all">
                      {customer.email}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500 font-medium min-w-[50px]">Phone:</span>
                    <span className="text-gray-900 font-medium">
                      {formatPhoneNumber(customer.phoneNumber)}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500 font-medium min-w-[50px]">DOB:</span>
                    <span className="text-gray-900 font-medium">
                      {formatDate(customer.dateOfBirth)}
                    </span>
                  </div>
                  
                  {customer.address && customer.address.length > 0 && (
                    <div className="flex items-start gap-2 text-sm mt-3 pt-3 border-t border-gray-100">
                      <span className="text-gray-500 font-medium min-w-[50px]">Address:</span>
                      <span className="text-gray-900 font-medium">
                        {customer.address[0].street}, {customer.address[0].city}, {customer.address[0].state} - {customer.address[0].pincode}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Total Customers: <span className="font-bold text-gray-900">{mockCustomers.length}</span>
          </p>
          <p className="text-gray-600">
            Active Customers: <span className="font-bold text-green-600">{mockCustomers.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customers;