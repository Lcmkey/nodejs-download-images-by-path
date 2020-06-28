const download = require("image-downloader");

// const defaultPath = "/home/sam_leung/Documents/images";
const defaultPath = `${process.cwd()}/images`;

const data = [];

data.map(item => {
  const options = { url: item, dest: defaultPath };

  download
    .image(options)
    .then(({ filename, image }) => {
      console.log("Saved to", filename); // Saved to /path/to/dest/image.jpg
    })
    .catch(err => console.error(err));
});
