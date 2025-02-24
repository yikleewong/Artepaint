import React, { useState , useEffect} from 'react'
import PhotoGrid from './PhotoGrid'
import PhotoModal from './PhotoModal'

const Photo = () => {

  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    // Fetch photos from the backend
    const fetchPhotos = async () => {
      try {
        const response = await fetch('/api/photos');
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };


  return (
    <div>
        <PhotoGrid photos={photos} onPhotoClick={handlePhotoClick} />
        {selectedPhoto && (<PhotoModal photo={selectedPhoto} onClose={handleCloseModal} />)}
    </div>
  )
}

export default Photo