import React, { useState, useEffect } from 'react';

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const images = [
    {
        src :"/images/whale6.jpg",
      title: 'Whale',
      description: 'Whales are a widely distributed and diverse group of fully aquatic placental marine mammals. As an informal and colloquial grouping'
    },
    {
        src :"/images/dog2.jpg",
      title: 'Dog',
      description: 'The dog is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from the extinct Pleistocene wolf, and the modern wolf'
    },
    {
        src :"/images/pen3.jpg",
      title: 'Penguins',
      description: 'Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin'
    },
    {
        src :"/images/tgr4.jpg",
      title: 'Tiger',
      description: 'The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes '
    },
    {
        src :"/images/lion5.jpg",
      title: 'Lion',
      description: 'The lion is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body short'
    },
    
  ];

  const titles = images.map((image) => image.title);
  const descriptions = images.map((image) => image.description);

  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, images.length]);

  const showPreviousImage = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  const showImage = index => {
    setCurrentIndex(index);
  };

  return (
    <>
    <div className="carousel-container">
      <div className="image-section">
           {/* <img src={items.src} alt={items.text}/> */}

        {/* <img src={images.images[currentIndex].src} alt={images.titles[currentIndex]} /> */}
      </div>
      
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={titles[index]}
            className={index === currentIndex ? 'selected' : ''}
            onClick={() => showImage(index)}
          />
        ))}
      </div>
      <div className="details-section">
        <h2>{titles[currentIndex]}</h2>
        <p>{descriptions[currentIndex]}</p>
      </div>
      </div>
      <button className="prev-button" onClick={showPreviousImage}>
        Previous
      </button>
<div className='btns'>

      
      <button className="next-button" onClick={showNextImage}>
        Next
      </button>
      <button className="play-pause-button" onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      </div>

      </>
  );
}

