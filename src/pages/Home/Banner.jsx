import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

const Banner = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-6 md:p-10  ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
        className="h-full"
      >
        <SwiperSlide>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 min-h-[60vh]">
            {/* Left Side Text */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <span className="text-lime-600 font-semibold uppercase">
                Featured Book
              </span>

              <h1 className="text-4xl md:text-5xl font-bold">Atomic Habits</h1>

              <p className="text-gray-600 dark:text-gray-300 text-md">
                James Clear's Atomic Habits focuses on the transformative power
                of making tiny, 1% improvements every day. The core premise is
                that habits are the "compound interest of self-improvement";
                while small changes seem insignificant in the moment, they build
                up over months and years to create remarkable results.
              </p>

              <Link
                to="/books"
                className="inline-block bg-lime-500 hover:bg-lime-600 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-md"
              >
                <span className="flex gap-2 items-center">
                  View All Books
                  <ArrowUpRight className="w-5 rounded-full border-2" />
                </span>
              </Link>
            </div>

            
            <div className="flex-1 flex justify-center">
              <img
                src="https://media.karousell.com/media/photos/products/2023/12/16/atomic_habits_book_1702686518_da4171bd_progressive"
                alt="Atomic Habits"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain drop-shadow-2xl rounded-xl"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 min-h-[60vh]">
            
            <div className="flex-1 space-y-6 text-center md:text-left">
              <span className="text-lime-600 font-semibold uppercase">
                Featured Book
              </span>

              <h1 className="text-4xl md:text-5xl font-bold">Flying Ant Day</h1>

              <p className="text-gray-600 dark:text-gray-300 text-md">
                Set on a "Freedom For All Day" in a world where climate failure
                has led to mandatory home drone surveillance. The protagonist,
                Kent, searches for a missing friend and discovers the chilling
                reason why some call this government-mandated party "Flying Ant
                Day"
              </p>

              <Link
                to="/books"
                className="inline-block bg-lime-500 hover:bg-lime-600 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-md"
              >
                <span className="flex gap-2 items-center">
                  View All Books
                  <ArrowUpRight className="w-5 rounded-full border-2" />
                </span>
              </Link>
            </div>

            
            <div className="flex-1 flex justify-center">
              <img
                src="https://cdn1.designhill.com/uploads/personal_designs/thumbs/4a4d8d70ec74dcdab81c3c9dbd7f39ab-d8a8da858b9026685cea24634180442416937809519441.jpg?ver=2.12.85"
                alt="flying ant day"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain drop-shadow-2xl rounded-xl"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 min-h-[60vh]">
           
            <div className="flex-1 space-y-6 text-center md:text-left">
              <span className="text-lime-600 font-semibold uppercase">
                Featured Book
              </span>

              <h1 className="text-4xl md:text-5xl font-bold">
                Harry Potter and the Philosopher's Stone
              </h1>

              <p className="text-gray-600 dark:text-gray-300 text-md">
                Harry Potter and the Philosopher's Stone is a fantasy novel by
                British author J. K. Rowling. It is the first novel in the Harry
                Potter series and was Rowling's debut novel.
              </p>

              <Link
                to="/books"
                className="inline-block bg-lime-500 hover:bg-lime-600 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-md"
              >
                <span className="flex gap-2 items-center">
                  View All Books
                  <ArrowUpRight className="w-5 rounded-full border-2" />
                </span>
              </Link>
            </div>

            
            <div className="flex-1 flex justify-center">
              <img
                src="https://www.theworks.co.uk/dw/image/v2/BDXF_PRD/on/demandware.static/-/Sites-master-catalog-tws-uk/default/dw978b5b8d/9781408855652_2_Z.jpg?sw=400&sh=400&sm=fit"
                alt="harry potter"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain drop-shadow-2xl rounded-xl"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
