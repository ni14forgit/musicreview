class SongToSend {
  constructor(songfile) {
    this.songfile = songfile;
  }
}

class SongToRetrieve {
  constructor(id, url, title) {
    this.id = id;
    this.url = url;
    this.title = title;
  }
}

class DummySongToSend {
  constructor(songfile) {
    this.songfile = songfile;
    this.title = songfile.name;
  }
}

class Comment {
  constructor(comment, timestamp, uitimestamp, photo, saved) {
    this.comment = comment;
    this.timestamp = timestamp;
    this.uitimestamp = uitimestamp;
    this.photo = photo;
    this.saved = saved;
  }
}

class OtherPersonComment {
  constructor(comment, timestamp, uitimestamp, photo, userid) {
    this.comment = comment;
    this.timestamp = timestamp;
    this.uitimestamp = uitimestamp;
    this.photo = photo;
    this.userid = userid;
  }
}

export {
  SongToRetrieve,
  SongToSend,
  DummySongToSend,
  Comment,
  OtherPersonComment,
};
