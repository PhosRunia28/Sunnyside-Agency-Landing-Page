import { useState } from "react";
import Brand1 from "./components/Brand1";
import Brand2 from "./components/Brand2";
import Brand3 from "./components/Brand3";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageLists from "./components/ImageLists";
import Testimonials from "./components/Testimonials";
function App() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <Header openNav={openNav} setOpenNav={setOpenNav} />
      <main className="">
        <Brand1 />
        <Brand2 />
        <Brand3 />
        <Testimonials />
      </main>
      <ImageLists />
      <Footer />
    </>
  );
}

export default App;
