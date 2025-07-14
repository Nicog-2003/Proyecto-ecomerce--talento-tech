import { useEffect } from "react";

useEffect(() => {
  // Código del efecto secundario
  return () => {
    // Limpieza del efecto             //(opcional)
  };
}, [dependencias]);
