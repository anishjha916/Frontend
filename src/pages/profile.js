import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="container-fluid">
      <Navbar />

      <div className="container mb-3" style={{ paddingTop: "100px" }}>
        <div className="row mt-5 gap gap-4">
          <div
            className="col-lg-5 col-md-6 col-12 p-3 d-flex flex-column justify-content-center align-items-center"
            style={{
              borderRadius: "20px",
              border: "2px solid #000435",
            }}
          >
            {/* First column content */}
            <Image
              src="/images/user2.jpg"
              alt="Profile Image"
              className="img-fluid"
              width={100}
              height={80}
              style={{ borderRadius: "40px" }}
            />
            <p className="mt-2 text-center">
              <span>
                <Image
                  src="/images/content.png"
                  alt="Content Image"
                  className="img-fluid"
                  width={20}
                  height={20}
                />
              </span>{" "}
              Change profile picture
            </p>
            <h2 className="text-center">Samira Hadiid</h2>
            <div className="d-flex flex-column gap-3 mt-3">
              <button
                type="button"
                className="btn btn-outline-dark w-100"
                style={{ maxWidth: "180px" }}
              >
                Profile
              </button>
              <button type="button" className="btn btn-outline-dark w-100">
                My Story
              </button>
              <button type="button" className="btn btn-outline-dark w-100">
                Earning
              </button>
              <button type="button" className="btn btn-dark w-100">
                Address
              </button>
              <button type="button" className="btn btn-dark w-100">
                Logout
              </button>
            </div>
          </div>

          <div
            className="col-lg-6 col-md-6 col-12 p-3"
            style={{
              borderRadius: "20px",
              border: "2px solid #000435",
            }}
          >
            {/* Second column content */}
            <h4>Address</h4>
            <h5>Address Line 1</h5>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Address"
              />
            </div>
            <h5>Address Line 2</h5>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Address"
              />
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <h5>Zip Code</h5>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter zip code"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <h5>City</h5>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter city"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <h5>State</h5>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter state"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <h5>Country</h5>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter country"
                  />
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-dark btn-lg w-100 w-md-25">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
