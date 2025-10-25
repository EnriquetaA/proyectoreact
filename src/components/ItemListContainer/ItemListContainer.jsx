import { useEffect, useState } from "react";

export const ItemListContainer = () => {
const [products, setProduts] = useState([])

useEffect(()=>{
    fetch("/data/products.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Hubo un problema al buscar productos");
      } 
      return res.json();
    })
    .then((data) => {
      setProduts(data)  
    })
    .catch((err) => {
      console.log(err);
    });
}, [])

    return (
       <section>
          <h1>Bienvenida</h1>
          <ItemList list={products}/>
       </section>
    );

};