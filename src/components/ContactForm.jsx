// src/components/ContactForm.jsx
import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-gray-400 mt-2">
          Have questions or ready to sell? Fill out the form below.
        </p>
      </div>

      {isSubmitSuccessful ? (
        <div className="max-w-3xl mx-auto p-6 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
          Thank you! We’ll be in touch soon.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-3xl mx-auto grid gap-6"
        >
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              {...register("name", { required: true })}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded px-3 py-2 text-gray-900 dark:text-gray-100"
              placeholder="Your Name"
            />
            {errors.name && (
              <span className="text-red-600 text-sm">Name is required</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded px-3 py-2 text-gray-900 dark:text-gray-100"
              placeholder="you@example.com"
            />
            {errors.email && (
              <span className="text-red-600 text-sm">
                A valid email is required
              </span>
            )}
          </div>

          {/* Company */}
          <div>
            <label className="block mb-1 font-medium">Company</label>
            <input
              {...register("company", { required: true })}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded px-3 py-2 text-gray-900 dark:text-gray-100"
              placeholder="Your Company"
            />
            {errors.company && (
              <span className="text-red-600 text-sm">Company is required</span>
            )}
          </div>

          {/* License Type */}
          <div>
            <label className="block mb-1 font-medium">License Type</label>
            <select
              {...register("licenseType", { required: true })}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded px-3 py-2 text-gray-900 dark:text-gray-100"
            >
              <option value="">Select a type</option>
              <option value="Windows">Windows</option>
              <option value="Microsoft Office">Microsoft Office</option>
              <option value="Adobe Creative Suite">Adobe Creative Suite</option>
              <option value="Other">Other</option>
            </select>
            {errors.licenseType && (
              <span className="text-red-600 text-sm">Please select a type</span>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              {...register("message")}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded px-3 py-2 text-gray-900 dark:text-gray-100"
              rows={4}
              placeholder="Tell us more..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition active:scale-[0.99]`}
          >
            Submit
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
