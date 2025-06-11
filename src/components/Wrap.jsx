import React from "react";
//import context
import ThemeContext from "./state/ThemeContext ";

const Wrap = (props) => {
  // Menggunakan props (lowercase) sebagai konvensi
  const [theme,setTheme] = React.useState(true);

  return (
    // Anda bisa menambahkan div dengan styling atau elemen lain di sini
    // untuk membungkus children
    <ThemeContext.Provider value={
      {
        theme,
        setTheme
      }
    }>
      <div className="wrapper-container relative">
        {/* Contoh penambahan kelas */}
        {props.children} {/* Merender komponen anak */}
      </div>
    </ThemeContext.Provider>
  );
};

export default Wrap;
