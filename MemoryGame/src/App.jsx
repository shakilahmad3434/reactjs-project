import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [visibleKeys, setVisibleKeys] = useState([]); // Array to track visible boxes
  const [shuffledImages, setShuffledImages] = useState([]);
  const [imageURL, setImageURL] = useState([]);
  const images = [
    '/images/html.png',
    '/images/css.png',
    '/images/javascript.png',
    '/images/java.png',
    '/images/nodejs.png',
    '/images/php.png',
    '/images/python.png',
    '/images/reactjs.png','/images/html.png',
    '/images/css.png',
    '/images/javascript.png',
    '/images/java.png',
    '/images/nodejs.png',
    '/images/php.png',
    '/images/python.png',
    '/images/reactjs.png'
  ];
  useEffect(()=>{
    setShuffledImages(images.sort(() => Math.random() - 0.5));
  },[])

  const handleImage = (key) => {
    //console.log(shuffledImages[key]); // Log the URL of the clicked image

    if (visibleKeys.length < 2) {
      setVisibleKeys((prevKeys) =>
        prevKeys.includes(key) ? prevKeys : [...prevKeys, key]
      );
      
    } else {
      setVisibleKeys([key]);
    }
    if(imageURL.length < 2){
      setImageURL((prevurl) => [...prevurl, shuffledImages[key]])
      imageURL.includes(shuffledImages[key]) ? console.log("Match") : console.log("Not Match")
    }else{
      setImageURL([shuffledImages[key]])
    }

    if(imageURL)
    console.log(imageURL)
  };

  return (
    <div className='h-screen w-full bg-gradient-to-r from-amber-300 to-rose-200 flex flex-col justify-center items-center gap-10 p-10'>
      <h1 className="text-5xl font-sans font-bold">Advance Memory Game</h1>
      {imageURL}
      <div className='grid grid-cols-4 p-5 gap-3'>
        {
          shuffledImages.map((image, index) => (
            <div className={`rounded-md shadow-md w-32 h-32 ${visibleKeys.includes(index) ? 'bg-inherit' : 'bg-red-500'} cursor-pointer`} onClick={()=> handleImage(index)} key={index}>
              <img src={image} alt="" className={`w-full overflow-hidden ${visibleKeys.includes(index) ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App