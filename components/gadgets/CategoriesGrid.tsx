"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { categories } from "@/lib/gadgets";

export default function CategoriesGrid() {
  return (
    <section className="px-6 md:px-20 pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">Top Tier <span className="text-accent">Essentials</span></h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-3" />
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-secondary/30 transition-all group">
              <div className="relative h-32 w-full overflow-hidden">
                <Image src={cat.img} alt={cat.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-primary mx-auto mb-2 group-hover:bg-secondary/20 transition-all overflow-hidden">
                  <Image src={cat.img} alt={cat.title} width={40} height={40} className="object-cover w-full h-full" />
                </div>
                <h4 className="text-sm font-semibold text-text-primary">{cat.title}</h4>
                <p className="text-xs text-text-primary/70 mt-0.5">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
