import Navbar2 from "../components/Navbar2";
import About from "../components/about/About";
import CTAB from "../components/CTAB";
import Footer from "../components/Footer";
import FeaturedCard from "../components/about/FeaturedCard";
import Skills from "../components/skills/Skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Navbar يظل ثابت في الأسفل */}
      <Navbar2 />

      {/* المحتوى الرئيسي */}
      <main className="flex-1 flex flex-col justify-center items-center text-center w-full text-white ">
        {/* كل قسم مرتبط بالـ Navbar عبر id */}
        <section id="about" className="w-full">
          <About />
        </section>

        <section id="featured" className="w-full">
          <FeaturedCard />
        </section>

        <section id="skills" className="w-full">
          <Skills />
        </section>

     
      </main>

      {/* Footer دائمًا في الأسفل */}
      <Footer />
    </div>
  );
}
