import React from "react";
import "./Signin.css";
import { BsGlobe2 } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";

import axios from "axios";
import { useFormik } from "formik";

import { Link } from "react-router-dom";

function Signin() {
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://netflix-app-clone-1.herokuapp.com/signup",
          values
        );

        window.location.reload();
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    },
  });
  return (
    <>
      <header className="signin-container">
        <div className="signin-top">
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Netflix Logo"
          />
        </div>

        <section class="vh-100 ">
          <div class=" signin-container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-8 col-lg-4 col-xl-4">
                <div class="signin-card  text-white">
                  <div class=" p-5 ">
                    <div class="mb-md-5 mt-md-4 ">
                      <h2 class="fw-bold mb-3 ">Sign Up</h2>
                      <form onSubmit={formik.handleSubmit}>
                        <div class=" signin-form mt-4 mb-4">
                          <input
                            placeholder="Email "
                            class=" signin-form signup-input form-control"
                            autoComplete="off"
                            type="email"
                            id="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                          />
                        </div>

                        <div class=" signin-form mt-4 mb-4">
                          <input
                            type="password"
                            id="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            autoComplete="off"
                            placeholder="Password"
                            class="signin-form form-control"
                          />
                        </div>

                        <input
                          class="signin-btn mt-2 "
                          value={"Sign Up"}
                          type="submit"
                        />

                        <div class="d-flex justify-content-between align-items-center mb-4 mt-2">
                          <div class="form-check  ">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="form1Example3"
                            />
                            <label
                              class="form-check-label  text-white-50"
                              for="form1Example3"
                            >
                              Remember me
                            </label>
                          </div>

                          <a href="#home" class="text-white-50">
                            Need help?
                          </a>
                        </div>
                      </form>
                    </div>

                    <div>
                      <p class="mb-0 text-white-50">
                        New to Netflix ?
                        <Link to="/" class=" mx-2 mb-0 text-white-70">
                          Sign In now
                        </Link>
                      </p>
                      <p class="mb-0 text-white-50  signin-p">
                        This page is protected by Google reCAPTCHA to <br />
                        ensure you're not a bot
                        <span className=" ms-1 signin-learn text-primary">
                          Learn more.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="footer-1">
            <p>
              Questions? Call
              <span className="signin-learn">000-800-040-1843</span>
            </p>
            <div className="footer-cols">
              <ul>
                <li>
                  <a href=" ">FAQ</a>
                </li>
                <li>
                  <a href=" ">Cookie Preferences</a>
                </li>

                <li>
                  <button className="footer-btn">
                    <BsGlobe2 className="btn-icon" />
                    English <AiFillCaretDown />
                  </button>
                </li>
              </ul>
              <ul>
                <li>
                  <a href=" ">Help Centre</a>
                </li>

                <li>
                  <a href=" ">Corporate Information</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href=" ">Terms of Use</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href=" ">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </header>
    </>
  );
}

export default Signin;
