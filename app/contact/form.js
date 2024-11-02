"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();
  const [submitStatus, setSubmitStatus] = useState("");
  const [mathCaptcha, setMathCaptcha] = useState({
    num1: 0,
    num2: 0,
    answer: "",
  });

  useEffect(() => {
    generateMathProblem();
  }, []);

  const generateMathProblem = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setMathCaptcha({ num1, num2, answer: "" });
  };

  const onSubmit = async (data) => {
    setSubmitStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitStatus("Message sent successfully!");
      reset();
      generateMathProblem();
    } catch (error) {
      setSubmitStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Your Name
          </label>
          <input
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          />
          {errors.name && (
            <p className="mt-1 text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Your Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          />
          {errors.email && (
            <p className="mt-1 text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Subject
        </label>
        <input
          {...register("subject", {
            required: "Subject is required",
            minLength: {
              value: 3,
              message: "Subject must be at least 3 characters",
            },
          })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
        />
        {errors.subject && (
          <p className="mt-1 text-red-500">{errors.subject.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Message
        </label>
        <textarea
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
          rows="5"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-red-500">{errors.message.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Please solve this captcha: {mathCaptcha.num1} + {mathCaptcha.num2} = ?
        </label>
        <input
          type="number"
          {...register("captcha", {
            required: "Please solve the captcha",
            validate: (value) =>
              parseInt(value) === mathCaptcha.num1 + mathCaptcha.num2 ||
              "Incorrect answer. Please try again.",
          })}
          value={mathCaptcha.answer}
          onChange={(e) => {
            setMathCaptcha({ ...mathCaptcha, answer: e.target.value });
            clearErrors("captcha");
          }}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
        />
        {errors.captcha && (
          <p className="mt-1 text-red-500">{errors.captcha.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 disabled:bg-gray-400"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {submitStatus && (
        <p
          className={`mt-4 text-center ${
            submitStatus.includes("success") ? "text-green-600" : "text-red-500"
          }`}
        >
          {submitStatus}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
