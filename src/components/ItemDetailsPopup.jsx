import React from 'react';
// import NotesPage from './Notess';
import Notes from './Note';
import { useEffect, useState } from "react";

const ItemDetailsPopup = ({markdown, item }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full relative">
        {/* <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          CLOSE DOC
        </button> */}
        <h2 className="text-xl font-bold mb-2">{item.description}</h2>
        <Notes markdown={markdown}/>
      </div>
    </div>
  );
};

export default ItemDetailsPopup;