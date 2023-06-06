import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvb-jGLoRyqgyydyM12KsNujXNZVzg15I",
  authDomain: "ticket-wisata-donorojo.firebaseapp.com",
  databaseURL:
    "https://ticket-wisata-donorojo-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ticket-wisata-donorojo",
  storageBucket: "ticket-wisata-donorojo.appspot.com",
  messagingSenderId: "678433047441",
  appId: "1:678433047441:web:97425989f43f67cb5d9030",
  measurementId: "G-SJRKH94C8N",
};

const app = initializeApp(firebaseConfig);

export default app;


