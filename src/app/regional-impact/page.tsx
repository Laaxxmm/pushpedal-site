"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Image as NextImage } from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Heart,
  TrendingUp,
  CalendarDays,
  MapPin,
  Lightbulb,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const CommunityEngagement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div variants={item} className="p-6 bg-black border border-Border rounded-2xl shadow-2xl shadow-black/10">
            <h3 className="text-2xl font-lexend text-white mb-4">Community Events</h3>
            <p className="text-white/80 font-inter">
              Regular cycling events for all ages and skill levels, fostering a sense of community and promoting healthy lifestyles.
            </p>
          </motion.div>

          <motion.div variants={item} className="p-6 bg-black border border-Border rounded-2xl shadow-2xl shadow-black/10">
            <h3 className="text-2xl font-lexend text-white mb-4">Skills Workshops</h3>
            <p className="text-white/80 font-inter">
              Workshops focused on cycling skills, safety, and maintenance, empowering individuals to confidently navigate the roads.
            </p>
          </motion.div>

          <motion.div variants={item} className="p-6 bg-black border border-Border rounded-2xl shadow-2xl shadow-black/10">
            <h3 className="text-2xl font-lexend text-white mb-4">Charity Rides</h3>
            <p className="text-white/80 font-inter">
              Organized rides to raise funds for local charities, combining the joy of cycling with the opportunity to give back to the community.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Partnerships = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
          <motion.div variants={item} className="p-6 bg-muted border border-Border rounded-2xl shadow-2xl shadow-black/10">
            <h3 className="text-2xl font-lexend text-white mb-4">Local Businesses</h3>
            <p className="text-white/80 font-inter">
              Collaborations with local bike shops and sports retailers to provide discounts and resources for our participants.
            </p>
          </motion.div>

          <motion.div variants={item} className="p-6 bg-muted border border-Border rounded-2xl shadow-2xl shadow-black/10">
            <h3 className="text-2xl font-lexend text-white mb-4">Schools & Organizations</h3>
            <p className="text-white/80 font-inter">
              Partnerships with schools and youth organizations to integrate cycling programs into their activities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const OutreachPrograms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid gap-8 md:grid-cols-1 lg:grid-cols-1"
        >
          <motion.div variants={item} className="p-6 bg-black border border-Border rounded-2xl shadow-2xl shadow-black/10">
            <h3 className="text-2xl font-lexend text-white mb-4">Cycling Safety Programs</h3>
            <p className="text-white/80 font-inter">
              Free cycling safety workshops for children and adults, promoting safe riding habits and awareness.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ImpactMetrics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={item} className="p-6 bg-muted border border-Border rounded-2xl shadow-2xl shadow-black/10 flex flex-col items-center justify-center">
            <TrendingUp className="text-primary w-10 h-10 mb-2" />
            <h3 className="text-2xl font-lexend text-white mb-4">Increased Participation</h3>
            <p className="text-white/80 font-inter">30% increase in cycling participation in local communities.</p>
          </motion.div>

          <motion.div variants={item} className="p-6 bg-muted border border-Border rounded-2xl shadow-2xl shadow-black/10 flex flex-col items-center justify-center">
            <ShieldCheck className="text-primary w-10 h-10 mb-2" />
            <h3 className="text-2xl font-lexend text-white mb-4">Improved Safety</h3>
            <p className="text-white/80 font-inter">20% reduction in cycling-related accidents.</p>
          </motion.div>

          <motion.div variants={item} className="p-6 bg-muted border border-Border rounded-2xl shadow-2xl shadow-black/10 flex flex-col items-center justify-center">
            <Users className="text-primary w-10 h-10 mb-2" />
            <h3 className="text-2xl font-lexend text-white mb-4">Community Growth</h3>
            <p className="text-white/80 font-inter">Expansion of cycling clubs and groups by 40%.</p>
          </motion.div>

          <motion.div variants={item} className="p-6 bg-muted border border-Border rounded-2xl shadow-2xl shadow-black/10 flex flex-col items-center justify-center">
            <Heart className="text-primary w-10 h-10 mb-2" />
            <h3 className="text-2xl font-lexend text-white mb-4">Healthier Lifestyles</h3>
            <p className="text-white/80 font-inter">Increased awareness of the health benefits of cycling.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FuturePlans = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid gap-8 md:grid-cols-1 lg:grid-cols-1"
        >
          <motion.div variants={item} className="p-6 bg-black border border-Border rounded-2xl shadow-2xl shadow-black/10">
            <h3 className="text-2xl font-lexend text-white mb-4">Expansion to New Regions</h3>
            <p className="text-white/80 font-inter">
              Plan to extend Pushpedal's outreach programs to other regions, bringing the benefits of cycling to more communities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Page = () => {
  return (
    <motion.div
      className="bg-black text-white min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-lexend font-bold text-primary">
            Pushpedal
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-primary transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors duration-300">
              About
            </Link>
            <Link href="/courses" className="hover:text-primary transition-colors duration-300">
              Courses
            </Link>
            <Link href="/regional-impact" className="text-primary transition-colors duration-300">
              Regional Impact
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors duration-300">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            {/* Mobile Menu Icon */}
            {/* Replace with your mobile menu component */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </header>

      <section className="relative py-32 md:py-48 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[length:80px_80px] z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-lexend font-bold text-white mb-8">
            Regional Impact
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-inter">
            Learn about Pushpedal's influence on the local community, including our outreach programs and partnerships.
          </p>
        </div>
      </section>

      <CommunityEngagement />
      <Partnerships />
      <OutreachPrograms />
      <ImpactMetrics />
      <FuturePlans />

      <footer className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center text-white/60 font-inter">
          <p>&copy; {new Date().getFullYear()} Pushpedal. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Page;