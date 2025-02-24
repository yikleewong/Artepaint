import React from 'react'

const PhotoModal = ({ photo, onClose }) => {

    const handleClickOutside = (event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    };

    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50" onClick={handleClickOutside}>
        <div className="w-3/4 h-3/4 relative max-h-full max-w-full overflow-auto">
          <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 text-white text-2xl">&times;</button>
          <img src={photo} alt="Selected Photo" className="w-full h-full max-w-full max-h-full rounded object-cover" />
        </div>
      </div>
    );
  }

export default PhotoModal