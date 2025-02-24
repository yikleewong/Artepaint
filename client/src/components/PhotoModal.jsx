import React from 'react'

const PhotoModal = ({ photo, onClose }) => {

    const handleClickOutside = (event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    };

    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50" onClick={handleClickOutside}>
        <div className="w-auto h-auto relative max-h-full max-w-full flex items-center justify-center overflow-hidden">
          <button onClick={onClose} className="absolute top-1 right-1 text-white text-2xl">&times;</button>
          <img src={`http://localhost:5000${photo}`} alt="Selected Photo" className=" h-full rounded object-contain w-full" />
        </div>
      </div>
    );
  }

export default PhotoModal