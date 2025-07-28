import React from 'react';
import {
  FaXTwitter, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaTelegram
} from 'react-icons/fa6';
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-light pt-5 border-top">
      <div className="container">
        <div className="row text-start">
          {/* Logo and Socials */}
          <div className="col-md-3 mb-4">
            <Link to="/">
              <img src="media/images/logo.svg" alt="Zerodha Logo" width="130" />
            </Link>
            <p className="text-muted small mt-3 mb-2">© 2010 - 2025, Zerodha Broking Ltd.<br />All rights reserved.</p>
            <div className="d-flex gap-3 text-dark fs-5">
              <a href="#" aria-label="Twitter"><FaXTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="#" aria-label="Telegram"><FaTelegram /></a>
            </div>
          </div>

          {/* Account */}
          <div className="col-md-2 mb-3">
            <h6 className="fw-bold">Account</h6>
            <ul className="list-unstyled text-muted small">
              <li><Link to="/signup">Open demat account</Link></li>
              <li><Link to="/minor-account">Minor demat account</Link></li>
              <li><Link to="/nri-account">NRI demat account</Link></li>
              <li><Link to="/commodity">Commodity</Link></li>
              <li><Link to="/dematerialisation">Dematerialisation</Link></li>
              <li><Link to="/fund-transfer">Fund transfer</Link></li>
              <li><Link to="/mtf">MTF</Link></li>
              <li><Link to="/referral">Referral program</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2 mb-3">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled text-muted small">
              <li><Link to="/support">Contact us</Link></li>
              <li><Link to="/support-portal">Support portal</Link></li>
              <li><Link to="/complaints">How to file a complaint?</Link></li>
              <li><Link to="/complaint-status">Status of your complaints</Link></li>
              <li><Link to="/bulletin">Bulletin</Link></li>
              <li><Link to="/circular">Circular</Link></li>
              <li><Link to="/blog">Z-Connect blog</Link></li>
              <li><Link to="/downloads">Downloads</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-2 mb-3">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled text-muted small">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/philosophy">Philosophy</Link></li>
              <li><Link to="/press">Press & media</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/csr">Zerodha Cares (CSR)</Link></li>
              <li><a href="#" target="_blank" rel="noreferrer">Zerodha.tech</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">Open source</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-3">
            <h6 className="fw-bold">Quick links</h6>
            <ul className="list-unstyled text-muted small">
              <li><Link to="/ipos">Upcoming IPOs</Link></li>
              <li><Link to="/brokerage">Brokerage charges</Link></li>
              <li><Link to="/holidays">Market holidays</Link></li>
              <li><Link to="/calendar">Economic calendar</Link></li>
              <li><Link to="/calculators">Calculators</Link></li>
              <li><Link to="/markets">Markets</Link></li>
              <li><Link to="/sectors">Sectors</Link></li>
            </ul>
          </div>
        </div>

        {/* Legal & Disclaimers */}
        <div className="row mt-4 legal-disclaimer">
          <div className="col">
            <p className="text-muted small">
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="#">complaints@zerodha.com</a>, for DP related to <a href="#">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
            </p>
            <p className="text-muted small">
              For complaints: <a href="#">complaints@zerodha.com</a>, DP: <a href="#">dp@zerodha.com</a>.<br />
              Please read the <Link to="/risk-disclosure">Risk Disclosure Document</Link> as prescribed by SEBI.
            </p>
            <p className="text-muted small">
              Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p className="text-muted small">
              "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, <Link to="/report-scam">please create a ticket here.</Link>
            </p>
          </div>
        </div>

        {/* Legal Footer Links */}
        <div className="text-muted small mt-3 text-center legal-links pb-4">
          <Link to="/nse" className="mx-2">NSE</Link>
          <Link to="/bse" className="mx-2">BSE</Link>
          <Link to="/mcx" className="mx-2">MCX</Link>
          <Link to="/terms" className="mx-2">Terms & conditions</Link>
          <Link to="/policies" className="mx-2">Policies & procedures</Link>
          <Link to="/privacy" className="mx-2">Privacy policy</Link>
          <Link to="/disclosure" className="mx-2">Disclosure</Link>
          <Link to="/investor-attention" className="mx-2">For investor's attention</Link>
          <Link to="/charter" className="mx-2">Investor charter</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
