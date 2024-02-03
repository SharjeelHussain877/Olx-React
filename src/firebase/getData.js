import { collection, getDocs, db } from "./firebase.config";


const allProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];
    querySnapshot.forEach((doc) => {
      // Push each product data into the array
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error("Error getting products:", error);
    return []; // Return an empty array in case of error
  }
};


export default allProducts