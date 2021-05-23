import axios from "axios";

const upload_photo = async (photo = null) => {
  console.log(photo);
  console.log("UPLOAD PHOTO called");
  const formData = new FormData();
  formData.append("file", photo.imgfile);
  formData.append("name", "image");
  const photoResult = await axios
    .post("http://localhost:4000/api/aws/uploadprofilePhoto", formData)
    // .then((res) => {
    //   // console.log(res);
    //   return res.json();
    // })
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => console.log(err));
  return photoResult;
};

export default upload_photo;
