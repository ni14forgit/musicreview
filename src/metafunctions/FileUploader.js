import { useEffect, useRef } from "react";
import InvertedTextButton from "../components/Useful/InvertedTextButton";

const FileUploader = ({ onFileSelect }) => {
  const fileInput = useRef(null);
  const inputReference = useRef(null);

  const handleFileInput = (e) => {
    if (
      e.target.files[0].type.includes("wav") ||
      e.target.files[0].type.includes("mp4")
    ) {
      onFileSelect(e.target.files[0]);
    }
  };

  const fileUploadAction = () => inputReference.current.click();

  return (
    <div style={{ position: "relative" }} className="file-uploader">
      <input
        hidden
        ref={inputReference}
        type="file"
        onChange={handleFileInput}
      />
      <div style={{ marginTop: 10 }}>
        <InvertedTextButton text="upload" onClick={fileUploadAction} />
      </div>
      {/* <button
        onClick={(e) => fileInput.current && fileInput.current.click()}
        className="btn btn-primary"
      /> */}
    </div>
  );
};

export default FileUploader;
