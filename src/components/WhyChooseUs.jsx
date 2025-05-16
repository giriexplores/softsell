// src/components/WhyChooseUs.jsx
import React from "react";
import { motion } from "motion/react";
import {
  ChartBarIcon,
  ShieldCheckIcon,
  PhoneIcon ,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    id: 1,
    title: "Best Market Rates",
    description:
      "We continually monitor the secondary market to offer you top dollar.",
    icon: ChartBarIcon,
  },
  {
    id: 2,
    title: "Secure Transactions",
    description:
      "Your license keys and payments are handled with bank-level encryption.",
    icon: ShieldCheckIcon,
  },
  {
    id: 3,
    title: "24/7 Support",
    description:
      "Our expert team is available around the clock to answer your questions.",
    icon: PhoneIcon ,
  },
  {
    id: 4,
    title: "Fast Payouts",
    description: "Get your funds in as little as 24 hours after approval.",
    icon: CreditCardIcon,
  },
];

const WhyChooseUs = () => (
  <section className="py-20 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4">
    <div className="max-w-5xl mx-auto text-center mb-12">
      <h2 className="text-3xl font-bold">Why Choose Us</h2>
      <p className="mt-2 text-lg text-gray-400">
        We make selling your unused software licenses easy, safe, and
        profitable.
      </p>
    </div>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
      {features.map(({ id, title, description, icon: Icon }) => (
        <motion.div
          key={id}
          className="flex flex-col items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
          
        >
          <Icon className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-center text-gray-400">{description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
