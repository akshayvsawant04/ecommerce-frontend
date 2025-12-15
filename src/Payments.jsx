import React from 'react';
import { Plus } from 'lucide-react';
import { mockPayments } from './mockData';

const Payments = () => {
  
  const getPaymentModeColor = (paymentMode) => {
    const modeColors = {
      'UPI': 'bg-purple-100 text-purple-700',
      'Credit Card': 'bg-blue-100 text-blue-700',
      'Debit Card': 'bg-green-100 text-green-700',
      'Net Banking': 'bg-orange-100 text-orange-700',
      'Cash': 'bg-gray-100 text-gray-700'
    };
    return modeColors[paymentMode] || 'bg-gray-100 text-gray-700';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const calculateTotalAmount = () => {
    return mockPayments.reduce((sum, payment) => sum + payment.amountPaid, 0);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Payment Transactions</h1>
          <p className="text-gray-600">Track all payment activities</p>
        </div>
        
        <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-2 shadow-lg shadow-emerald-200">
          <Plus className="w-5 h-5" /> 
          Record Payment
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Payment ID</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Customer</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Order ID</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Payment Mode</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Amount Paid</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Payment Date</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-gray-100">
              {mockPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-900">#{payment.id}</span>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{payment.customerName}</p>
                      <p className="text-sm text-gray-500">Customer ID: {payment.customerId}</p>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <span className="font-semibold text-blue-600">
                      Order #{payment.orderId}
                    </span>
                  </td>
                  
                  <td className="px-6 py-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getPaymentModeColor(payment.paymentMode)}`}>
                      {payment.paymentMode}
                    </span>
                  </td>
                  
                  <td className="px-6 py-4">
                    <span className="font-bold text-emerald-600 text-lg">
                      ₹{payment.amountPaid.toLocaleString()}
                    </span>
                  </td>
                  
                  <td className="px-6 py-4 text-gray-600">
                    {formatDate(payment.paymentDate)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Transactions</p>
              <p className="text-3xl font-bold text-gray-900">{mockPayments.length}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <span className="text-2xl">💳</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Amount</p>
              <p className="text-3xl font-bold text-emerald-600">
                ₹{calculateTotalAmount().toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Average Transaction</p>
              <p className="text-3xl font-bold text-purple-600">
                ₹{Math.round(calculateTotalAmount() / mockPayments.length).toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Mode Distribution</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['UPI', 'Credit Card', 'Debit Card', 'Net Banking'].map(mode => {
            const count = mockPayments.filter(p => p.paymentMode === mode).length;
            const amount = mockPayments
              .filter(p => p.paymentMode === mode)
              .reduce((sum, p) => sum + p.amountPaid, 0);
            
            return (
              <div key={mode} className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-1">{mode}</p>
                <p className="text-2xl font-bold text-gray-900">{count}</p>
                <p className="text-xs text-gray-500">₹{amount.toLocaleString()}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Payments;