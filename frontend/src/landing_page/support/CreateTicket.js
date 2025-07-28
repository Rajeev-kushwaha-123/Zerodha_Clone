import React from 'react';
import { Link } from 'react-router-dom';

function CreateTicket() {
    const linkStyle = { textDecoration: "none", color: "blue"};

    return ( 
        <div className="container mt-5 lh-lg">
            <div className="row">
                <h3 className='mb-5'>To create a ticket,select a relevant topic</h3>
                <div className="col-md-4 mb-4">
                    <h3>Account opening</h3>
                    <ul >
                        <li><Link to="/support/account-opening/resident" style={linkStyle}>Resident individual</Link></li>
                        <li><Link to="/support/account-opening/minor" style={linkStyle}>Minor</Link></li>
                        <li><Link to="/support/account-opening/nri" style={linkStyle}>Non Resident Indian (NRI)</Link></li>
                        <li><Link to="/support/account-opening/company" style={linkStyle}>Company, Partnership, HUF and LLP</Link></li>
                        <li><Link to="/support/glossary" style={linkStyle}>Glossary</Link></li>
                    </ul>
                </div>

                <div className="col-md-4 mb-4">
                    <h3>Your Zerodha Account</h3>
                    <ul>
                        <li><Link to="/support/account/profile" style={linkStyle}>Your Profile</Link></li>
                        <li><Link to="/support/account/modification" style={linkStyle}>Account modification</Link></li>
                        <li><Link to="/support/account/cmr-dp" style={linkStyle}>Client Master Report (CMR) and DP</Link></li>
                        <li><Link to="/support/account/nomination" style={linkStyle}>Nomination</Link></li>
                        <li><Link to="/support/account/transfer-conversion" style={linkStyle}>Transfer and conversion of securities</Link></li>
                    </ul>
                </div>

                <div className="col-md-4 mb-4">
                    <h3>Trading & Features</h3>
                    <ul>
                        <li><Link to="/support/trading/ipo" style={linkStyle}>IPO</Link></li>
                        <li><Link to="/support/trading/faqs" style={linkStyle}>Trading FAQs</Link></li>
                        <li><Link to="/support/trading/mtf" style={linkStyle}>Margin Trading Facility (MTF) and Margins</Link></li>
                        <li><Link to="/support/trading/charts-orders" style={linkStyle}>Charts and orders</Link></li>
                        <li><Link to="/support/trading/alerts-nudges" style={linkStyle}>Alerts and Nudges</Link></li>
                        <li><Link to="/support/general" style={linkStyle}>General</Link></li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 mb-4">
                    <h3>Funds</h3>
                    <ul >
                        <li><Link to="/support/funds/add-money" style={linkStyle}>Add money</Link></li>
                        <li><Link to="/support/funds/withdraw-money" style={linkStyle}>Withdraw money</Link></li>
                        <li><Link to="/support/funds/add-bank" style={linkStyle}>Add bank accounts</Link></li>
                        <li><Link to="/support/funds/emandates" style={linkStyle}>eMandates</Link></li>
                        <li><Link to="/support/funds/fo-exclusion" style={linkStyle}>F&O contract exclusions (Aug 29, 2025)</Link></li>
                        <li><Link to="/support/funds/expiry-day-revision" style={linkStyle}>Expiry day revision of derivatives</Link></li>
                        <li><Link to="/support/quick/track-account" style={linkStyle}>Track account opening</Link></li>
                        <li><Link to="/support/quick/track-segment" style={linkStyle}>Track segment activation</Link></li>
                        <li><Link to="/support/quick/intraday-margins" style={linkStyle}>Intraday margins</Link></li>
                        <li><Link to="/support/kite" style={linkStyle}>Kite</Link></li>
                    </ul>
                </div>

                <div className="col-md-4 mb-4">
                    <h3>Console</h3>
                    <ul>
                        <li><Link to="/support/console/portfolio" style={linkStyle}>Portfolio</Link></li>
                        <li><Link to="/support/console/corporate-actions" style={linkStyle}>Corporate actions</Link></li>
                        <li><Link to="/support/console/funds-statement" style={linkStyle}>Funds statement</Link></li>
                        <li><Link to="/support/console/reports" style={linkStyle}>Reports</Link></li>
                        <li><Link to="/support/console/profile" style={linkStyle}>Profile</Link></li>
                        <li><Link to="/support/console/segments" style={linkStyle}>Segments</Link></li>
                        <li><Link to="/support/console/fo-exclusion" style={linkStyle}>F&O contract exclusions (Aug 29, 2025)</Link></li>
                        <li><Link to="/support/console/expiry-revision" style={linkStyle}>Expiry day revision of derivatives</Link></li>
                        <li><Link to="/support/quick/track-account" style={linkStyle}>Track account opening</Link></li>
                        <li><Link to="/support/quick/track-segment" style={linkStyle}>Track segment activation</Link></li>
                        <li><Link to="/support/quick/intraday-margins" style={linkStyle}>Intraday margins</Link></li>
                    </ul>
                </div>

                <div className="col-md-4 mb-4">
                    <h3>Coin</h3>
                    <ul>
                        <li><Link to="/support/coin/mutual-funds" style={linkStyle}>Mutual funds</Link></li>
                        <li><Link to="/support/coin/nps" style={linkStyle}>National Pension Scheme (NPS)</Link></li>
                        <li><Link to="/support/coin/fd" style={linkStyle}>Fixed Deposit (FD)</Link></li>
                        <li><Link to="/support/coin/features" style={linkStyle}>Features on Coin</Link></li>
                        <li><Link to="/support/coin/payments-orders" style={linkStyle}>Payments and Orders</Link></li>
                        <li><Link to="/support/coin/general" style={linkStyle}>General</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;
