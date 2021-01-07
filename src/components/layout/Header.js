import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        Websiteshot
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Benefits
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Save Time
        </AnchorLink>
        {/* <AnchorLink className="px-4" href="#testimonials">
          Testimonials
        </AnchorLink> */}
      </div>
      <div className="hidden md:block">
        <a href="https://console.websiteshot.app" target="_blank" rel="noreferrer">
          <Button className="text-sm">Start Now</Button>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
