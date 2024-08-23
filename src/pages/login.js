import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HrWithText = ({ text, width = "70%" }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px auto",
        width: width,
      }}
    >
      <hr
        style={{
          flex: 1,
          border: "1px solid black",
          margin: 0,
          backgroundColor: "black",
        }}
      />
      <span
        style={{
          padding: "0 10px",
          background: "white",
          fontSize: "20px",
        }}
      >
        {text}
      </span>
      <hr
        style={{
          flex: 1,
          border: "1px solid black",
          margin: 0,
          backgroundColor: "black",
        }}
      />
    </div>
  );
};

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container mt-4" style={{paddingTop:"100px"}}>
        <div className="row">
          {/* Left side with the image */}
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
            <Image
              src="/images/logsign.svg"
              alt="Signup Image"
              className="img-fluid"
              width={600}
              height={300}
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>

          {/* Right side with the signup form */}
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center mb-5">
            <form className="w-75">
              <h1 className="mb-4 text-center">
                {isSignUp ? "Sign Up" : "Login"}
              </h1>
              {isSignUp ? (
                <>
                  <div className="mb-3 ms-5">
                    <label htmlFor="text" className="form-label fs-5 fw-bold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{
                        height: "50px",
                        width: "100%",
                        maxWidth: "250px",
                        borderRadius: "15px",
                        border: "1px solid black",
                      }}
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3 ms-5">
                    <label htmlFor="email" className="form-label fs-5 fw-bold">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      style={{
                        height: "50px",
                        width: "100%",
                        maxWidth: "250px",
                        borderRadius: "15px",
                        border: "1px solid black",
                      }}
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3 ms-5">
                    <label
                      htmlFor="password"
                      className="form-label fs-5 fw-bold"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      style={{
                        height: "50px",
                        width: "100%",
                        maxWidth: "250px",
                        borderRadius: "15px",
                        border: "1px solid black",
                      }}
                      id="password"
                      placeholder="Enter your password"
                    />
                  </div>

                  <p
                    className="fs-5 fw-bold ms-5"
                    style={{ paddingLeft: "35px" }}
                  >
                    Are You a Creator?
                  </p>
                  <h3 className="ms-5" style={{ paddingLeft: "35px" }}>
                    <span
                      className="ms-3"
                      style={{ border: "1px solid black" }}
                    >
                      Yes
                    </span>
                    <span className="ms-3 bg-success text-light border border-3">
                      NO
                    </span>
                  </h3>

                  <p
                    className="d-flex align-items-center"
                    style={{ paddingLeft: "45px" }}
                  >
                    Already Have An Account?{" "}
                    <Link
                      href="/login"
                      className="nav-link text-success"
                      style={{ paddingLeft: "5px" }}
                    >
                      Login
                    </Link>
                  </p>
                </>
              ) : (
                <>
                  {/* The Logi bar  */}
                  <p
                    className="d-flex align-items-center justify-content-center mb-4 w-75 ms-5"
                    style={{
                      border: "1px solid black",
                      borderRadius: "20px",
                    }}
                  >
                    <Image
                      src="/images/google.png"
                      alt="Google Sign In"
                      className="img-fluid"
                      width={50}
                      height={40}
                    />
                    <span className="fs-5">Sign in/ Google Sign In</span>
                  </p>

                  <HrWithText text="OR" width="80%" />

                  <div className="mb-3 ms-5">
                    <label htmlFor="email" className="form-label fs-5 fw-bold">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      style={{
                        height: "50px",
                        width: "100%",
                        maxWidth: "250px",
                        borderRadius: "15px",
                        border: "1px solid black",
                      }}
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3 ms-5">
                    <label
                      htmlFor="password"
                      className="form-label fs-5 fw-bold"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      style={{
                        height: "50px",
                        width: "100%",
                        maxWidth: "250px",
                        borderRadius: "15px",
                        border: "1px solid black",
                      }}
                      id="password"
                      placeholder="Enter your password"
                    />
                  </div>

                  <p className="ms-5 mb-4 fs-5">Reset password</p>

                  <button
                    type="button"
                    style={{ marginLeft: "30%" }}
                    className="btn btn-outline-success w-25  mb-3"
                  >
                    Login
                  </button>

                  <HrWithText text="Don't Have An Account" width="80%" />
                </>
              )}
              <button
                type="button"
                className="btn btn-secondary  mt-3 btn-lg w-50"
                style={{ marginLeft: "20%" }}
                onClick={toggleForm}
              >
                {isSignUp ? " Login" : "Sign Up"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Custom Media Queries */}
      <style jsx>{`
        @media (max-width: 768px) {
          .col-md-6 {
            margin-bottom: 20px;
          }

          .w-75 {
            width: 100%;
          }

          button[type="button"] {
            margin-left: 0;
            width: 100%;
          }

          form {
            padding: 20px;
          }
        }

        @media (max-width: 576px) {
          h1 {
            font-size: 1.5rem;
          }

          label {
            font-size: 1rem;
          }

          .form-control {
            height: 45px;
            font-size: 1rem;
          }

          .btn-lg {
            font-size: 1rem;
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
  );
}
