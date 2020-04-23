import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
   const [images, setImages] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [term, setTerm] = useState("");

   useEffect(() => {
      fetch(
         `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true&orientation=horizontal&per_page=50`
      )
         .then((res) => res.json())
         .then((data) => {
            setImages(data.hits);
            setIsLoading(false);
         })
         .catch((err) => console.log(err));
   }, [term]);

   return (
      <div className="container mx-auto px-4 my-10">
         <ImageSearch searchText={(text) => setTerm(text)} />
         {isLoading ? (
            <h1 className="text-xl">Loading....</h1>
         ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
               {images.map((image) => (
                  <ImageCard key={image.id} image={image} />
               ))}
            </div>
         )}
      </div>
   );
}

export default App;
