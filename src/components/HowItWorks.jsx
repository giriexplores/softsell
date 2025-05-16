// src/components/HowItWorks.jsx
import React from "react";
import { motion } from "motion/react";
import {
  CloudArrowUpIcon,
  CurrencyRupeeIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    id: 1,
    title: "Upload License",
    description:
      "Submit your unused software license keys securely via our portal.",
    icon: CloudArrowUpIcon,
  },
  {
    id: 2,
    title: "Get Valuation",
    description:
      "We analyze current market rates and give you a fair, instant quote.",
    icon: CurrencyRupeeIcon,
  },
  {
    id: 3,
    title: "Get Paid",
    description:
      "Receive your payment quickly through your preferred payout method.",
    icon: WalletIcon,
  },
];

const HowItWorks = () => (
  <section className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4">
    <div className="max-w-5xl mx-auto text-center mb-12">
      <h2 className="text-3xl font-bold">How It Works</h2>
      <p className="mt-2 text-lg text-gray-400">
        In just three simple steps, you turn unused licenses into cash.
      </p>
    </div>
    <div className="grid gap-8 md:grid-cols-3">
      {steps.map(({ id, title, description, icon: Icon }) => (
        <motion.div
          className="flex flex-col items-center p-6 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
          key={id}
        >
          <Icon className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
