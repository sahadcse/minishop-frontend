"use client";

import { useState } from "react";
import {
  FiShoppingBag,
  FiDollarSign,
  FiBox,
  FiUsers,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

export default function Dashboard() {
  const [showOrders, setShowOrders] = useState(true);

  // Mock data - in a real app, you'd fetch this from an API
  const stats = [
    {
      title: "Total Orders",
      value: 528,
      icon: FiShoppingBag,
      change: "+12%",
      color: "bg-blue-500",
    },
    {
      title: "Revenue",
      value: "$12,840",
      icon: FiDollarSign,
      change: "+18%",
      color: "bg-green-500",
    },
    {
      title: "Products",
      value: 237,
      icon: FiBox,
      change: "+5%",
      color: "bg-yellow-500",
    },
    {
      title: "Customers",
      value: 1289,
      icon: FiUsers,
      change: "+8%",
      color: "bg-purple-500",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD-001",
      customer: "John Doe",
      date: "2023-11-10",
      status: "Delivered",
      amount: "$128.50",
    },
    {
      id: "#ORD-002",
      customer: "Jane Smith",
      date: "2023-11-09",
      status: "Processing",
      amount: "$95.20",
    },
    {
      id: "#ORD-003",
      customer: "Mike Johnson",
      date: "2023-11-09",
      status: "Pending",
      amount: "$225.00",
    },
    {
      id: "#ORD-004",
      customer: "Lisa Brown",
      date: "2023-11-08",
      status: "Delivered",
      amount: "$75.80",
    },
    {
      id: "#ORD-005",
      customer: "Robert Wilson",
      date: "2023-11-08",
      status: "Cancelled",
      amount: "$182.30",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full text-white`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-500 font-medium">{stat.change}</span>
              <span className="text-gray-500 ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="font-bold text-lg">Recent Orders</h2>
            <button
              className="text-gray-500 focus:outline-none"
              onClick={() => setShowOrders(!showOrders)}
            >
              {showOrders ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>

          {showOrders && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-blue-600">
                        {order.id}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                        {order.customer}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {order.date}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium 
                          ${
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-800"
                              : ""
                          }
                          ${
                            order.status === "Processing"
                              ? "bg-blue-100 text-blue-800"
                              : ""
                          }
                          ${
                            order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : ""
                          }
                          ${
                            order.status === "Cancelled"
                              ? "bg-red-100 text-red-800"
                              : ""
                          }
                        `}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                        {order.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Sales Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="font-bold text-lg mb-4">Sales Analytics</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
            {/* 
              In a real application, you would integrate a chart library like Chart.js here.
              Example implementation:
              
              import { Line } from 'react-chartjs-2';
              
              <Line 
                data={chartData} 
                options={chartOptions} 
                height={250} 
              />
            */}
            <p className="text-gray-400 text-sm">Sales Chart Placeholder</p>
          </div>

          <div className="mt-6">
            <h3 className="font-medium mb-3">Top Products</h3>
            <div className="space-y-4">
              {["Product A", "Product B", "Product C"].map((product, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{product}</span>
                  <span className="text-sm font-medium">
                    {85 - index * 15}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <h2 className="font-bold text-lg mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Add Product",
            "Process Orders",
            "Customer Support",
            "View Reports",
          ].map((action, index) => (
            <button
              key={index}
              className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 py-3 px-4 rounded-lg text-sm font-medium transition"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
