import axios from "axios";
import { aws_upload_songs } from "../../urls/URLS";

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
    .post(aws_upload_songs, formData)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => console.log(err));
  return songResult;
};

export { upload_songs };
