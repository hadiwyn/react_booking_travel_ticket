import { createContext, useContext, useState } from "react";

const PesanTiketContext = createContext();

export function usePesanTiket() {
  return useContext(PesanTiketContext);
}

export function PesanTiketProvider({ children }) {
  const [pesanTiketData, setPesanTiketData] = useState(null);

  const setPesanTiket = (data) => {
    setPesanTiketData(data);
  };

  return (
    <PesanTiketContext.Provider value={{ pesanTiketData, setPesanTiket }}>
      {children}
    </PesanTiketContext.Provider>
  );
}
