import React from "react";

function Footer() {
  return (
    <div class="container-fluid netflix-footer ">
      <div class="row mt-4 ">
        <div class="col-md-10 mx-auto">
          <div class="row">
            <div class="col-md-3">
              <ul>
                <li>Audio and Subtitle</li>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div class="col-md-3">
              <ul>
                <li>Audio description</li>
                <li>Investor Relation</li>
                <li>Terms and Conditions</li>
                <li>Legal Notices</li>
              </ul>
            </div>
            <div class="col-md-3">
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
              </ul>
            </div>
            <div class="col-md-3">
              <ul>
                <li>Gift card</li>
                <li>Subscription</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-10 mx-auto">
          <div class="row">
            <div class="col">
              <span class="copy-right ">@ Netflix Copyright</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
