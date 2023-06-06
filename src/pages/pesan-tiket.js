import "../css/pesan-tiket.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";

function PesanTiket() {
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const id = searchParams.get("id");
  // const nama = searchParams.get("nama");
  // const harga = searchParams.get("harga");

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const storedItem = localStorage.getItem("selectedItem");
    if (storedItem) {
      setSelectedItem(JSON.parse(storedItem));
      localStorage.removeItem("selectedItem");
    }
  }, []);

  // console.log(selectedItem);

  const currentDate = new Date();

  const formattedDate = formatDate(currentDate);

  function formatDate(date) {
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }

  const handleQtyChange = (event) => {
    const qty = event.target.value;
    const price = document.getElementById("price").value.replace("Rp. ", "");
    const qtyPrice = price * qty;

    document.getElementById("qtyPrice").value = `Rp. ${qtyPrice}`;
  };

  const handlePesanSekarang = () => {
    // const idTransaksi = document.getElementById("idtransaksi").value;
    const namaTravel = document.getElementById("nametravel").value;
    const namaPembeli = document.getElementById("name").value;
    const nomorTelepon = document.getElementById("phone").value;
    const tanggalKunjungan = document.getElementById("date").value;
    const jumlahPengunjung = document.getElementById("qty").value;
    const hargaTiket = selectedItem.harga;

    const totalBayar = document.getElementById("qtyPrice").value;

    const currentDate = format(new Date(), "d MMMM yyyy");

    const url = `https://6f0c-103-162-62-225.ngrok-free.app/checkout?transaction_id=${selectedItem.id}&nama=${namaPembeli}&harga=${hargaTiket}&telepon=${nomorTelepon}&quantity=${jumlahPengunjung}&date_visit=${tanggalKunjungan}&date_add=${currentDate}&tourname=${namaTravel}`;
    window.location.href = url;

    console.log("ID Transaksi:", selectedItem.id);
    console.log("Nama Travel:", namaTravel);
    console.log("Nama Pembeli:", namaPembeli);
    console.log("Nomor Telepon:", nomorTelepon);
    console.log("Tanggal Kunjungan:", tanggalKunjungan);
    console.log("Tanggal Sekarang:", currentDate);
    console.log("Tanggal Pembelian:", formattedDate);
    console.log("Jumlah Pengunjung:", jumlahPengunjung);
    console.log("Harga Tiket:", hargaTiket);
    console.log("Total Bayar:", totalBayar);
  };

  return (
    <div className="order">
      <header className="order-header">
        {/* Navbar */}
        <nav className="navbar-order">
          <div className="navbar-brand-order">WisataKU</div>
          <div className="navbar-links-order">
            <Link to="/home" className="navbar-link-order">
              Home
            </Link>
            <Link to="/pesantiket" className="navbar-link-order">
              Pesan Tiket
            </Link>
            <Link to="/invoice" className="navbar-link-order">
              Invoice
            </Link>
          </div>
          <div className="navbar-1-order">Halo!</div>
        </nav>

        {/* Content */}
        <div className="order-content"></div>
        <div className="card-order">
          <div className="card-body-order">
            <div className="card-title-order">Form Pemesanan</div>
            <div className="form-row">
              <div className="column-1">
                <div className="card-text-order"></div>
                <div className="card-text-order">Nama Wisata</div>
                <div className="card-text-order">Nama Pembeli</div>
                <div className="card-text-order">Nomor Telepon</div>
                <div className="card-text-order">Tanggal Kunjungan</div>
                <div className="card-text-order">Jumlah Pengunjung</div>
                <div className="card-text-order">Harga Tiket</div>
                <div className="card-text-order">Total Bayar</div>
              </div>

              <div className="column-2">
                <form className="form-input">
                  {selectedItem && (
                    <input
                      type="text"
                      id="nametravel"
                      defaultValue={selectedItem.nama}
                      disabled
                    />
                  )}
                  <input type="text" id="name" />
                  <input type="text" id="phone" />
                  <input type="date" id="date" />
                  <input
                    type="number"
                    id="qty"
                    min={1}
                    defaultValue={1}
                    onChange={handleQtyChange}
                  />

                  {selectedItem && (
                    <input
                      type="text"
                      id="price"
                      value={`Rp. ${selectedItem.harga}`}
                      readOnly
                      disabled
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "white",
                      }}
                    />
                  )}
                  {selectedItem && (
                    <input
                      type="text"
                      id="qtyPrice"
                      value={`Rp. ${selectedItem.harga}`}
                      readOnly
                      disabled
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "white",
                      }}
                    />
                  )}
                </form>
              </div>
            </div>
            <div className="form"></div>
            <div className="form"></div>

            <button className="btn" onClick={handlePesanSekarang}>
              Pesan Sekarang!
            </button>
          </div>
        </div>
        {/* Footer */}
        <div className="order-footer">
          <p style={{ color: "black" }}>&copy; 2023 WisataKU</p>
          <p style={{ color: "black" }}>Contact Us: hadiwiyono1945@gmail.com</p>
        </div>
      </header>
    </div>
  );
}

export default PesanTiket;
