/**
 * Mock Data File
 * This file contains sample data that mimics the structure of your Java backend entities
 */

// Mock Customers data - matches Customer.java entity
export const mockCustomers = [
  {
    id: 1,
    firstName: 'Rajesh',
    middleName: 'Kumar',
    lastName: 'Sharma',
    fullName: 'Rajesh Kumar Sharma',
    email: 'rajesh.sharma@email.com',
    phoneNumber: 9876543210,
    dateOfBirth: '1990-05-15',
    address: [
      {
        street: '123 MG Road',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001',
        country: 'India'
      }
    ]
  },
  {
    id: 2,
    firstName: 'Priya',
    middleName: 'Devi',
    lastName: 'Patel',
    fullName: 'Priya Devi Patel',
    email: 'priya.patel@email.com',
    phoneNumber: 9876543211,
    dateOfBirth: '1992-08-22',
    address: [
      {
        street: '456 Park Street',
        city: 'Kolkata',
        state: 'West Bengal',
        pincode: '700016',
        country: 'India'
      }
    ]
  },
  {
    id: 3,
    firstName: 'Amit',
    middleName: '',
    lastName: 'Singh',
    fullName: 'Amit Singh',
    email: 'amit.singh@email.com',
    phoneNumber: 9876543212,
    dateOfBirth: '1988-12-10',
    address: [
      {
        street: '789 Brigade Road',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560001',
        country: 'India'
      }
    ]
  },
];

// Mock Products data - matches Product.java entity
export const mockProducts = [
  {
    id: 1,
    productName: 'Wireless Headphones',
    productPrice: '2999',
    description: 'Premium quality wireless headphones with noise cancellation',
    category: 'Electronics',
    quantity: 45
  },
  {
    id: 2,
    productName: 'Smart Watch',
    productPrice: '8999',
    description: 'Fitness tracker with heart rate monitor',
    category: 'Electronics',
    quantity: 32
  },
  {
    id: 3,
    productName: 'Cotton T-Shirt',
    productPrice: '599',
    description: 'Comfortable cotton t-shirt in various colors',
    category: 'Clothing',
    quantity: 120
  },
  {
    id: 4,
    productName: 'Running Shoes',
    productPrice: '3499',
    description: 'Lightweight running shoes with cushioned sole',
    category: 'Footwear',
    quantity: 67
  },
  {
    id: 5,
    productName: 'Leather Wallet',
    productPrice: '1299',
    description: 'Genuine leather wallet with multiple card slots',
    category: 'Accessories',
    quantity: 89
  },
  {
    id: 6,
    productName: 'Yoga Mat',
    productPrice: '899',
    description: 'Non-slip yoga mat with carrying strap',
    category: 'Sports',
    quantity: 55
  },
];

// Mock Orders data - matches Orders.java entity
export const mockOrders = [
  {
    id: 1,
    status: 'Delivered',
    orderDate: '2024-12-01',
    orderAmount: 5998,
    quantity: 2,
    totalPrice: 5998,
    customerId: 1,
    customerName: 'Rajesh Kumar Sharma',
    paymentId: 1
  },
  {
    id: 2,
    status: 'Pending',
    orderDate: '2024-12-10',
    orderAmount: 8999,
    quantity: 1,
    totalPrice: 8999,
    customerId: 2,
    customerName: 'Priya Devi Patel',
    paymentId: 2
  },
  {
    id: 3,
    status: 'Shipped',
    orderDate: '2024-12-08',
    orderAmount: 4098,
    quantity: 3,
    totalPrice: 4098,
    customerId: 3,
    customerName: 'Amit Singh',
    paymentId: 3
  },
  {
    id: 4,
    status: 'Processing',
    orderDate: '2024-12-12',
    orderAmount: 3499,
    quantity: 1,
    totalPrice: 3499,
    customerId: 1,
    customerName: 'Rajesh Kumar Sharma',
    paymentId: 4
  },
  {
    id: 5,
    status: 'Delivered',
    orderDate: '2024-12-05',
    orderAmount: 1299,
    quantity: 1,
    totalPrice: 1299,
    customerId: 2,
    customerName: 'Priya Devi Patel',
    paymentId: 5
  },
];

// Mock Payments data - matches Payment.java entity
export const mockPayments = [
  {
    id: 1,
    paymentMode: 'UPI',
    amountPaid: 5998,
    paymentDate: '2024-12-01',
    orderId: 1,
    customerId: 1,
    customerName: 'Rajesh Kumar Sharma'
  },
  {
    id: 2,
    paymentMode: 'Credit Card',
    amountPaid: 8999,
    paymentDate: '2024-12-10',
    orderId: 2,
    customerId: 2,
    customerName: 'Priya Devi Patel'
  },
  {
    id: 3,
    paymentMode: 'Debit Card',
    amountPaid: 4098,
    paymentDate: '2024-12-08',
    orderId: 3,
    customerId: 3,
    customerName: 'Amit Singh'
  },
  {
    id: 4,
    paymentMode: 'Net Banking',
    amountPaid: 3499,
    paymentDate: '2024-12-12',
    orderId: 4,
    customerId: 1,
    customerName: 'Rajesh Kumar Sharma'
  },
  {
    id: 5,
    paymentMode: 'UPI',
    amountPaid: 1299,
    paymentDate: '2024-12-05',
    orderId: 5,
    customerId: 2,
    customerName: 'Priya Devi Patel'
  },
];