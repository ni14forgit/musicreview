import axios from "axios";

const upload_songs = async (songs = []) => {
  console.log(songs);
  console.log("UPLOAD SONG9(s) called");
  const formData = new FormData();
  var i;
  for (i = 0; i < songs.length; i++) {
    if (songs[i].songfile === "undefined") {
      console.log("ERROR, song file should not be undefined!");
    }
    formData.append("file", songs[i].songfile);
  }
  formData.append("name", "songslol");
  const songResult = await axios
    .post("http://localhost:4000/api/aws/uploadsongs", formData)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => console.log(err));
  return songResult;
};

export default upload_songs;
