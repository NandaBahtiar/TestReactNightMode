import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const App = () => {
  const [product, setProduct] = useState([]);

  const getData = async () => {
    const menu = await axios.get("http://localhost:8080/api/public/product");

    setProduct(menu.data.content);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      asdsdasa
      {product.map((item, index) => {
        return (
          <div key={item.id}>
            <h1 className="text-2xl font-bold underline">
              {index} - {item.name}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default App;
