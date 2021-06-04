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

export { SongToRetrieve, SongToSend, DummySongToSend };
