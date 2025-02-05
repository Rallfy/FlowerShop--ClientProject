import React from 'react';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <div className='newest-section'>
      {/* Slider Section - Reduced Height */}
        <section id="newest">
          <Slider />
        </section>
      </div>

      {/* Categories Section - Unchanged */}
      <div className="section-wrapper">
        <section id="categories">
          <Categories />
        </section>
      </div>

      {/* Reviews Section - Unchanged */}
      <div className="section-wrapper">
        <section id="reviews">
          <Reviews />
        </section>
      </div>

      {/* Contact Section - Unchanged */}
      <div className="section-wrapper">
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Home;
