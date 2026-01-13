"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Trophy, Users, Lightbulb, Newspaper, Image as ImageIcon } from 'lucide-react';

// =========================================================================
// Student Profile Component
// =========================================================================
const StudentProfile = ({ name, image, achievements, story }: { name: string; image: string; achievements: string[]; story: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-6 flex flex-col items-center text-center"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
        <Image src={image} alt={name} fill style={{ objectFit: 'cover' }} />
      </div>
      <h3 className="text-white text-[clamp(1.2rem,3vw,1.7rem)] font-lexend mb-2">{name}</h3>
      <ul className="list-disc list-inside text-sm text-secondary mb-4">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
      <p className="text-white/80 text-[clamp(0.875rem,1.5vw,1rem)]">{story}</p>
    </motion.div>
  );
};

// =========================================================================
// Competition Results Component
// =========================================================================
const CompetitionResults = ({ results }: { results: { competition: string; placement: string; date: string }[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-6"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <h3 className="text-white text-[clamp(1.2rem,3vw,1.7rem)] font-lexend mb-4">Competition Results</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-border">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Competition</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Placement</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {results.map((result, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{result.competition}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{result.placement}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{result.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

// =========================================================================
// Testimonials Component
// =========================================================================
const Testimonials = ({ testimonials }: { testimonials: { author: string; quote: string; image: string }[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-6"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <h3 className="text-white text-[clamp(1.2rem,3vw,1.7rem)] font-lexend mb-4">Testimonials</h3>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="mb-4 flex items-start">
          <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
            <Image src={testimonial.image} alt={testimonial.author} fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <p className="text-white/80 text-[clamp(0.875rem,1.5vw,1rem)] italic mb-2">{`"${testimonial.quote}"`}</p>
            <p className="text-white font-bold text-[clamp(0.9rem,1.5vw,1.1rem)]">- {testimonial.author}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

// =========================================================================
// Gallery Component
// =========================================================================
const Gallery = ({ images }: { images: string[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-6"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <h3 className="text-white text-[clamp(1.2rem,3vw,1.7rem)] font-lexend mb-4">Gallery</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative h-48 overflow-hidden rounded-md"
            variants={imageVariants}
          >
            <Image src={image} alt={`Gallery Image ${index + 1}`} fill style={{ objectFit: 'cover' }} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// =========================================================================
// News Articles Component
// =========================================================================
const NewsArticles = ({ articles }: { articles: { title: string; excerpt: string; link: string }[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-6"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <h3 className="text-white text-[clamp(1.2rem,3vw,1.7rem)] font-lexend mb-4">News Articles</h3>
      {articles.map((article, index) => (
        <div key={index} className="mb-4">
          <h4 className="text-white text-[clamp(1rem,2.5vw,1.5rem)] font-lexend mb-2">{article.title}</h4>
          <p className="text-white/80 text-[clamp(0.875rem,1.5vw,1rem)]">{article.excerpt}</p>
          <Link href={article.link} className="text-accent hover:underline block mt-2">Read More</Link>
        </div>
      ))}
    </motion.div>
  );
};

// =========================================================================
// Hero Section Component
// =========================================================================
const HeroSection = () => {
  return (
    <section className="bg-black py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-[clamp(3rem, 8vw, 6rem)] font-lexend font-bold leading-tight mb-6">
          Pushpedal <span className="text-accent">Success Stories</span>
        </h1>
        <p className="text-white/80 text-[clamp(1rem, 2vw, 1.25rem)] max-w-3xl">
          Inspiring journeys of our students who have excelled in cycling competitions.
        </p>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(61,90,254,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(61,90,254,0.03)_1px,transparent_1px)] bg-[length:60px_60px]" />
    </section>
  );
};


// =========================================================================
// Main Page Component
// =========================================================================
export default function Page() {
  // Dummy Data
  const studentProfiles = [
    {
      name: "Anya Sharma",
      image: "/anya.jpg",
      achievements: ["State Champion", "National Rank 3", "Best Cyclist Award"],
      story: "Anya started with Pushpedal at age 8 and has consistently shown exceptional talent and dedication. Her achievements are a testament to her hard work and our coaching."
    },
    {
      name: "Rohan Patel",
      image: "/rohan.jpg",
      achievements: ["District Winner", "Zonal Runner-up", "Most Improved Player"],
      story: "Rohan's journey is one of perseverance. He joined us with basic skills and has transformed into a competitive cyclist, thanks to his commitment and our tailored training."
    },
    {
      name: "Diya Menon",
      image: "/diya.jpg",
      achievements: ["National Champion", "Asian Games Qualifier", "Sportsmanship Award"],
      story: "Diya's passion for cycling is unmatched. Her dedication and our advanced training programs have helped her achieve remarkable success on the national and international stage."
    }
  ];

  const competitionResults = [
    { competition: "State Cycling Championship", placement: "1st Place", date: "2024-03-15" },
    { competition: "National Junior Games", placement: "3rd Place", date: "2024-05-20" },
    { competition: "Zonal Cycling Tournament", placement: "2nd Place", date: "2024-07-10" }
  ];

  const testimonials = [
    { author: "Priya Sharma (Anya's Mother)", quote: "Pushpedal has been instrumental in Anya's success. The coaches are dedicated, and the training is top-notch.", image: "/priya.jpg" },
    { author: "Vikram Patel (Rohan's Father)", quote: "We've seen a tremendous improvement in Rohan's skills and confidence since he joined Pushpedal. Highly recommended!", image: "/vikram.jpg" },
    { author: "Meera Menon (Diya's Mother)", quote: "Pushpedal's holistic approach to training has helped Diya excel not just in cycling but also in her overall development.", image: "/meera.jpg" }
  ];

  const galleryImages = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg"
  ];

  const newsArticles = [
    { title: "Anya Sharma Wins State Championship", excerpt: "Anya Sharma, a Pushpedal student, has won the State Cycling Championship, showcasing her exceptional talent and hard work.", link: "#" },
    { title: "Rohan Patel Secures Second Position in Zonal Tournament", excerpt: "Rohan Patel, another promising cyclist from Pushpedal, has secured the second position in the Zonal Cycling Tournament.", link: "#" },
    { title: "Diya Menon Qualifies for Asian Games", excerpt: "Diya Menon has qualified for the Asian Games, marking a significant milestone in her cycling career and bringing pride to Pushpedal.", link: "#" }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <HeroSection />

      {/* Student Profiles Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-[clamp(2rem, 5vw, 3.5rem)] font-lexend font-bold mb-12 text-center">Our Champions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentProfiles.map((profile, index) => (
              <StudentProfile key={index} {...profile} />
            ))}
          </div>
        </div>
      </section>

      {/* Competition Results Section */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="container mx-auto px-4">
          <CompetitionResults results={competitionResults} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <Testimonials testimonials={testimonials} />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="container mx-auto px-4">
          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* News Articles Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <NewsArticles articles={newsArticles} />
        </div>
      </section>
    </div>
  );
}