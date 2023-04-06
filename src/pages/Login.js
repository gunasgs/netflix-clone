import React, { useState } from "react";
import { BsGlobe2 } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import logo from "../assets/logonet.png";

function Login() {
  const [click, setclick] = useState(false);
  let handleclick = () => {
    setclick(!click);
  };
  let navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        let loginData = await axios.post(
          "https://zany-pear-clownfish-slip.cyclic.app/signin",
          values
        );
        window.localStorage.setItem("myapptoken", loginData.data.token);
        navigate("/netflix");
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    },
  });
  return (
    <>
      <header className="showcase">
        <div className="showcase-top">
          <img src={logo} alt="Netflix Logo" />

          <button className="head-btn2 ">
            <BsGlobe2 className="btn-icon2" />
            English
            <AiFillCaretDown />
          </button>
          <button className="head-btn3  ">
            <Link to="signin">Sign Up</Link>
          </button>
        </div>
        <div className="showcase-content">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {!click ? (
            <div className="inputt">
              <input
                className="inp"
                type="email"
                placeholder="Email Address"
                onClick={handleclick}
              />
              <button className="registerButtonn">
                Get Started <IoIosArrowForward />
              </button>
            </div>
          ) : (
            <form onSubmit={formik.handleSubmit}>
              <div className="input-2">
                <input
                  className="inp-2 form-control form-control-lg"
                  type={"email"}
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  placeholder="Email"
                />
                <input
                  className="inp-2 form-control form-control-lg"
                  type={"password"}
                  name="password"
                  id="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  placeholder="Password"
                />
                <input
                  type={"submit"}
                  className="registerButtonn-2"
                  value={"Start"}
                />
              </div>
            </form>
          )}
          <div className="text-white mt-4">
            <h5 className="res-h5">
              Email : user@gmail.com
              <span className="ms-5 res-span">Password : user</span>
            </h5>
          </div>
        </div>
      </header>
      <section className="style-cards">
        <div className="card-1">
          <div className="desc-1">
            <h1>Enjoy on your TV.</h1>
            <h3>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h3>
          </div>

          <video className="video-1" autoPlay={true} playsInline muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="card-2">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="Netflix Mobile"
          />
          <div className="desc-2">
            <h1>Download your shows to watch offline.</h1>
            <h3>
              Save your favourites easily and always have something to watch.
            </h3>
          </div>
        </div>
        <div className="card-3 ">
          <div className="desc-3 ">
            <h1>Watch everywhere.</h1>
            <h3>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h3>
          </div>

          <video className="video-2 " autoPlay={true} playsInline muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="card-0">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png"
            alt="Netflix Mobile"
          />
          <div className="desc-0">
            <h1>Create profiles for children.</h1>
            <h3>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </h3>
          </div>
        </div>
      </section>
      <section className="lastsec">
        <div className="faq">
          <h1>Frequently Asked Questions</h1>
          <ul className="questions">
            <li>
              What is Netflix?<span className="faf-plus">+</span>
            </li>
            <li>
              How much does Netflix cost?<span className="faf-plus">+</span>
            </li>
            <li>
              Where can I watch?<span className="faf-plus">+</span>
            </li>
            <li>
              How do I cancel?<span className="faf-plus">+</span>
            </li>
            <li>
              What can I watch on Netflix?<span className="faf-plus">+</span>
            </li>
            <li>
              Is Netflix good for kids?<span className="faf-plus">+</span>
            </li>
          </ul>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {!click ? (
            <div className="input">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onClick={handleclick}
              />
              <button className="btn-start">
                Get Started
                <IoIosArrowForward />
              </button>
            </div>
          ) : (
            <div className="input">
              <input
                type="email"
                placeholder="Email Address"
                onClick={handleclick}
              />
              <input className="inp" type="password" placeholder="password" />
              <button className="registerButtonn">Start</button>
            </div>
          )}
        </div>
      </section>
      <div className="footer-container">
        <footer className="footer">
          <div className="footer-1">
            <p>
              Questions? Call{" "}
              <span className="footer-no">000-800-040-1843</span>
            </p>
            <div className="footer-cols">
              <ul>
                <li>
                  <a href=" ">FAQ</a>
                </li>
                <li>
                  <a href=" ">Investor Relations</a>
                </li>
                <li>
                  <a href=" ">Privacy</a>
                </li>
                <li>
                  <a href=" ">Speed Test</a>
                </li>
                <li>
                  <button className="footer-btn">
                    <BsGlobe2 className="btn-icon" />
                    English <AiFillCaretDown />
                  </button>
                </li>
                <li className="brand">
                  <div className="copyright">
                    Designed by &copy;
                    <a
                      href="https://gunaseelan.netlify.com"
                      target="_blank"
                      rel="noreferrer"
                      className="ms-2"
                    >
                      Gunasgs
                    </a>
                  </div>
                </li>
              </ul>
              <ul>
                <li>
                  <a href=" ">Help Centre</a>
                </li>
                <li>
                  <a href=" ">Jobs</a>
                </li>
                <li>
                  <a href=" ">Cookie Preferences</a>
                </li>
                <li>
                  <a href=" ">Legal Notices</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href=" ">Account</a>
                </li>
                <li>
                  <a href=" ">Ways to Watch</a>
                </li>
                <li>
                  <a href=" ">Corporate Information</a>
                </li>
                <li>
                  <a href=" ">Only on Netflix</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href=" ">Media Centre</a>
                </li>
                <li>
                  <a href=" ">Terms of Use</a>
                </li>
                <li>
                  <a href=" ">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Login;
