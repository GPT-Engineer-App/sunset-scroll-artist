import { useState } from 'react';
import { Sun, Moon, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <nav className="bg-orange-100 dark:bg-gray-800 p-4 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600 dark:text-orange-400">SunsetCorp</h1>
          <div className="flex items-center space-x-4">
            <a href="#about" className="text-orange-800 dark:text-orange-200 hover:text-orange-600 dark:hover:text-orange-400">About</a>
            <a href="#services" className="text-orange-800 dark:text-orange-200 hover:text-orange-600 dark:hover:text-orange-400">Services</a>
            <a href="#contact" className="text-orange-800 dark:text-orange-200 hover:text-orange-600 dark:hover:text-orange-400">Contact</a>
            <Button onClick={toggleDarkMode} variant="ghost" size="icon">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-32 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to SunsetCorp</h1>
          <p className="text-xl mb-8">Illuminating Your Business Future</p>
          <Button className="bg-white text-orange-600 hover:bg-orange-100">Learn More</Button>
        </div>
      </header>

      <section id="about" className="py-20 bg-orange-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-800 dark:text-orange-400">About Us</h2>
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            At SunsetCorp, we believe in harnessing the power of innovation to drive businesses forward. 
            Our team of experts is dedicated to providing cutting-edge solutions that help our clients 
            achieve their goals and stay ahead in today's competitive landscape.
          </p>
        </div>
      </section>

      <section id="services" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-600 dark:text-orange-400">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Strategic Consulting', 'Digital Transformation', 'Data Analytics'].map((service, index) => (
              <div key={index} className="bg-orange-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-orange-800 dark:text-orange-300">{service}</h3>
                <p className="text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-20 bg-gradient-to-r from-red-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Business?</h2>
          <p className="text-xl mb-8">Let's collaborate and bring your vision to life.</p>
          <Button className="bg-white text-purple-600 hover:bg-purple-100">Get Started</Button>
        </div>
      </section>

      <section id="contact" className="py-20 bg-orange-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-800 dark:text-orange-400">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-600 dark:text-orange-400">Get in Touch</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">We'd love to hear from you. Reach out to us for any inquiries or collaborations.</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-orange-600 dark:text-orange-400" />
                  <span className="text-gray-700 dark:text-gray-300">info@sunsetcorp.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-orange-600 dark:text-orange-400" />
                  <span className="text-gray-700 dark:text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-orange-600 dark:text-orange-400" />
                  <span className="text-gray-700 dark:text-gray-300">123 Sunset Blvd, Anytown, USA</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border border-orange-300 rounded" />
              <input type="email" placeholder="Your Email" className="w-full p-2 border border-orange-300 rounded" />
              <textarea placeholder="Your Message" rows="4" className="w-full p-2 border border-orange-300 rounded"></textarea>
              <Button className="bg-orange-600 text-white hover:bg-orange-700">Send Message</Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-orange-800 dark:bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 SunsetCorp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
