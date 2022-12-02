import React from "react";
import ReactDOM from "react-dom/client";
import FirebaseContext from "./context/firebase.js";
import "react-loading-skeleton/dist/skeleton.css";
import { firebase, FieldValue } from "./library/firebase.js";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
        <App />
    </FirebaseContext.Provider>
);
