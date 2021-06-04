import { AWS_URL } from "./BASE";

// UPLOAD
const AWS_UPLOAD = AWS_URL + "/upload";
const aws_upload_songs = AWS_UPLOAD + "/songs";
const aws_upload_photo = AWS_UPLOAD + "/photo";

// DELETE
const AWS_DELETE = AWS_URL + "/delete";
const aws_delete_song = AWS_DELETE + "/song";
const aws_delete_photo = AWS_DELETE + "/photo";

// RETRIEVE
const AWS_RETRIEVE = AWS_URL + "/retrieve";
const aws_retrieve_song = AWS_RETRIEVE + "/song";
const aws_retrieve_photo = AWS_RETRIEVE + "/photo";

export {
  aws_upload_photo,
  aws_upload_songs,
  aws_delete_photo,
  aws_retrieve_song,
  aws_delete_song,
  aws_retrieve_photo,
};
