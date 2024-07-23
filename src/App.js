import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/landing/Landing";
import Contact from "./pages/contact/Contact";
import PageNotFound from "./pages/404/PageNotFound";
import About from "./pages/about/About"

function App() {
  const [personalDetails] = useState({
    name: "Mason Zhang",
    location: "Berkeley, CA",
    email: "masonzhang@berkeley.edu",
    brand:
      "Hello I'm an incoming freshman at UC Berkeley for computer science. I specialize in front-end development but have experience in AI/ML, full-stack, and software development. My socials are below so don't hesitate to reach out!",
    github: "masonzhangg",
    linkedin: "masonzhangg",
  });

  const location = useLocation();
  const [originalTitle, setOriginalTitle] = useState();

  useEffect(() => {
    // Hide loader when initial route is loaded
    if (location.pathname !== "/") {
      // Code to hide loader can be added here
    }

    // Store the original document title
    if (!originalTitle) {
      setOriginalTitle(document.title);
    }

    // Set the document title based on the current route
    if (location.pathname === "/") {
      document.title = `${personalDetails.name}`;
    } else {
      document.title = `${personalDetails.name} | ${location.pathname.substring(1)}`;
    }

    // Clean up function to restore the original title
    return () => {
      if (originalTitle) {
        document.title = originalTitle;
      }
    };
  }, [location, originalTitle, personalDetails.name]);

  return (
    <>
      {/* Header */}
      <Header />
      {/* Define routes */}
      <Routes location={location} key={location.pathname}>
      <Route path="/about" element={<About />} />
        <Route path="/" element={<Landing name={personalDetails.name} tagline={personalDetails.brand} />} />
        <Route
          path="/contact"
          element={
            <Contact
              name={personalDetails.name}
              location={personalDetails.location}
              email={personalDetails.email}
            />
          }
        />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/page-not-found" />} />
      </Routes>
    </>
  );
}

export default App;
