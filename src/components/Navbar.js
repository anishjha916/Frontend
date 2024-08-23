import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <nav className="navbar navbar-expand-lg w-100" style={{ backgroundColor: '#D9D9D9', height: '12%', borderRadius: '30px', position: 'fixed', top: 5, zIndex: 1000, opacity: '0.9', maxWidth: '1100px' }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            {/* Add your image here */}
            <img src="/images/navvideo.gif" alt="Logo" style={{ height: '50px', marginRight: '20px' }} />

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/" className="nav-link fs-5">Home</Link>
                </li>
                <li className="nav-item">
                  <Link href="/about" className="nav-link fs-5">About</Link>
                </li>
                <li className="nav-item">
                  <Link href="/profile" className="nav-link fs-5">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link href="/login" className="nav-link fs-5">Login</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Add search bar */}
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
