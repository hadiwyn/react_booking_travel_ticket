import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import app from "../firebase";
import { getFirestore } from "firebase/firestore";
import "../css/home.css";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(app);
      try {
        const ticketsCollectionRef = collection(db, "wisata");
        const querySnapshot = await getDocs(ticketsCollectionRef);

        const fetchedData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // const handlePesanSekarang = (item) => {
  //   // Mengalihkan ke halaman pesan tiket dan membawa data dari card yang dipesan
  //   // Di sini Anda dapat melakukan pengiriman data melalui URL, menyimpan data di state global, atau menggunakan manajemen state lainnya seperti Redux.
  //   // Misalnya, menggunakan URL dengan query parameters:
  //   const url = `/pesantiket?id=${item.id}&nama=${encodeURIComponent(
  //     item.nama
  //   )}&harga=${item.harga}`;
  //   window.location.href = url;
  // };

  const handlePesanSekarang = (item) => {
    localStorage.setItem("selectedItem", JSON.stringify(item));
  };

  return (
    <div className="Home">
      <header className="home-header">
        <nav className="navbar">
          <div className="navbar-brand">WisataKU</div>
          <div className="navbar-links">
            <Link to="/home" className="navbar-link">
              Home
            </Link>
            <Link to="/pesantiket" className="navbar-link">
              Pesan Tiket
            </Link>
            <Link to="/invoice" className="navbar-link">
              Invoice
            </Link>
          </div>
          <div className="navbar-1">Halo!</div>
        </nav>
        {/* ... */}
        <div className="content">
          <div className="card-wrapper">
            {data.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image_1} className="image-card" alt="logo" />
                <div className="card-body">
                  <h3 className="card-title">{item.nama}</h3>
                  <p className="card-text">{item.deskripsi}</p>
                  <Link
                    to="/pesantiket"
                    onClick={() => handlePesanSekarang(item)}
                  >
                    <button className="btn">Pesan Sekarang!</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Footer */}
        <div className="home-footer">
          <p style={{ color: "black" }}>&copy; 2023 WisataKU</p>
          <p style={{ color: "black" }}>Contact Us: hadiwiyono1945@gmail.com</p>
        </div>
        {/* ... */}
      </header>
    </div>
  );
}

export default Home;
