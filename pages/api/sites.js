import { XMLHttpRequest } from "xmlhttprequest";

//the api for the sites data

export default (req, res) => {
  const dataURL =
    "https://raw.githubusercontent.com/mkamphausen/brandberg/main/data/sites.json";

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      res.status(200).json(this.responseText);
    }
  };
  xmlhttp.open("GET", dataURL, true);
  xmlhttp.send();
};