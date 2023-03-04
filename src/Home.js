import React, { useEffect, useState } from "react";
import axios from "axios"
import './App.css';
import { Link } from "react-router-dom";
function Home(){
    const [input,setInput] = useState("nature")
    const [photos,setPhotos] = useState([])
    const [search,setSearch] = useState('nature')
    const [zoomedPhoto, setZoomedPhoto] = useState(null);
    const handleZoomClick = (photo) => {
        if (zoomedPhoto === photo) {
          setZoomedPhoto(null);
        } else {
          setZoomedPhoto(photo);
        }
      };
    useEffect(() => {
        const fetchPhotos = async () => {
          
          const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7c35f35564573e6fd53619ccaa631ffd&tags=${search}&per_page=6&page=1&format=json&nojsoncallback=1`;
    
          try {
            const response = await axios.get(url);
            console.log(response)
            setPhotos(response.data.photos.photo);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchPhotos();
      }, [search]);
   
    return(<>
    <div className="App">
    <h1 style={{fontFamily:"cursive",fontSize:"50px"}}>Snap Shorts</h1>
        <div><input type="search" onChange={(e)=>{
            setInput(e.target.value)
        }} value={input} className="box" placeholder="Search..."/>
        <button onClick={()=>{
            setSearch(input)
            setInput('')
            
        }}>&#128269;</button></div>

    <div className="word-container">
        
        <Link to={"/mountain"} style={{textDecoration :"none"}}><h3 className="word" >Mountain</h3></Link>
    <Link to={"/beaches"} style={{textDecoration :"none"}}><h3 className="word">Beaches</h3></Link>
    <Link to={"/birds"} style={{textDecoration :"none"}}><h3 className="word">Birds</h3></Link>
     <Link to={"/foods"} style={{textDecoration :"none"}}><h3 className="word">Food</h3></Link>
    </div>
    <div className="phcontainer">
        {photos.map((photo) => (
          <div key={photo.id} onClick={() => handleZoomClick(photo)}>
            <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`}  
            className={zoomedPhoto === photo ? "zoomed" : ""}  />
          </div>
        ))}
      </div>
      </div>
    </>)
}

export default Home