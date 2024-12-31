import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-14 pb-10 border-t border-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              HealthFirst
            </h3>
            <p className="text-gray-600">
              Dedicated to your health and wellness, providing exceptional care
              every day.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-600">Email: info@healthfirst.com</p>
              <p className="text-gray-600">Phone: +91 9890619348</p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex justify-center space-x-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/9890619348"
              target="_blank"
              className="text-gray-800 hover:text-green-600 transition-colors duration-300"
              rel="noreferrer"
            >
              <svg
                className="w-8 h-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                  clipRule="evenodd"
                />
                <path
                  fill="currentColor"
                  d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/rupalidtarwade/"
              target="_blank"
              className="text-gray-800 hover:text-pink-600 transition-colors duration-300"
              rel="noreferrer"
            >
              <svg
                className="w-8 h-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/4WCTvCTin4SASNNf/?mibextid=qi2Omg"
              target="_blank"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
              rel="noreferrer"
            >
              <svg
                className="w-8 h-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-600 text-sm">
          © {new Date().getFullYear()} HealthFirst. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
