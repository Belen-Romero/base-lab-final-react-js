import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/config";

//Todas las funciones van a utilizar esta coleccion.
//La hacemos global y que todas la usen en vez defirla varias veces
// Creamos la referencia a la coleccion: en mi caso se llama "products"
const productsRef = collection(db, "products");

/* -------------------------------------------------------------------------- */
/*                               TRAER PRODUCTOS                              */
/* -------------------------------------------------------------------------- */
export const getProducts = async () => {
  try {
    //Esto no nos da el objeto de producto directo,
    // sino un tipo especial de firestore. Seria como una "foto" de lo que hay
    //al momento, mas otras cosas. Es un "QuerySnapshot"
    const snapshot = await getDocs(productsRef);

    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return productsFormat;
  } catch (error) {
    console.error("Error al traer productos:", error);
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                            TRAER PRODUCTO POR ID                           */
/* -------------------------------------------------------------------------- */
// Funcion que SOLO pide un dato
export const getProductById = async (id) => {
  try {
    // Creamos la referencia al documento
    const productRef = doc(productsRef, id);

    // Traemos el documento:
    const snapshot = await getDoc(productRef);

    // Verificamos si existe
    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() };
      console.log("Doc:", product);
      return product;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al traer producto por ID:", error);
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                          SI FILTRAMOS POR CATEGORY                         */
/* -------------------------------------------------------------------------- */
export const getByCategory = async (category) => {
  try {
    let queryRef;

    //truthy
    if (category) {
      queryRef = query(productsRef, where("category", "==", category));
    } else {
      queryRef = productsRef;
    }

    // Traer los documentos:
    const snapshot = await getDocs(queryRef);

    //Mapeo de datos para formateo
    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return productsFormat;
  } catch (error) {
    console.error("Error al filtrar productos:", error);
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                              ALTA DE PRODUCTO                              */
/* -------------------------------------------------------------------------- */
export const createProduct = async (productData) => {
  try {
    //Tan facil como usar la funcion addDoc y pasarle la coleccion y el doc a agregar
    const docRef = await addDoc(productsRef, productData);

    return docRef.id; // opcional, por si quieren usar el id para algo
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};

/* ------------------------------- OPCIONALES ------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                   UPDATE                                   */
/* -------------------------------------------------------------------------- */
export const updateProduct = async (id, updatedData) => {
  try {
    // Referencia al documento
    const productRef = doc(db, "products", id);

    // Actualizamos SOLO los campos que mandes en updatedData
    await updateDoc(productRef, updatedData);

    console.log("Producto actualizado correctamente");
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                                   DELETE                                   */
/* -------------------------------------------------------------------------- */
export const deleteProduct = async (id) => {
  try {
    const productRef = doc(db, "products", id);

    await deleteDoc(productRef);

    console.log("Producto eliminado correctamente");
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                             BUSQUEDA POR NOMBRE                            */
/* -------------------------------------------------------------------------- */
export const searchProductsByName = async (texto) => {
  try {
    const queryRef = query(
      productsRef,
      where("name", ">=", texto),
      where("name", "<=", texto + "\uf8ff"),
    );
    //Con firestore no podemos usar includes o similares, entonces con eso
    // le decimos "dame" todo lo que empiece con... texto

    const snapshot = await getDocs(queryRef);

    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return productsFormat;
  } catch (error) {
    console.error("Error al buscar productos:", error);
    throw error;
  }
};
