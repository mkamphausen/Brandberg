// npm install xmlhttprequest
// "xmlhttprequest": "^1.8.0"
//API resolved without sending a response for /api/data, this may result in stalled requests.

import { XMLHttpRequest } from "xmlhttprequest";

export default (req, res) => {

    const dataURL =
      "https://raw.githubusercontent.com/mkamphausen/brandberg/main/data/workshop1.json";

    var xmlhttp = new XMLHttpRequest();
    //var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        //parse Json to array
        const data = JSON.parse(this.responseText);

          res.status(200).json({
            data,
              count: data.length,
          });

        //createTableByJson(myArr);
      }
    };
    xmlhttp.open("GET", dataURL, true);
    xmlhttp.send();

    //res.status(200).json({msg: 'fuck off'});
}



/*

//request to server
    var xmlhttp = new XMLHttpRequest();
    //var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //parse Json to array
            //var myArr = JSON.parse(this.responseText);

            res.status(200).json(this.responseText);

            //createTableByJson(myArr);
        }
    };
    xmlhttp.open("GET", dataURL, true);
    xmlhttp.send();

*/






    /*
    function createTableByJson(myArr) {
    
    //create table head
    var table =`
    <tr><th>Site</th>
    <th>Figure</th>
    <th>Preservation </th>
    <th>Subject</th>
    <th>Disjointed Body Parts</th>
    <th>Special Features</th>
    <th>Direct Object</th>
    </tr>`;


    //loop over every element in the array
    myArr.forEach(element => {
        //create table row for each element, containing elelemnts key-value pairs
        table +=
                `<tr>
                <td>${element.Site}</td>
                <td>${element.Figure}</td>
                <td>${element.Preservation}</td>
                <td>${element.Subject}</td>
                <td>${element.Disjointed_Body_Parts}</td>
                <td>${element.Speacial_Features}</td>
                <td>${element.Direct_Object}</td>
                </tr>`
    });
    //inject table in tables inner html
    document.getElementById("jSonTable").innerHTML = table;

}

*/