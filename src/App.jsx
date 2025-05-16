import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testimonials";
import ChatWidget from "./components/ChatWidget";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />

      <Hero />

      <HowItWorks />

      <WhyChooseUs />

      <Testimonials />

      <ContactForm />

      <ChatWidget />
      <Footer />
    </div>
  );
}

export default App;
