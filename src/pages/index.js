import { useState } from 'react';
import Image from "next/image";
import Navbar from '../components/Navbar';

export default function Home() {
    const [isVisible, setIsVisible] = useState(true);
    const [isVisible1, setIsVisible1] = useState(true);
    const [isVisible2, setIsVisible2] = useState(true);
    const [isVisible3, setIsVisible3] = useState(true);

    const toggleText = () => {
      setIsVisible(!isVisible);
    };

    const toggleText1 = () => {
        setIsVisible1(!isVisible1);
    };

    const toggleText2 = () => {
      setIsVisible2(!isVisible2);
    };

    const toggleText3 = () => {
      setIsVisible3(!isVisible3);
    };

    return (
      <div className="container-fluid">
        <Navbar />
        <div className="container mt-5">
          <div className="video-container mt-5" style={{ maxWidth: '100%', height: 'auto', textAlign: 'center', overflow: 'hidden' }}>
            <video
              width="100%"
              height="auto"
              autoPlay
              muted
              playsInline
              loop
              style={{ borderRadius: '15px', objectFit: 'cover' }}
            >
              <source src="/images/topbarvideo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="w-100 d-flex flex-wrap justify-content-center gap-5 bg-light border border-3" style={{ borderRadius: "15px" }}>
            {[
              { src: "/images/travel.png", text: "Travel Industry" },
              { src: "/images/custome.png", text: "Custome Merchandise" },
              { src: "/images/digital.png", text: "Digital Content" },
              { src: "/images/fashion.png", text: "Fashion Brand" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <Image
                  src={item.src}
                  alt="Image"
                  className="img-fluid mt-2"
                  width={120}
                  height={100}
                  style={{ maxHeight: "300px", objectFit: "cover" }}
                />
                <p className="fs-4 fw-bold">{item.text}</p>
             
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-4"
          style={{
            backgroundImage: "url(/images/slideimage.gif)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100%",
          }}
        ></div>

        <div className="row mt-5">
          <div className="col-lg-6 col-12 d-flex justify-content-center">
            <div
              className="w-75 mt-5 p-4"
              style={{
                position: "sticky",
                top: "20px",
                backgroundColor: "#023020",
                borderRadius: "15px",
                height: "50vh",
              }}
            >
              <h1 className="text-white">Start Vibing With Us</h1>
              <p className="text-white mt-4">
                "We help influencers make money by monetizing their travel plans, merchandise, and digital goods and many more."
              </p>
              <button type="button" className="btn btn-success btn-lg mt-4">
                Join Us
              </button>
            </div>
          </div>

          <div id="scrolling-column" className="col-lg-6 col-12" style={{ paddingLeft: "15px" }}>
            {[
              {
                title: "Sign Up and create your own store hassle-free.",
                description: "Join us via Google Sign-In and verify your influencer status by entering your social media ID and unlock your store @ zero cost.",
                imgSrc: "/images/slider1.gif"
              },
              {
                title: "Build & customize your storefront.",
                description: "Simply fill in the details to build your digital store. Once done, start selling your products to your audience.",
                imgSrc: "/images/slider2.gif"
              },
              {
                title: "Call the audience to your store. Easily integrate links into content.",
                description: "After setting up your products, it's time to go public. Put your store link in insta bio and let's make the first post together!",
                imgSrc: "/images/slider3.gif"
              },
              {
                title: "Monetize your influencer status: Earn money adding real value to your true followers!",
                description: "Let VYB the money now!! It's here and withdraw it periodically",
                imgSrc: "/images/slider4.gif"
              }
            ].map((item, index) => (
              <div key={index} className="p-4 mt-5" style={{ borderRadius: "20px", backgroundColor: "#87CEEB" }}>
                <h3>{item.title}</h3>
                <p className="fs-5">{item.description}</p>
                <Image
                  src={item.imgSrc}
                  alt="GIF"
                  className="img-fluid mt-3 mx-auto d-block border rounded mt-5"
                  width={300}
                  height={150}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-light mt-5">
          <div className="mt-5 p-5" style={{ top: "40px" }}>
            <h3 className="d-flex justify-content-center">Estimate Earning Platform</h3>
            <div className="row">
              <div className="col-md-6 col-12 p-5">
                {[
                  { label: "How Many Follower Do You have", id: "followerRange" },
                  { label: "How many products do you list monthly?", id: "productRange" }
                ].map((item, index) => (
                  <div key={index} className="mb-3">
                    <label
                      htmlFor={item.id}
                      style={{ fontSize: "20px" }}
                      className="form-label mt-5"
                    >
                      {item.label}
                    </label>
                    <input
                      type="range"
                      className="form-range mt-5"
                      min="0"
                      max="5"
                      id={item.id}
                    />
                  </div>
                ))}
              </div>
              <div className="col-md-6 col-12 p-5">
                {[
                  { title: "Yearly Earning", amount: "₹288000" },
                  { title: "Monthaly Earning", amount: "₹288000" }
                ].map((item, index) => (
                  <div key={index} className="mt-5">
                    <h4 className="d-flex justify-content-center">{item.title}</h4>
                    <h1 className="mt-3 d-flex justify-content-center">{item.amount}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="p-5">
            <h2 className="d-flex justify-content-center">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="d-flex justify-content-center fs-5">Quick answers to questions you may have. Can’t find what you're looking for? Check out our full documentation</p>
            {[
              { toggle: toggleText, isVisible: isVisible, text: "How does the VYB Store work?", answer: "VYB Store is an influencer marketplace. You can monetize your travel itinerary, merchandise, digital content, and fashion brand. And much more yet to come." },
              { toggle: toggleText1, isVisible: isVisible1, text: "How does the VYB Store work?", answer: "VYB Store is an influencer marketplace. You can monetize your travel itinerary, merchandise, digital content, and fashion brand. And much more yet to come." },
              { toggle: toggleText2, isVisible: isVisible2, text: "How does the VYB Store work?", answer: "VYB Store is an influencer marketplace. You can monetize your travel itinerary, merchandise, digital content, and fashion brand. And much more yet to come." },
              { toggle: toggleText3, isVisible: isVisible3, text: "How does the VYB Store work?", answer: "VYB Store is an influencer marketplace. You can monetize your travel itinerary, merchandise, digital content, and fashion brand. And much more yet to come." }
            ].map((item, index) => (
                <div key={index} className="row mt-5 border w-50 border-2 rounded-3 mx-auto">
                <div className="w-100" onClick={item.toggle}>
                  {item.isVisible ? (
                    <p className="mt-3">{item.text}</p>
                  ) : (
                    <p>{item.answer}</p>
                  )}
                </div>
              </div>
              
            ))}
          </div>
        </div>

        <footer className="mt-5 bg-light p-5 text-center">
          <h2>Get in Touch with Us</h2>
          <p>Have questions or need support? Feel free to reach out to us!</p>
          <button type="button" className="btn btn-primary">Contact Us</button>
        </footer>
      </div>
    );
}
