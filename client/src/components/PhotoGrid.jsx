import React from 'react'

const PhotoGrid = ({ photos, onPhotoClick }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 object-cover">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Photo ${index + 1}`}
          className="w-full md:h-64 h-40 object-cover cursor-pointer"
          onClick={() => onPhotoClick(photo)}
        />
      ))}
    </div>
  );
}

export default PhotoGrid