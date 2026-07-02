import { useRef } from "react";
import { FiCamera, FiUpload } from "react-icons/fi";

import "../styles/Inputs.css";

function ImageUpload({
  image,
  onImageChange,
}) {

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="image-upload">

      <div
        className="image-preview"
        onClick={handleClick}
      >

        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="Profile"
          />
        ) : (
          <>
            <FiCamera className="camera-icon" />

            <p>Upload Photo</p>
          </>
        )}

      </div>

      <button
        type="button"
        className="upload-btn"
        onClick={handleClick}
      >

        <FiUpload />

        <span>
          {image ? "Change Photo" : "Browse Image"}
        </span>

      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={onImageChange}
      />

    </div>
  );
}

export default ImageUpload;