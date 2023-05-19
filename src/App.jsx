import { useEffect, useState } from 'react'

import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import './App.css'

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBzyiEoT9y7zbQWkm8s5PfqDGR8dxK6WA4",
    authDomain: "finger-number-detection.firebaseapp.com",
    databaseURL: "https://finger-number-detection-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "finger-number-detection",
    storageBucket: "finger-number-detection.appspot.com",
    messagingSenderId: "675474380672",
    appId: "1:675474380672:web:46d5a541948a96d30d5365",
    measurementId: "G-3KSLFHKBC8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  console.log(app);
  const [count, setCount] = useState(0)

  useEffect(() => {
    const query = ref(db, "data");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      console.log();
    
      if (data){

        setCount(Object.values(data).reduce((prev,value)=>parseInt(prev)+parseInt(value)))
      }
    });
  }, []);
  return (
    <>
    <div className="main">
      <span>{count}</span>
    </div>

    </>
  )
}

export default App
