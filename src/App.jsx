import { useState } from "react";
import { Footer, Navbar } from "./components";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}

export default App;
