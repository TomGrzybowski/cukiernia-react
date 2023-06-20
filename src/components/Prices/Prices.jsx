// import { db } from "@/pages/api/firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import styles from "./Prices.module.scss";
import { db } from "../../api/firebaseConfig.js";

const Prices = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "cennik"));
        const dataArray = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          dataArray.push(data);
        });
        const sortedArray = dataArray.sort((a, b) => a.od - b.od);
        setOptions(sortedArray);

        console.log(Object.keys(dataArray[0]));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>Ilość porcji</th>
            <th>Cena</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option, index) => (
            <tr className={styles.tableHetableRowader} key={index}>
              <td
                className={styles.tableCell}
              >{`Od ${option.od} do ${option.do}`}</td>
              <td
                className={styles.tableCell}
              >{`${option.cena} zł / porcja`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Prices;
