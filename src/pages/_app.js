// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS for functionality (like dropdowns)
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
