import PreservationState from "./PreservationState";
import styles from "../styles/Painting.module.css";

/* EXAMPE
  {
    "Site": "A 1",
    "Figure": 1,
    "Preservation": 5,
    "Subject": "ostrich",
    "Disjointed_Body_Parts": null,
    "Special_Features": "jagged legs",
    "Direct_Object": ""
  },
*/

//this component defines, how the single figre datasets are displayed on the search page
const Painting = ({ painting }) => {
  return (
    <div className={styles.container}>
      <span className={styles.number}>#{painting?.Figure}</span>
      <div className={styles.content}>
        <h3 className={styles.title}>{painting?.Subject}</h3>
        <div>
          <p>{painting?.Special_Features}</p>
        </div>
      </div>
      <div className={styles.keyValues}>
        <span>Zustand:</span>{" "}
        <PreservationState
          className={styles.zustand}
          value={painting?.Preservation}
        />
        {/* ternary: if Direct_Object is available → display informationen → else: display nothing */}
        {painting.Direct_Object != "" && painting.Direct_Object != null ? (
          <>
            <span>Genutzte Objekte:</span>
            <span>{painting.Direct_Object}</span>
          </>
        ) : (
          ""
        )}
        {/* ternary: if Disjointed_Body_Parts is available → display informationen → else: display nothing */}
        {painting.Disjointed_Body_Parts != null ? (
          <>
            <span>Disjointed:</span>
            <span>√</span>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Painting;
