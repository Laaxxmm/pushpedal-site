"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Sub-Component: ContactForm
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic (e.g., send to server)
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <motion.div
      className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-6 md:p-8 lg:p-10"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="text-2xl font-lexend text-white mb-4">Send us a message</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-black border-border text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-black border-border text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-black border-border text-white"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-accent text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
};

// Sub-Component: Address
const Address = () => {
  return (
    <motion.div
      className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-6 md:p-8 lg:p-10"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h3 className="text-2xl font-lexend text-white mb-4">Our Address</h3>
      <div className="flex items-center mb-2">
        <MapPin className="text-primary mr-2" />
        <p className="text-white">123 Cycling Lane, Bangalore, India</p>
      </div>
    </motion.div>
  );
};

// Sub-Component: PhoneEmail
const PhoneEmail = () => {
  return (
    <motion.div
      className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-6 md:p-8 lg:p-10"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h3 className="text-2xl font-lexend text-white mb-4">Contact Us</h3>
      <div className="flex items-center mb-2">
        <Phone className="text-primary mr-2" />
        <p className="text-white">+91 9876543210</p>
      </div>
      <div className="flex items-center">
        <Mail className="text-primary mr-2" />
        <p className="text-white">info@pushpedal.com</p>
      </div>
    </motion.div>
  );
};

// Sub-Component: SocialMedia
const SocialMedia = () => {
  return (
    <motion.div
      className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-6 md:p-8 lg:p-10"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <h3 className="text-2xl font-lexend text-white mb-4">Follow Us</h3>
      <div className="flex items-center space-x-4">
        <Link href="#" className="text-primary hover:text-accent transition-colors duration-300">
          <Facebook size={24} />
        </Link>
        <Link href="#" className="text-primary hover:text-accent transition-colors duration-300">
          <Instagram size={24} />
        </Link>
        <Link href="#" className="text-primary hover:text-accent transition-colors duration-300">
          <Twitter size={24} />
        </Link>
        <Link href="#" className="text-primary hover:text-accent transition-colors duration-300">
          <Linkedin size={24} />
        </Link>
      </div>
    </motion.div>
  );
};

// Sub-Component: Map
const Map = () => {
  return (
    <motion.div
      className="rounded-2xl shadow-2xl shadow-black/10 overflow-hidden"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 1.0 }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.490424780533!2d77.63093927475178!3d12.943028887367974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15a4ef891c39%3A0x99c8a04c7353c161!2sNational%20Games%20Village!5e0!3m2!1sen!2sin!4v1701940424792!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false} // Corrected attribute name
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </motion.div>
  );
};

const Page = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="bg-black text-white min-h-screen overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* CSS Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[length:60px_60px] z-0" />

      <div className="relative z-20">
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-[clamp(3rem, 8vw, 6rem)] font-lexend font-bold mb-8 text-center"
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-[clamp(1rem, 2vw, 1.25rem)] text-white/80 text-center mb-12"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              We'd love to hear from you! Get in touch with us for any inquiries or registration.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ContactForm />
              <Address />
              <PhoneEmail />
              <SocialMedia />
            </div>

            <div className="mt-12">
              <Map />
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Page;