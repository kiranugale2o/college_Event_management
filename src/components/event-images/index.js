"use client";

import { useState } from "react";

const ImageShowingCard = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl); // Set the clicked image as the selected image
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Close the modal when the close button is clicked
  };

  return (
    <div>
      <div className="flex flex-wrap gap-5 w-full mt-6 mx-auto px-2 justify-center">
        {data[0].eventGallary && data[0].eventGallary.length > 0 ? (
          data[0].eventGallary.map((d, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
              onClick={() => handleImageClick(d)}
            >
              <img
                className="w-full h-auto rounded-lg shadow-md transform transition duration-300 hover:scale-105"
                src={d}
                alt={`event image ${i}`}
                loading="lazy"
              />
            </div>
          ))
        ) : (
          <div className="text-[20px]">Not found any Images</div>
        )}
      </div>

      {/* Modal to display the clicked image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
          onClick={handleCloseModal} // Close modal if clicked outside the image
        >
          <div className="relative p-4">
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 text-white bg-red-500 px-3 py-1 rounded-full"
            >
              X
            </button>
            <img
              className="max-w-3xl max-h-[80vh] object-contain rounded-lg"
              src={selectedImage}
              alt="Selected event"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageShowingCard;
