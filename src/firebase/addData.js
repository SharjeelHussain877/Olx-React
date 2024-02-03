import { db, collection, addDoc } from "./firebase.config.js";

const addProductDetailsOnFirestore = async (
  title,
  description,
  category,
  brand,
  price,
  discountPercentage,
  stock,
  imgUrl
) => {
  const docRef = await addDoc(collection(db, "products"), {
    title,
    description,
    category,
    brand,
    price,
    discountPercentage,
    stock,
    imgUrl,
  });
  return docRef.id;
};

const AddUser = async (username, contact, DOB, email, password, userId) => {
  const docRef = await addDoc(collection(db, "users"), {
    username,
    contact,
    DOB,
    email,
    password,
    userId,
  });
};

export { AddUser, addProductDetailsOnFirestore };
