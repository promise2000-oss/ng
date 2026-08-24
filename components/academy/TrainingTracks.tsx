"use client";

import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import cloudTrackImg from "@/assets/images/academy/tracks/cloud.jpg";
import webDevTrackImg from "@/assets/images/academy/tracks/web-dev.jpg";
import dataTrackImg from "@/assets/images/academy/tracks/data.jpg";

const tracks = [
  {
    image: cloudTrackImg,
    title: "Cloud Computing & AWS",
    desc: "Hands-on training in cloud infrastructure, Linux, EC2, and server administration.",
  },
  {
    image: webDevTrackImg,
    title: "Web Development",
    desc: "Practical sessions on building and deploying secure web applications to the cloud.",
  },
  {
    image: dataTrackImg,
    title: "Data Analytics",
    desc: "Interactive training in data visualization, reporting, and business intelligence using tools such as Power BI.",
  },
];

export default function TrainingTracks() {
  return (
    <section className="px-6 md:px-20 py-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">
            Training Tracks
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4">
            Practical, Instructor-Led <span className="text-primary">Training</span>
          </h2>
          <p className="text-text-primary/70 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
            Live virtual classes and hands-on projects — built to make
            participants job-ready, not just certificate-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={track.image}
                  alt={track.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {track.title}
                </h3>
                <p className="text-sm text-text-primary/70 leading-relaxed">
                  {track.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="#courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-semibold text-sm shadow-lg shadow-accent/25 hover:bg-accent/90 transition-all active:scale-[0.97]"
          >
            Explore Course Details <FaArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}