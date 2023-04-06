import React from "react";
import "./Feature.css";
import { BsGlobe2 } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
function Footer() {
  return (
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
  );
}

export default Footer;
