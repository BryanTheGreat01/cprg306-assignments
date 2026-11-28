import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (id) => {
  try {
    const itemCollectionRef = collection(db, "shopping-list");
    const itemSnapshot = await getDocs(itemCollectionRef);

    const mappedItems = itemSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return mappedItems;
  } catch (error) {
    console.error("Error fetching shopping list items:", error);
    throw error;
  }
};

export const addItem = async (userId, item) => {
  try {
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item to shopping list:", error);
    throw error;
  }
};
