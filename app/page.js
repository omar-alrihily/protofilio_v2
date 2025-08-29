import Navbar from "../components/Navbar";
import About from "../components/about/About";
import CTAB from "../components/CTAB";
import Footer from "../components/Footer";
import FeaturedCard from "../components/about/FeaturedCard";
import Skills from "../components/skills/Skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Navbar يظل في الأعلى */}
      <Navbar />

      {/* المحتوى الرئيسي */}
      <main className="flex-1 flex flex-col justify-center items-center text-center w-full text-white " >
        {/* يمكنك وضع gradient داخل كل قسم بشكل منفصل بدل main */}
        <About />
        <FeaturedCard/>
        <Skills />
       
      </main>

      {/* Footer دائمًا في الأسفل */}
      <Footer />
    </div>
  );
}
