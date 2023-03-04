import axios from "axios"
import { useEffect, useState } from "react";
import './App.css';
function Birds(){
  const [photos,setPhotos] = useState([])
useEffect(() => {
    const fetchPhotos = async () => {
      
      const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7c35f35564573e6fd53619ccaa631ffd&tags=birds&per_page=12&page=1&format=json&nojsoncallback=1`;

      try {
        const response = await axios.get(url);
       
        setPhotos(response.data.photos.photo);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPhotos();
  }, []);

  return(<>
  <h1 className="text-mbf">Birds</h1>
  <div className="phcontainer">
        {photos.map((photo) => (
          <div key={photo.id}>
            <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} alt={photo.title} />
          </div>
        ))}
      </div>
      </>)
}

export default Birds