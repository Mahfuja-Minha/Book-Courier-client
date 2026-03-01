import React from "react";
import Banner from "./Banner";
import WhyChoose from "./WhyChoose";
import FeaturedBooks from "./FeaturedBooks";
import HomeCoverage from "./HomeCoverage";
import Reviews from "./Reviews";
import FAQ from "./FAQ";

const reviewsPromise = fetch("reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 p-3 md:p-15">
      <Banner />
      <FeaturedBooks />
      <WhyChoose />
      <HomeCoverage />
      <Reviews reviewsPromise={reviewsPromise} />
      <FAQ />
    </div>
  );
};

export default Home;
