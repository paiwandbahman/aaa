
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyB4ahAdIEHcV0yXVBPeKjV6fHHXaMNLEVo",
    authDomain: "peshawa-tech.firebaseapp.com",
    projectId: "peshawa-tech",
    storageBucket: "peshawa-tech.appspot.com",
    messagingSenderId: "199031264395",
    appId: "1:199031264395:web:d7e5e622e7dc317c10308e"
  };
  
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);