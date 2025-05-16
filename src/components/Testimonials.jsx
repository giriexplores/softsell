// src/components/Testimonials.jsx
import React from "react";
import { motion } from "motion/react";

const reviews = [
  {
    id: 1,
    quote:
      "SoftSell made it unbelievably easy to turn our surplus licenses into cash. Fast and secure!",
    name: "Jane Doe",
    role: "CFO",
    company: "Acme Inc.",
  },
  {
    id: 2,
    quote:
      "Their valuation was spot-on and the payout arrived within 24 hours. Highly recommend.",
    name: "John Smith",
    role: "IT Manager",
    company: "Globex Corp.",
  },
];

const Testimonials = () => (
  <section className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4">
    <div className="max-w-5xl mx-auto text-center mb-12">
      <h2 className="text-3xl font-bold">What Our Customers Say</h2>
    </div>
    <div className="grid gap-8 md:grid-cols-2">
      {reviews.map(({ id, quote, name, role, company }) => (
        <motion.div
          className="flex flex-col items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
          key={id}
        >
          <p className="italic mb-4">“{quote}”</p>
          <p className="font-semibold text-gray-900 dark:text-gray-100">
            {name}
          </p>
          <p className="text-sm text-gray-400">
            {role}, {company}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Testimonials;
