import { useEffect, useState } from "react";
import styles from "./OfferForm.module.scss";
import {
  collection,
  getDocs,
  updateDoc,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../../../api/firebaseConfig.js";

const OfferForm = () => {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "oferta"));
        const dataArray = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          dataArray.push({ id: doc.id, ...data });
        });

        setProducts(dataArray);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleMoveUp = async (productId, currentOrder) => {
    const prevProduct = products.find(
      (product) => product.order === currentOrder - 1
    );

    if (prevProduct) {
      try {
        await updateDoc(doc(db, "oferta", productId), {
          order: prevProduct.order,
        });
        await updateDoc(doc(db, "oferta", prevProduct.id), {
          order: currentOrder,
        });
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === productId
              ? { ...product, order: prevProduct.order }
              : product.id === prevProduct.id
              ? { ...product, order: currentOrder }
              : product
          )
        );
      } catch (error) {
        console.log("Error moving product up:", error);
      }
    }
  };

  const handleMoveDown = async (productId, currentOrder) => {
    const nextProduct = products.find(
      (product) => product.order === currentOrder + 1
    );

    if (nextProduct) {
      try {
        await updateDoc(doc(db, "oferta", productId), {
          order: nextProduct.order,
        });
        await updateDoc(doc(db, "oferta", nextProduct.id), {
          order: currentOrder,
        });
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === productId
              ? { ...product, order: nextProduct.order }
              : product.id === nextProduct.id
              ? { ...product, order: currentOrder }
              : product
          )
        );
      } catch (error) {
        console.log("Error moving product down:", error);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newProduct = {
        name: newProductName,
        order: products.length + 1,
      };

      const docRef = await addDoc(collection(db, "oferta"), newProduct);
      setProducts((prevProducts) => [
        ...prevProducts,
        { id: docRef.id, ...newProduct },
      ]);
      setNewProductName("");
    } catch (error) {
      console.log("Error adding new product:", error);
    }
  };

  const handleRemoveProduct = async (productId) => {
    try {
      // Remove the product from the database
      await deleteDoc(doc(db, "oferta", productId));

      // Update the products state by filtering out the removed product
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.log("Error removing product:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Dodaj nowy produkt do oferty </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Nazwa:
          <input
            type="text"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            required
          />
        </label>

        <button type="submit">Dodaj do oferty</button>
      </form>
      <ul className={styles.list}>
        {products
          .sort((a, b) => a.order - b.order)
          .map((product, index) => (
            <li className={styles.item} key={index}>
              <span className={styles.name}>{product.name}</span>
              <div className={styles.buttons}>
                <button
                  className={styles.moveButton}
                  onClick={() => handleMoveUp(product.id, product.order)}
                  disabled={product.order === 1}
                >
                  ↑
                </button>
                <button
                  className={styles.moveButton}
                  onClick={() => handleMoveDown(product.id, product.order)}
                  disabled={product.order === products.length}
                >
                  ↓
                </button>
                <button
                  className={styles.removeButton}
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  Usuń
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default OfferForm;
