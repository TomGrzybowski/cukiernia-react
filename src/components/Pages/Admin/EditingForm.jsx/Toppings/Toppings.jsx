import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../../api/firebaseConfig.js";
import styles from "./Toppings.module.scss";

const ToppingsForm = () => {
  const [toppings, setToppings] = useState([]);
  const [newToppingName, setNewToppingName] = useState("");
  const [isOwocTagChecked, setIsOwocTagChecked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const toppingsSnapshot = await getDocs(collection(db, "dodatki"));
        const toppingsDataArray = [];

        toppingsSnapshot.forEach((doc) => {
          const data = doc.data();
          toppingsDataArray.push({
            id: doc.id,
            name: data.name,
            tag: data.tag,
          });
        });

        setToppings(toppingsDataArray);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddTopping = async (event) => {
    event.preventDefault();

    try {
      const newTopping = { name: newToppingName };

      if (isOwocTagChecked) {
        newTopping.tag = "owoc";
      }

      await addDoc(collection(db, "dodatki"), newTopping);

      setToppings((prevToppings) => [
        ...prevToppings,
        { name: newToppingName, tag: newTopping.tag },
      ]);

      setNewToppingName("");
      setIsOwocTagChecked(false);
    } catch (error) {
      console.log("Error adding topping:", error);
    }
  };

  const handleRemoveTopping = async (toppingId) => {
    try {
      await deleteDoc(doc(db, "dodatki", toppingId));
      setToppings((prevToppings) =>
        prevToppings.filter((topping) => topping.id !== toppingId)
      );
    } catch (error) {
      console.log("Error removing topping:", error);
    }
  };

  return (
    <div>
      <ul className={styles.list}>
        {toppings
          .sort((a, b) => {
            if (a.tag === "owoc" && b.tag !== "owoc") {
              return -1; // `a` comes first if it has the "owoc" tag and `b` doesn't
            } else if (a.tag !== "owoc" && b.tag === "owoc") {
              return 1; // `b` comes first if it has the "owoc" tag and `a` doesn't
            } else {
              return 0; // maintain the original order
            }
          })
          .map((topping) => (
            <li className={styles.item} key={topping.id}>
              {topping.name}
              <button
                onClick={() => handleRemoveTopping(topping.id)}
                className={styles.removeButton}
              >
                Usuń
              </button>
            </li>
          ))}
      </ul>
      <h2>Dodaj nowy dodatek:</h2>
      <form onSubmit={handleAddTopping} className={styles.form}>
        <label>
          Nazwa dodatku:
          <input
            type="text"
            value={newToppingName}
            onChange={(e) => setNewToppingName(e.target.value)}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={isOwocTagChecked}
            onChange={(e) => setIsOwocTagChecked(e.target.checked)}
          />
          Owoc
        </label>
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
};

export default ToppingsForm;
