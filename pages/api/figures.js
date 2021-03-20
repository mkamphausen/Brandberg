import { XMLHttpRequest } from "xmlhttprequest";

//the api for the figure data

export default (req, res) => {
  const dataURL =
    "https://raw.githubusercontent.com/mkamphausen/brandberg/main/data/workshop1.json";

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      {/* return data as http response with status 200 / OK */}
      res.status(200).json(this.responseText);
    }
  };
  xmlhttp.open("GET", dataURL, true);
  xmlhttp.send();
}