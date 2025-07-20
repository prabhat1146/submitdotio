import React from "react";
import { useThemeContext } from "../context/ThemeContextProvider";
import { useSidebarContext } from "../context/SideBarContextProvider";
import Sidebar from "../layout/Sidebar";

// Lucide icons
import {
  Home,
  FileText,
  Bell,
  BarChart3,
  Settings,
  LifeBuoy,
} from "lucide-react";
import CoreFeatures from "../pages/home/CoreFeatures";
import HowItWorks from "../pages/home/HowItWorks";
import UseCases from "../pages/home/UseCases";
import Testimonials from "../pages/home/Testimonials";
import PricingPreview from "../pages/home/PricingPreview";
import CallToAction from "../pages/components/CallToAction";
import WhoWeAre from "../pages/components/WhoWeAre";
import OurTeam from "../pages/components/ourTeam/OurTeam";
import BgImageSlider from "../pages/components/BgImageSlider";
import bg1 from '../assets/bg/bg1.png'
import bg2 from '../assets/bg/bg2.png'
import bg3 from '../assets/bg/bg3.png'
import bg4 from '../assets/bg/bg4.png'


const Homes = () => {
  const images = [bg1,bg2,bg1,bg4];

  const { theme } = useThemeContext();
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();

  const closeSidebar = () => setIsSidebarOpen(false);

  const sidebarItems = [
    { label: "Dashboard", icon: <Home size={20} /> },
    { label: "Forms", icon: <FileText size={20} /> },
    { label: "Notifications", icon: <Bell size={20} /> },
    { label: "Analytics", icon: <BarChart3 size={20} /> },
    { label: "Settings", icon: <Settings size={20} /> },
    { label: "Support", icon: <LifeBuoy size={20} /> },
  ].map(({ label, icon }, index) => ({
    ele: (
      <div
        key={index}
        className="flex items-center space-x-2 cursor-pointer hover:text-accent transition"
        onClick={() => alert(`You clicked on ${label}`)}
      >
        {icon}
        <span>{label}</span>
      </div>
    ),
  }));

  return (
    <div data-theme={theme} className="min-h-screen">
      {/* Hero Section */}

      <BgImageSlider images={images} autoSlide={true} interval={5000}/>

      {/* <section
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${
          theme === "light"
            ? "bg-background text-primary"
            : "bg-background-primary text-primary"
        }`}
      >
        <h1 className="text-4xl font-bold text-center text-accent">
          Welcome to Submit.IO!
        </h1>
        <p className="mt-4 text-lg text-center text-secondary">
          Your one-stop solution for collecting and managing all your forms in one place.
          Simplify your workflow today.
        </p>
        <div className="mt-8 text-center">
          <a
            href="/about"
            className="bg-accent text-white py-3 px-6 rounded-md shadow-lg hover:bg-accent-dark transition"
          >
            Learn More
          </a>
        </div>
      </section> */}

      {/* Features Section */}
      {/* <section
        className={`px-4 py-8 ${
          theme === "light"
            ? "bg-background-secondary"
            : "bg-background-primary"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-primary">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            {[
              {
                title: "Collect Forms Easily",
                description:
                  "Collect and manage all your forms in one simple, easy-to-use platform.",
              },
              {
                title: "Secure Data Storage",
                description:
                  "Your data is securely stored and managed with state-of-the-art encryption.",
              },
              {
                title: "Easy Access Anywhere",
                description:
                  "Access your forms from any device, anytime, anywhere. It's that simple!",
              },
            ].map(({ title, description }, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg ${
                  theme === "light" ? "bg-white" : "bg-gray-800"
                }`}
              >
                <h3 className="text-xl font-semibold text-primary">
                  {title}
                </h3>
                <p className="mt-4 text-secondary">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <CoreFeatures/>
      <HowItWorks/>
      <UseCases/>
      <Testimonials/>
      <WhoWeAre/>
      <OurTeam/>
      <PricingPreview/>
      <CallToAction/>
      
      {/* Sidebar */}
      {isSidebarOpen && <Sidebar close={closeSidebar} contents={sidebarItems} />}
    </div>
  );
};

export default Homes;
