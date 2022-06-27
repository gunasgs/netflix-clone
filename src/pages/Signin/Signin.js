import React from "react";
import "./Signin.css";
import { BsGlobe2 } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";

function Signin() {
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
                      <h2 class="fw-bold mb-3 ">Sign In</h2>

                      <div class=" signin-form mt-4 mb-4">
                        <input
                          type="email"
                          id="email"
                          placeholder="Email or Phone number"
                          class=" signin-form "
                          autoComplete="off"
                        />
                      </div>

                      <div class=" signin-form mt-4 mb-4">
                        <input
                          type="password"
                          id="password"
                          autoComplete="off"
                          placeholder="Password"
                          class="signin-form"
                        />
                      </div>

                      <button class="signin-btn mt-2 " type="submit">
                        Sign In
                      </button>
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

                        <a href="" class="text-white-50  ">
                          Need help?
                        </a>
                      </div>
                    </div>

                    <div>
                      <p class="mb-0 text-white-50">
                        New to Netflix ?
                        <Link to="/" class=" mx-2 mb-0 text-white-70">
                          Sign Up now
                        </Link>
                      </p>
                      <p class="mb-0 text-white-50 fs-6">
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
