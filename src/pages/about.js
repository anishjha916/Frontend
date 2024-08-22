import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container" style={{ paddingTop: "100px" }}>
        <h2 className="text-center">Hey! We Are VYB Store</h2>
        <div className="row p-5">
          <div className="col-md-6 p-5">
            <h2 className="text-center">Our Objective</h2>
            <p className="fw-bold" style={{ fontFamily: "sans-serif" }}>
              Join us exclusively as we revolutionize content monetization for
              Influencers! We want to excel in offering meticulously crafted
              itineraries and premium digital content, merchandise, and listing
              of clothing brands. Our upcoming features will empower creators
              and influencers to kickstart their businesses effortlessly,
              without the need for their own websites. Say goodbye to the hassle
              of dealing with developers and hello to unleashing your
              creativity! Partner with us now and unlock the full potential to
              monetize your content.
            </p>
          </div>
          <div className="col-md-6">
            <Image
              src="/images/about.jpeg"
              alt="A description of the image"
              width={400}
              height={400}
              className="img-fluid"
            />
          </div>
        </div>

        <div className="mt-4">
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-6 d-flex flex-column justify-content-end align-items-end text-end">
                <Image
                  src="/images/user1.jpg"
                  alt="A description of the image"
                  width={150}
                  height={130}
                  style={{ borderRadius: "40px" }}
                />
                <h6 className="me-4">John Deck</h6>
                <h6 className="me-4">Ex MicroSoft</h6>
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-start align-items-start text-start">
                <Image
                  src="/images/user2.jpg"
                  alt="A description of the image"
                  width={150}
                  height={130}
                  style={{ borderRadius: "40px" }}
                />
                <h6 className="ms-4">Linda Rose</h6>
                <h6 className="ms-4">Ex Google</h6>
              </div>
            </div>
          </div>

          {/* Contact us Part start here  */}
          <div className="mt-2">
            <h2 className="text-center">Contact Us</h2>
            <div className="row">
              <div className="col-md-6 d-flex flex-column justify-content-end align-items-end text-end">
                {/* Contact Information Cards */}
                <div
                  className="d-flex align-items-center p-4 mb-3"
                  style={{
                    width: "50%",
                    height:"20%",
                    border: "2px solid #000435",
                    borderRadius: "8px",
                  }}
                >
                  <div className="me-3">
                    <Image
                      src="/images/phone.png"
                      alt="Phone Logo"
                      width={50}
                      height={50}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div>
                    <h6>Phone Number</h6>
                    <h6>99356277473522</h6>
                  </div>
                </div>

                <div
                  className="d-flex align-items-center p-4 mb-3"
                  style={{
                    width: "50%",
                    height:"20%",
                    border: "2px solid #000435",
                    borderRadius: "8px",
                  }}
                >
                  <div className="me-3">
                    <Image
                      src="/images/email.png"
                      alt="Email Logo"
                      width={50}
                      height={50}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div>
                    <h6>Email Address</h6>
                    <h6>abcd@gmail.com</h6>
                  </div>
                </div>

                <div
                  className="d-flex align-items-center p-4 mb-3"
                  style={{
                    width: "50%",
                    height:"20%",
                    border: "2px solid #000435",
                    borderRadius: "8px",
                  }}
                >
                  <div className="me-3">
                    <Image
                      src="/images/location.png"
                      alt="Location Logo"
                      width={50}
                      height={50}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div>
                    <h6>Location</h6>
                    <h6>Delhi</h6>
                  </div>
                </div>

                <div
                  className="d-flex align-items-center p-4 mb-3"
                  style={{
                    width: "50%",
                    height:"20%",
                    border: "2px solid #000435",
                    borderRadius: "8px",
                  }}
                >
                  <div className="me-3">
                    <Image
                      src="/images/insta.png"
                      alt="Instagram Logo"
                      width={50}
                      height={50}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div>
                    <h6>Instagram</h6>
                    <h6>ancs123</h6>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex flex-column justify-content-start align-items-start text-start">
                <div
                  className="d-flex align-items-center p-4 w-75 mt-4"
                  style={{
                    border: "2px solid #000435",
                    borderRadius: "8px",
                  }}
                >
                  <div className="container-fluid">
                    <h2 className="text-center">Send Message</h2>
                    {/* First Row */}
                    <div className="row g-3">
                      <div className="col">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Address"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Address"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Second Row */}
                    <div className="row g-3 mt-3">
                      <div className="col">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Address"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Address"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row g-3 mt-3">
                      <div className="input-group input-group-lg">
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Message"
                          placeholder="Message"
                        />
                      </div>
                    </div>
                    <div className="g-3 mt-4 d-flex justify-content-center">
                      <button type="button" className="btn btn-secondary btn-lg">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second row of contact us start here  */}

          <div className="row mt-5 mb-2">
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
              <div style={{ marginTop: "50px", paddingLeft: "20%" }}>
                <p className="fs-5 fw-bold">You Are Also Creator?</p>
                <h4>Your audience wants links</h4>
                <p className="fw-bold">
                  Make it easy for them by linking products to every post and
                  video
                </p>
                <button type="button" className="btn btn-success btn-lg">
                  Join Us
                </button>
              </div>
            </div>

            <div className="col-md-6 d-flex flex-column justify-content-start align-items-start">
              <div
                className="d-flex align-items-center p-4 w-75"
                style={{
                  border: "2px solid #000435",
                  borderRadius: "8px",
                  height: "500px",
                  backgroundImage: `url('/images/mobile.png')`, // Replace with your image path
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Content goes here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
