import React, { useState } from "react";
import {
  Home,
  Users,
  FileText,
  BarChart2,
  Settings,
  Menu,
  LogOut,
  User,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import useForms from "../../hooks/data/useForms";

const Dashboard = () => {
  const [active, setActive] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const {forms}=useForms();
  console.log(forms)

  const navItems = [
    { name: "Home", icon: Home },
    { name: "Profile", icon: Users },
    { name: "Applied Forms", icon: FileText },
    { name: "Analytics", icon: BarChart2 },
    { name: "Settings", icon: Settings },
  ];

  const data = [
    { month: "Jan", forms: 5 },
    { month: "Feb", forms: 8 },
    { month: "Mar", forms: 6 },
    { month: "Apr", forms: 12 },
    { month: "May", forms: 9 },
    { month: "Jun", forms: 15 },
  ];

  return (
    <div className="flex mt-20 min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white shadow-lg p-6 transition-all duration-300 hidden md:block`}
      >
        <h2 className="text-2xl font-bold mb-8">
          {sidebarOpen ? "User Panel" : "UP"}
        </h2>
        <nav className="flex flex-col space-y-2">
          {navItems.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setActive(name)}
              className={`flex items-center space-x-2 px-2 py-2 rounded-lg transition ${
                active === name
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              <Icon size={20} />
              {sidebarOpen && <span>{name}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden p-2 rounded-lg bg-white shadow"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu size={20} />
            </button>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User className="text-gray-600" />
              <span className="font-medium text-gray-800">John Doe</span>
            </div>
            {/* <button className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              <LogOut size={18} /> <span className="hidden sm:block">Logout</span>
            </button> */}
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-gray-500">Forms Applied</p>
            <h2 className="text-2xl font-bold mt-2">12</h2>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-gray-500">Pending</p>
            <h2 className="text-2xl font-bold mt-2">5</h2>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-gray-500">Approved</p>
            <h2 className="text-2xl font-bold mt-2">6</h2>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-gray-500">Rejected</p>
            <h2 className="text-2xl font-bold mt-2">1</h2>
          </div>
        </div>

        {/* Charts / Content Area */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4">Forms Applied (Monthly)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="forms"
                  stroke="#2563eb"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
