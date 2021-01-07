import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
// import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Head from '../components/layout/Head';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import Api from '../svg/Api';
// import SvgCharts from '../svg/SvgCharts';
import Easy from '../svg/Easy';
import Focus from '../svg/Focus';
// import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';

export default () => (
  <Layout>
    <Head />
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Screenshots
            <br /> like a Pro
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Never spend time again to create awesome screenshots of your websites
          </p>
          <p className="mt-8 md:mt-12">
            <a href="https://console.websiteshot.app" target="_blank" rel="noreferrer">
              <Button size="lg">Get Started</Button>
            </a>
          </p>
          <p className="mt-4 text-gray-600">
            See some{' '}
            <a
              href="https://docs.websiteshot.app/docs/guides/quickstart"
              target="_blank"
              rel="noreferrer"
            >
              Use Cases
            </a>
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Screenshot Collections</p>
              <p className="mt-4">
                Take screenshots of several URLs at once. For example, you can use this to
                automatically update all screenshots of your documentation.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Add Filters</p>
              <p className="mt-4">
                There are downstream filters that come with the web. You can add shadows, scaling,
                cropping and more directly with Websiteshot.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Guarded Webpages</p>
              <p className="mt-4">
                If you want to take screenshots of an app that has a login with username and
                password, you can easily generate screenshots of guarded views!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Easy to Use</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Websiteshot was designed to be easily integrated into your workflows. You can schedule
            your first Screenshot Jobs in just minutes.
          </p>
        </div>
      }
      secondarySlot={<Easy />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Focus on What Matters</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Create your API Key and start to save time by never manually creating Screenshots
            anymore.
          </p>
        </div>
      }
      secondarySlot={<Focus />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">API First</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Of course there is a Console where you can manage your Screenshots. But the magic starts
            by integrating Websiteshot into your workflows. Use the API to create or schedule
            Screenshot Jobs and put the results where ever you want.
          </p>
        </div>
      }
      secondarySlot={<Api />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Save Time</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="> 90%" secondaryText="Less Time to update Screenshots" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="100%" secondaryText="Integrates with your Workflows" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox
              primaryText="5 hours"
              secondaryText="Saved for 30 Screenshots and 15 Deloyments"
            />
          </div>
        </div>
      </div>
    </section>
    {/* <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section> */}
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to save time?</h3>
      <p className="mt-8 text-xl font-light">
        Never spend time again to create awesome screenshots of your websites
      </p>
      <p className="mt-8">
        <a href="https://console.websiteshot.app" target="_blank" rel="noreferrer">
          <Button size="xl">Get Started Now</Button>
        </a>
      </p>
    </section>
  </Layout>
);
