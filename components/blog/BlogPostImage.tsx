"use client";

import { motion } from "motion/react";
import Image, { type StaticImageData } from "next/image";

export default function BlogPostImage({ src, alt }: { src: StaticImageData | string; alt: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
      className="relative h-72 md:h-[400px] rounded-2xl overflow-hidden mb-12">
      <Image src={src} alt={alt} fill className="object-cover" />
    </motion.div>
  );
}
