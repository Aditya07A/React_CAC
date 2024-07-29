// import { useState } from 'react'

import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Props + Tailwind
      </h1>
      <Card userName="AD" btnText="clickMe" />
      <Card userName="it" />
    </>
  );
}

export default App;
