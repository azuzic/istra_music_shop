export default {
  mode: false,
  guitarPictures: [
    {
      id: 0,
      text: "Gornju prednju",
      uploaded: false,
      url: "",
    },
    {
      id: 1,
      text: "Gornju stražnju",
      uploaded: false,
      url: "",
    },
    {
      id: 2,
      text: "Bočnu desnu",
      uploaded: false,
      url: "",
    },
    {
      id: 3,
      text: "Bočnu lijevu",
      uploaded: false,
      url: "",
    },
    {
      id: 4,
      text: "Serijski broj",
      uploaded: false,
      url: "",
    },
    {
      id: 5,
      text: "Glavu gitare",
      uploaded: false,
      url: "",
    },
  ],
  checkIfUploaded(){
    return this.guitarPictures.every(picture => !picture.uploaded);
  },
  resetData: function (){
    this.guitarPictures.forEach(picture => picture.uploaded = false);
    this.guitarPictures.forEach(picture => picture.url = "");
    this.mode = false;
  }
};
