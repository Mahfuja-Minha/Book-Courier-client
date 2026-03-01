import { ArrowRight } from "lucide-react";
import React from "react";

const FAQ = () => {
  return (
    <div className="w-11/12 md:w-9/12 mx-auto mt-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold">
          Frequently Asked <span className="text-lime-600">Questions</span>
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-xl mx-auto">
          Find answers to the most common questions about our book delivery
          service.
        </p>
      </div>

      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq" defaultChecked />
          <div className="collapse-title font-semibold ">
            How long does delivery take?
          </div>
          <div className="collapse-content text-sm flex items-center gap-1">
            <ArrowRight className="w-4 text-lime-600" /> Delivery usually takes 2–3 days in
            major cities and 3–5 days in other districts.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq" />
          <div className="collapse-title font-semibold">
            Do you deliver across all districts?
          </div>
          <div className="collapse-content text-sm flex items-center gap-1">
            <ArrowRight className="w-4 text-lime-600" /> Yes, we provide delivery service in
            all 64 districts of Bangladesh.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq" />
          <div className="collapse-title font-semibold">
            What payment methods are available?
          </div>
          <div className="collapse-content text-sm flex items-center gap-1">
            <ArrowRight className="w-4 text-lime-600" /> We support Cash on Delivery, bKash,
            Nagad and online payments.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq" />
          <div className="collapse-title font-semibold">
            Can I cancel my order?
          </div>
          <div className="collapse-content text-sm flex items-center gap-1">
            <ArrowRight className="w-4 text-lime-600" /> Yes, you can cancel your order before
            the parcel is shipped.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq" />
          <div className="collapse-title font-semibold">
            Is there any delivery charge?
          </div>
          <div className="collapse-content text-sm flex items-center gap-1">
            <ArrowRight className="w-4 text-lime-600" /> Delivery charge depends on distance
            and delivery location.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
