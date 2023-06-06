import { useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "../css/App.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import firebaseApp from "../firebase"; // Import konfigurasi Firebase dari file firebase.js

function App() {
  useEffect(() => {
    const fetchData = async () => {
      // Mendapatkan instance Firestore
      const db = getFirestore(firebaseApp);

      // Mendapatkan koleksi yang diinginkan
      const ticketsCollection = collection(db, "wisata");

      // Mendapatkan dokumen dari koleksi
      const querySnapshot = await getDocs(ticketsCollection);

      // Mengiterasi dokumen dan menampilkan data
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="column-1">
            <h2>Selamat Datang Di Aplikasi Pemesanan Tiket Wisata</h2>
            <p>
              Bingung mau pergi kemana hari ini? <br></br>
              Pesan tiket aja di WisataKU
            </p>
            <Link to="/home">
              <button className="button-pesan">Pesan Sekarang!</button>
            </Link>
          </div>
          <div className="column-2">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </header>
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
