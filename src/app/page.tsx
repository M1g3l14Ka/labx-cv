
import Header from "@/components/Header";
import Main from "@/components/Main";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import { petTimelineData } from "@/data/data";


export default function Home() {
  return (
    <div 
      className="flex flex-col flex-1 items-center justify-center overflow-x-hidden w-full"
    >

      <section id="start">
        <Header/>
      </section>

      <section id="about">
        <About />
        <AIAssistant />
      </section>

      <section id="main">
        <Main projects={petTimelineData}/>
      </section>

      <section id="contacts">
        <Contacts />
      </section>
      
      <Footer/>

    </div>
  );
}
