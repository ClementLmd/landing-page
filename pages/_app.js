import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
