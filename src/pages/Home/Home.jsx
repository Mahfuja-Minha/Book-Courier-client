import React from 'react';
import Banner from './Banner';
import WhyChoose from './WhyChoose';
import Coverage from './Coverage';
import FeaturedBooks from './FeaturedBooks';

const Home = () => {
    return (
        
        <div className='bg-slate-100 dark:bg-slate-900 p-3 md:p-15'>
            <Banner/>
            {/* <Coverage/> */}
            <FeaturedBooks/>
            <WhyChoose/>
        </div>
    );
};

export default Home;