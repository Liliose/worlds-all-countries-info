const getBgImage = (image) => {
  switch (image) {
    case "w1.jpg":
      return require("./assets/world/w1.jpg");
    case "w2.png":
      return require("./assets/world/w2.png");
    case "w3.jpg":
      return require("./assets/world/w3.jpg");
    case "w4.jpg":
      return require("./assets/world/w4.jpg");
    case "w5.jpg":
      return require("./assets/world/w5.jpg");
    case "w6.jpg":
      return require("./assets/world/w6.jpg");
    case "w7.jpg":
      return require("./assets/world/w7.jpg");
    case "w8.jpg":
      return require("./assets/world/w8.jpg");
    case "w9.jpg":
      return require("./assets/world/w9.jpg");
    case "w10.jpg":
      return require("./assets/world/w10.jpg");
    case "w11.jpg":
      return require("./assets/world/w11.jpg");
    case "w12.jpg":
      return require("./assets/world/w12.jpg");
    case "w13.jpg":
      return require("./assets/world/w13.jpg");
    default:
      return require("./assets/world/w1.jpg");
  }
};

const bgImages = [
  "w1.jpg",
  "w2.png",
  "w3.jpg",
  "w4.jpg",
  "w5.jpg",
  "w6.jpg",
  "w7.jpg",
  "w8.jpg",
  "w9.jpg",
  "w10.jpg",
  "w11.jpg",
  "w12.jpg",
  "w13.jpg",
];

module.exports = {
  backendUrl: "https://restcountries.com/v3.1",
  bgImages,
  getBgImage,
};
