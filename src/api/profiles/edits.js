import {
  profiles_edits_name,
  profiles_edits_genres,
  profiles_edits_professions,
  profiles_edits_sociallinks,
  profiles_edits_profilephoto,
  profiles_edits_deletesong,
  profiles_edits_addsong,
  profiles_edits_addaccomplishment,
  profiles_edits_deleteaccomplishment,
  profiles_edits_accomplishment,
} from "../urls/URLS";
import { upload_photo } from "../aws/upload/photo";
import { delete_photo } from "../aws/delete/photo";
import { upload_songs } from "../aws/upload/songs";
import { delete_song } from "../aws/delete/song";

const edit_name = async (new_name) => {
  console.log("edit name called");
  const result = await fetch(profiles_edits_name, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ name: new_name }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

const edit_genres = async (new_genres) => {
  console.log("edit name called");
  console.log(new_genres);
  const result = await fetch(profiles_edits_genres, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ genres: new_genres }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

const edit_professions = async (new_professions) => {
  console.log("edit name called");
  const result = await fetch(profiles_edits_professions, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ professions: new_professions }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

const edit_sociallinks = async (sociallinks) => {
  console.log("edit name called");
  const result = await fetch(profiles_edits_sociallinks, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      instagram: sociallinks.instagram,
      spotify: sociallinks.spotify,
      soundcloud: sociallinks.soundcloud,
    }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

const edit_profilephoto = async (photo) => {
  console.log("edit profile reached");
  const aws_photo = await upload_photo(photo);
  const delete_photo_result = delete_photo();

  console.log(aws_photo);

  // delete old profile picture

  console.log("edit called");
  const result = await fetch(profiles_edits_profilephoto, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ profilephoto: aws_photo }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

const edit_deletesong = async (songid) => {
  console.log("edit delete song reached");

  const aws_result = await delete_song(songid);

  const result = await fetch(profiles_edits_deletesong, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ songid: songid }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

const edit_addsong = async (song) => {
  console.log("edit add song reached");

  const aws_result = await upload_songs([song]);

  console.log(aws_result);

  const result = await fetch(profiles_edits_addsong, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ song: aws_result.songs[0] }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

const edit_addaccomplishment = async (accomplishment) => {
  console.log("edit add accoomplishment reached");

  const result = await fetch(profiles_edits_addaccomplishment, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ accomplishment: accomplishment }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

const edit_deleteaccomplishment = async (id) => {
  console.log("edit delete accomplishment reached");

  const result = await fetch(profiles_edits_deleteaccomplishment, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ accomplishmentId: id }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

const edit_accomplishment = async (id, accomplishment) => {
  console.log("edit accomplishment reached");

  const result = await fetch(profiles_edits_accomplishment, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      accomplishment: accomplishment,
      accomplishmentId: id,
    }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

export {
  edit_name,
  edit_genres,
  edit_professions,
  edit_sociallinks,
  edit_profilephoto,
  edit_deletesong,
  edit_addsong,
  edit_addaccomplishment,
  edit_deleteaccomplishment,
  edit_accomplishment,
};
