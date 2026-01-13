"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Image as NextImage } from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Users,
  Lightbulb,
  Heart,
  CalendarCheck,
  Trophy,
  FlagCheckered,
  User2,
  Globe2,
} from "lucide-react";

// =================================================================================================
// SUB-COMPONENTS (Defined before the main Page component)
// =================================================================================================

// Our Story Component
const OurStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="py-24 md:py-32 bg-muted rounded-2xl shadow-2xl shadow-black/10"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8" style={{ fontFamily: "Lexend, sans-serif" }}>
          Our Story
        </h2>
        <p className="text-lg text-gray-400 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
          Pushpedal began with a simple vision: to empower young cyclists in Bangalore to reach their full potential. Founded by passionate cycling enthusiasts, we recognized a gap in professional training tailored to young athletes.
        </p>
        <p className="text-lg text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
          With years of experience in competitive cycling and youth development, we built a program that combines expert coaching, personalized training plans, and a supportive community. Our commitment is to nurture talent, build confidence, and help our students achieve victory, one pedal stroke at a time.
        </p>
      </div>
    </motion.section>
  );
};

// Mission and Vision Component
const MissionVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="py-24 md:py-32"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4" style={{ fontFamily: "Lexend, sans-serif" }}>
            Our Mission
          </h3>
          <p className="text-lg text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
            To provide world-class cycling training and mentorship to young athletes, fostering a winning mindset and a lifelong love for the sport.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4" style={{ fontFamily: "Lexend, sans-serif" }}>
            Our Vision
          </h3>
          <p className="text-lg text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
            To be the leading cycling academy in India, recognized for developing champion cyclists and empowering them to excel on the national and international stage.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

// Team Component
const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const teamMembers = [
    {
      name: "Coach Anya Sharma",
      title: "Head Coach",
      image: "/anya.jpg", // Replace with actual image URL
      bio: "Anya is a former national cycling champion with over 10 years of coaching experience.",
    },
    {
      name: "Dr. Rohan Patel",
      title: "Sports Psychologist",
      image: "/rohan.jpg", // Replace with actual image URL
      bio: "Rohan specializes in mental conditioning and performance enhancement for young athletes.",
    },
    {
      name: "Priya Menon",
      title: "Nutritionist",
      image: "/priya.jpg", // Replace with actual image URL
      bio: "Priya provides personalized nutrition plans to optimize performance and recovery.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="py-24 md:py-32"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8" style={{ fontFamily: "Lexend, sans-serif" }}>
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-6">
              <NextImage
                src={member.image}
                alt={member.name}
                width={500}
                height={500}
                className="rounded-full w-full h-48 object-cover mb-4"
              />
              <h4 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "Lexend, sans-serif" }}>
                {member.name}
              </h4>
              <p className="text-gray-400 text-sm mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
                {member.title}
              </p>
              <p className="text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Values Component
const Values = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const valuesList = [
    { icon: <Award size={32} color="#00FFCC" />, title: "Excellence", description: "We strive for the highest standards in training and development." },
    { icon: <Users size={32} color="#00FFCC" />, title: "Teamwork", description: "We believe in the power of collaboration and mutual support." },
    { icon: <Lightbulb size={32} color="#00FFCC" />, title: "Innovation", description: "We continuously seek new and effective training methods." },
    { icon: <Heart size={32} color="#00FFCC" />, title: "Passion", description: "We are driven by our love for cycling and our commitment to our students." },
  ];

  return (
    <motion.section
      ref={ref}
      className="py-24 md:py-32 bg-muted rounded-2xl shadow-2xl shadow-black/10"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8" style={{ fontFamily: "Lexend, sans-serif" }}>
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuesList.map((value, index) => (
            <div key={index} className="p-4">
              <div className="mb-4">{value.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "Lexend, sans-serif" }}>
                {value.title}
              </h4>
              <p className="text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Social Impact Component
const SocialImpact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="py-24 md:py-32"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8" style={{ fontFamily: "Lexend, sans-serif" }}>
          Our Social Impact
        </h2>
        <p className="text-lg text-gray-400 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
          At Pushpedal, we are committed to making a positive impact on our community. We believe in using cycling as a tool for social change, promoting healthy lifestyles, and empowering young people from all backgrounds.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example Impact Cards (Replace with actual data) */}
          <div className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-6">
            <h4 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "Lexend, sans-serif" }}>
              Scholarship Programs
            </h4>
            <p className="text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
              We provide scholarships to talented cyclists from underprivileged backgrounds, giving them access to professional training and opportunities.
            </p>
          </div>
          <div className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-6">
            <h4 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "Lexend, sans-serif" }}>
              Community Outreach
            </h4>
            <p className="text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
              We organize cycling workshops and events in local communities to promote cycling as a healthy and sustainable mode of transportation.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// =================================================================================================
// MAIN PAGE COMPONENT
// =================================================================================================

const Page = () => {
  return (
    <motion.div
      className="bg-black text-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main>
        <OurStory />
        <MissionVision />
        <Team />
        <Values />
        <SocialImpact />
      </main>
    </motion.div>
  );
};

export default Page;