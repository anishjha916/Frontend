import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="container-fluid d-flex justify-content-center">
       <nav className="navbar navbar-expand-lg navbar-light  w-100" style={{ backgroundColor: '#D9D9D9', height: '12%', borderRadius: '30px', position: 'fixed', top: 5, zIndex: 1000, opacity: '0.9', maxWidth: '1100px' }}>
  <div class="container-fluid">

  <img src="/images/navvideo.gif" alt="Logo" style={{ height: '50px', marginRight: '20px' }} />
 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link href="/" className="nav-link fs-5">Home</Link>
        </li>
        <li class="nav-item">
        <Link href="/about" className="nav-link fs-5">About</Link>
        </li>
     
        <li class="nav-item">
        <Link href="/profile" className="nav-link fs-5">Profile</Link>
        </li>

        <li class="nav-item">
        <Link href="/login" className="nav-link fs-5">Login</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;
