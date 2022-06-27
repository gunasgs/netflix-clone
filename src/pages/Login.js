import React from "react";
import { BsGlobe2 } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <header className="showcase">
        <div className="showcase-top">
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Netflix Logo"
          />

          <button className="head-btn2 ">
            <BsGlobe2 className="btn-icon2" />
            English
            <AiFillCaretDown />
          </button>
          <button className="btn btn-rounded">
            <Link to="signin">Sign In</Link>
          </button>
        </div>
        <div className="showcase-content">
          <Link to="/netflix">Home</Link>
          <h1>Unlimited movies, TV shows and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="inputt">
            <input className="inp" type="email" placeholder="Email Address" />
            <button className="registerButtonn">
              Get Started <IoIosArrowForward />
            </button>
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
            <li>What is Netflix?</li>
            <li>How much does Netflix cost?</li>
            <li>Where can I watch?</li>
            <li>How do I cancel?</li>
            <li>What can I watch on Netflix?</li>
            <li>Is Netflix good for kids?</li>
          </ul>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="input">
            <input type="email" name="email" placeholder="Email Address" />
            <button className="btn-start">
              Get Started
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </section>
      <div className="footer-container">
        <footer className="footer">
          <div className="footer-1">
            <p>Questions? Call 000-800-040-1843</p>
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
                  <a href=" ">Netflix India</a>
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
