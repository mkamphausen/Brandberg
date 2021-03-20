import Head from 'next/head'
import styles from '../styles/Search.module.css'
import { useState } from "react";
import Painting from "../components/Painting";

//array with every gorge contained in the data, as well as identifying letter an number of sites, located in the gorge
let SCHLUCHTEN = [
  {name: 'Amis', identifier: 'A', siteCount: 66},
  {name: 'Sesaub/Basswaldrinne', identifier: 'B', siteCount: 10},
  {name: 'Circus', identifier: 'C', siteCount: 37},
  {name: 'Dom', identifier: 'D', siteCount: 7},
  {name: 'Eros', identifier: 'E', siteCount: 23},
  {name: 'Furrow', identifier: 'F', siteCount: 1},
  {name: `Ga'aseb`, identifier: 'G', siteCount: 30},
  {name: 'Hungorob', identifier: 'H', siteCount: 137},
  {name: 'Naib', identifier: 'I', siteCount: 175},
  {name: 'Karoab', identifier: 'K', siteCount: 54},
  {name: 'Märchen', identifier: 'M', siteCount: 2},
  {name: 'Numas', identifier: 'N', siteCount: 188},
  {name: 'Orabes', identifier: 'O', siteCount: 30},
  {name: 'Porters', identifier: 'P', siteCount: 6},
  {name: 'Quagga', identifier: 'Q', siteCount: 3},
  {name: 'Raiders', identifier: 'R', siteCount: 4},
  {name: 'Umuab', identifier: 'U', siteCount: 67},
]

//this component returns the search page
export default function Search({ data }) {
  
  //
  const [filterValue, setFilterValue] = useState('a');
  
  //show only 10 of the filtered data sets
  const [display, setDisplay] = useState(10);

  //loop overevery data set 
  const filteredData = data.filter((set) =>
    set.Site.toLowerCase().includes(filterValue.toLowerCase())
  );

  //increase displayed datasets
  const increaseDisplayedData = (e) => {
    e.preventDefault();  //prevents page reload, wwhen button is clicked
    setDisplay(display + 10); // increases the amount of displayed sets
  }

  //return the search pages html
  return (
    <div>
      <Head>
        <title>Der Brandberg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Durchsuche die Datenbank</h2>

      {/* <p>🚧 Hier kannst Du bald die Datenbank durchstöbern 🔍 🚧</p> */}

      <h4>{filterValue}</h4>

      <div className={styles.search_bar}>
        {/* select option for the gorges */}
        <select
          onChange={(e) => setFilterValue(e.target.value)}
          name="site"
          id="site"
          placeholder="Bitte Schlucht wählen ..."
        >
          {/* placeholder option */}
          <option value="null">Bitte Schlucht auswählen ... 🕵🏻‍♂️</option>
          {/* loop over gorge array, 
              create option for every gorge, using identifier as value und name as name */}
          {SCHLUCHTEN.map((schlucht) => (
            <option value={schlucht.identifier}>
              {`${schlucht.name} (${schlucht.siteCount})`}
            </option>
          ))}
        </select>
        {/* checkboxes for selecting multiple gorges  */}
        {/*
        
        <div>
          {SCHLUCHTEN.map((schlucht) => (
            <label>
              <span>{`${schlucht?.name} (${schlucht?.siteCount})`} </span>
              <input type="checkbox" value={schlucht.identifier} />
            </label>
          ))}
        </div>

        */}
      </div>

        {/* show the amount of found data */}
      <h2>Datensätze: {filteredData?.length}</h2>

      {/* show amount of filtered data, dependig on the above defined display */}
      <div>
        {/* show amount of filtered data */}
        {filteredData.slice(0, display).map((set) => (
          <Painting painting={set} />
        ))}
      </div>
      {/* show amount displayed */}
      {display}
      {/* increase amount of displayed datasets by 10 on click  */}
      <button onClick={(e) => increaseDisplayedData(e)}>Load more ...</button>
    </div>
  );
}

//this function is called on server side during buildtime
//takes in the data from api an provides it for the search page
export async function getStaticProps() {
  const hostname = 'https://brandberg.vercel.app';
  const res = await fetch(`${hostname}/api/figures`);
  const data = await res.json()
  
  // Pass data to the page via props
  return {
    props: { data },
  };
}