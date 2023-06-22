import { useEffect, useState } from "react";
import styles from "./Tastes.module.scss";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../../../api/firebaseConfig.js";
import { Notify } from "notiflix";

const Tastes = () => {
  const [tastes, setTastes] = useState([]);
  const [selectedTaste, setSelectedTaste] = useState("");
  const [tasteName, setTasteName] = useState("");
  const [tasteTag, setTasteTag] = useState("");
  const [tasteSklad, setTasteSklad] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tastesSnapshot = await getDocs(collection(db, "smaki"));
        const tastesDataArray = [];

        tastesSnapshot.forEach((doc) => {
          const data = doc.data();
          tastesDataArray.push({ id: doc.id, ...data });
        });

        setTastes(tastesDataArray);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleTasteSelection = (tasteId) => {
    if (tasteId === "create-new") {
      setSelectedTaste("");
      setTasteName("");
      setTasteTag("");
      setTasteSklad("");
    } else {
      const selected = tastes.find((taste) => taste.id === tasteId);
      if (selected) {
        setSelectedTaste(selected.id);
        setTasteName(selected.name);
        setTasteTag(selected.tag);
        setTasteSklad(selected.sklad ? selected.sklad : "");
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedTaste) {
      try {
        await updateDoc(doc(db, "smaki", selectedTaste), {
          name: tasteName,
          tag: tasteTag,
          sklad: tasteSklad,
        });
        // Update the tastes state with the modified taste
        setTastes((prevTastes) =>
          prevTastes.map((taste) =>
            taste.id === selectedTaste
              ? { ...taste, name: tasteName, tag: tasteTag, sklad: tasteSklad }
              : taste
          )
        );
        setSelectedTaste("");
        setTasteName("");
        setTasteTag("");
        setTasteSklad("");
        Notify.success("Zaktualizowano smak");
      } catch (error) {
        console.log("Error updating taste:", error);
      }
    } else {
      try {
        const newTaste = { name: tasteName, tag: tasteTag, sklad: tasteSklad };
        const docRef = await addDoc(collection(db, "smaki"), newTaste);
        setTastes((prevTastes) => [
          ...prevTastes,
          { id: docRef.id, ...newTaste },
        ]);
        setSelectedTaste("");
        setTasteName("");
        setTasteTag("");
        setTasteSklad("");
        Notify.success("Dodano smak");
      } catch (error) {
        console.log("Error adding new taste:", error);
      }
    }
  };

  const handleRemoveTaste = async (tasteId) => {
    try {
      await deleteDoc(doc(db, "smaki", tasteId));
      setTastes((prevTastes) =>
        prevTastes.filter((taste) => taste.id !== tasteId)
      );
    } catch (error) {
      console.log("Error removing taste:", error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Wybierz smak:
          <select
            value={selectedTaste}
            onChange={(e) => handleTasteSelection(e.target.value)}
          >
            <option value="create-new">Stwórz nowy</option>
            {tastes.map((taste) => (
              <option key={taste.id} value={taste.id}>
                {taste.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Nazwa:
          <input
            type="text"
            value={tasteName}
            onChange={(e) => setTasteName(e.target.value)}
            required
          />
        </label>
        <label>
          Rodzaj:
          <select
            value={tasteTag}
            onChange={(e) => setTasteTag(e.target.value)}
          >
            <option value="">Wybierz rodzaj</option>
            <option value="slodki">Slodki</option>
            <option value="malo-slodki">Malo Slodki</option>
          </select>
        </label>
        <label>
          Skład:
          <input
            type="text"
            value={tasteSklad}
            onChange={(e) => setTasteSklad(e.target.value)}
          />
        </label>
        <button type="submit">
          {selectedTaste ? "Edytuj smak" : "Stwórz smak"}
        </button>
        {selectedTaste && (
          <button
            className={styles.removeButton}
            onClick={() => handleRemoveTaste(selectedTaste)}
          >
            Usuń smak
          </button>
        )}
      </form>
    </div>
  );
};

export default Tastes;
