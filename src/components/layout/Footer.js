import React from 'react';
import { Helmet } from 'react-helmet';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">
          We love to simplify and automate things. So you have more time to take care of your
          business!
        </p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://docs.websiteshot.app">Documentation</a>
          </li>
          <li>
            <a href="https://github.com/websiteshot/community/discussions">Community</a>
          </li>
          <li>
            <a href="/terms">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://dev.to/urbanisierung">Dev.to</a>
          </li>
          <li>
            <a href="https://twitter.com/urbanisierung">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/websiteshot">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
    <Helmet>
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "4386072c15bf4295bf17358d68964a3d"}'
      />
    </Helmet>
  </footer>
);

export default Footer;
