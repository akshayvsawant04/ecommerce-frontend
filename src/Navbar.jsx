import React from 'react';
import { Search, Filter, Calendar } from 'lucide-react';

const Navbar = ({ searchQuery, setSearchQuery }) => {
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="px-8 py-5 flex items-center justify-between">
        
        <div className="flex items-center gap-4 flex-1 max-w-2xl">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search anything..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-blue-500 transition-colors font-medium"
            />
          </div>
          
          <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors relative">
            <Calendar className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg cursor-pointer hover:scale-110 transition-transform">
            A
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;