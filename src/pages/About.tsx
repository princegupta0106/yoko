
import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Excellence', value: '25+' },
    { label: 'Happy Customers', value: '5,000+' },
    { label: 'Luxury Brands', value: '50+' },
    { label: 'Regions Served', value: '15+' },
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Yoko stands for excellence — with top-tier quality, trend-focused designs, and uncompromised standards in every product we deliver.'
    },
    {
      icon: Users,
      title: 'Trust',
      description: 'Built on decades of customer satisfaction, we pride ourselves on transparent business practices and authentic products.'
    },
    {
      icon: Globe,
      title: 'Heritage',
      description: 'Rooted in passion, built with purpose — Yoko’s heritage lies in blending timeless style with modern innovation.'
    },
    {
      icon: Heart,
      title: 'Service',
      description: 'From purchase to after-sales support, we provide personalized service that exceeds expectations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy-deep text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
             <span className="text-luxury-gold">What YOKO Means
</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            YOKO isn’t just a brand — it’s a blend of two passionate minds: Yash and Kush.
The name stands for unity, creativity, and a shared dream to bring trendsetting style and smart living to everyone. From our initials to your inbox, YOKO reflects our personal touch, trust, and taste.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-deep mb-6 ">A Legacy of Time</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Yoko started with a simple idea — to redefine lifestyle shopping. From late-night brainstorming sessions between Yash and Kush to our first few orders, we’ve built more than a brand — we’ve built trust.

                </p>
                <p>
                  Over the years, our commitment to quality, affordability, and trend has turned Yoko into a go-to name for gadgets, fashion, and timeless watches. What began as a small venture has become a growing legacy — shaped by passion, powered by people.


                </p>
                <p>
                  At Yoko, our story continues — with every product, every customer, and every click.

                </p>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden ">
              <img 
                src="/favicon.png" 
                alt="Our workshop" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-deep mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do, from curating our collection to serving our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <value.icon className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-semibold text-navy-deep mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-deep mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our passionate team of horologists and customer service specialists are here to help you find the perfect timepiece.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Yash Sharma', role: 'Founder & Master Horologist', image: '/ghibli1.png' },
              { name: 'Kush Goyal', role: 'Head of Customer Experience', image: '/ghibli2.png' },
              // { name: 'Amit Patel', role: 'Technical Specialist', image: '/placeholder.svg' }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-navy-deep">{member.name}</h3>
                <p className="text-luxury-gold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
