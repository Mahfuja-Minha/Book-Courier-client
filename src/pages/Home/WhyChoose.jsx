import { Truck, ShieldCheck, BookOpen, Headphones } from "lucide-react";

const WhyChoose = () => {
  return (
    <section className="w-11/12 md:w-9/12 mx-auto mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why Choose <span className="text-lime-600">BookCourier</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          We make book buying simple, fast and enjoyable. Discover the best
          reading experience with trusted service and quality books.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md  hover:scale-105 transition ease-in-out  hover:shadow-xl  duration-300 text-center space-y-4">
          <div className="flex justify-center">
            <Truck className="w-10 h-10 text-lime-500" />
          </div>
          <h3 className="text-xl font-semibold">Fast Delivery</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Get your favorite books delivered quickly and safely to your door.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md  hover:scale-105 transition ease-in-out  hover:shadow-xl  duration-300 text-center space-y-4">
          <div className="flex justify-center">
            <ShieldCheck className="w-10 h-10 text-lime-500" />
          </div>
          <h3 className="text-xl font-semibold">Secure Payments</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Your transactions are encrypted and fully protected.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md  hover:scale-105 transition ease-in-out  hover:shadow-xl  duration-300 text-center space-y-4">
          <div className="flex justify-center">
            <BookOpen className="w-10 h-10 text-lime-500" />
          </div>
          <h3 className="text-xl font-semibold">Wide Collection</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Explore thousands of books across different genres and categories.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md  hover:scale-105 transition ease-in-out  hover:shadow-xl  duration-300 text-center space-y-4">
          <div className="flex justify-center">
            <Headphones className="w-10 h-10 text-lime-500" />
          </div>
          <h3 className="text-xl font-semibold">24/7 Support</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Our support team is always ready to assist you anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
