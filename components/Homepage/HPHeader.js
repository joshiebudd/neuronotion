import React from 'react';

const HPHeader = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold">Neuro Notion</div>
        <nav className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">ADHD Templates</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Bundles</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Ultimate ADHD Brain</a>
        </nav>
      </div>
    </header>
  );
}

export default HPHeader;
