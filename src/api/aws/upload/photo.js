import axios from "axios";
import { aws_upload_photo } from "../../urls/URLS";

const upload_photo = async (photo = null) => {
  // console.log(photo);
  // console.log("UPLOAD PHOTO called");
  const formData = new FormData();
  formData.append("file", photo);
  formData.append("name", "image");
  const photoResult = await axios
    .post(aws_upload_photo, formData)
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => console.log(err));
  return photoResult;
};

export { upload_photo };
