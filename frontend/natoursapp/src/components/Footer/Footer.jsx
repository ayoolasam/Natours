import React from "react";
import logos from "../../img/logo-green-2x.png";
import './footer.scss'

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="footer_logo-box">
          <img class="footer_logo" src={logos} alt="logo" />
        </div>
        <div className="rowsss">
          <div className="footer_navigation">
            <ul className="footer_list">
              <li className="footer-item" i>
                <a href="# " className="footer_link">
                  Company
                </a>
              </li>
              <li className="footer-item" i>
                <a href="# " className="footer_link">
                  Contact Us
                </a>
              </li>
              <li className="footer-item" i>
                <a href="# " className="footer_link">
                  Careers
                </a>
              </li>
              <li className="footer-item" i>
                <a href="# " className="footer_link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer-item" i>
                <a href="# " className="footer_link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-second">
            <p className="footer_copyright">
              Built by{" "}
              <a className="footer_link" href="#">
                Ayoola Obayomi
              </a>{" "}
              for his online course Copyright &copy; by Ayoola Samuel
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
