import { useEffect, useRef } from "react";
import InvertedTextButton from "../components/Useful/InvertedTextButton";

const FileUploader = ({ onFileSelect, Button, ind, color }) => {
  const fileInput = useRef(null);
  const inputReference = useRef(null);

  const fileUploadAction = () => inputReference.current.click();

  return (
    <div style={{ position: "relative" }} className="file-uploader">
      <input hidden ref={inputReference} type="file" onChange={onFileSelect} />
      <div style={{ marginTop: 10 }}>
        <Button
          text="upload"
          color={color}
          onClick={(e) => fileUploadAction(e, ind)}
          fontWeight="bold"
        />
      </div>
    </div>
  );
};

export default FileUploader;
