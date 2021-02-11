import React from 'react';

const handleSubmit = () => {
  window.open(
    `https://tinyletter.com/websiteshot`,
    'popupwindow',
    'scrollbars=yes,width=800,height=600'
  );
  return true;
};

const Newsletter = () => {
  return (
    <form
      action="https://tinyletter.com/websiteshot"
      method="post"
      target="popupwindow"
      onSubmit={handleSubmit}
      className="lg:w-1/2 mt-8 space-y-4"
    >
      <div className="rounded-md shadow-sm -space-y-px">
        <input
          aria-label="Email address"
          placeholder="Enter your email..."
          name="email"
          type="text"
          required
          id="tlemail"
          className="mb-4 appearance-none rounded-none w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        />
        <input type="hidden" value="1" name="embed" />
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};
export default Newsletter;
