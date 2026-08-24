"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { products, type GadgetProduct } from "@/lib/gadgets";

export default function ProductsGrid({
  onSelectProduct,
}: {
  onSelectProduct: (p: GadgetProduct) => void;
}) {
  return (
    <section className="px-6 md:px-20 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">Featured <span className="text-accent">Products</span></h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-3" />
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product, i) => (
            <motion.div key={product.name} initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.025 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-secondary/30 transition-all group">
              <div className="relative aspect-square w-full overflow-hidden bg-surface">
                <Image src={product.img} alt={product.name} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-3 text-center">
                <h4 className="text-sm font-semibold text-text-primary leading-tight">{product.name}</h4>
                <p className="text-xs text-text-primary/70 mt-0.5">{product.tag}</p>
                <button onClick={() => onSelectProduct(product)}
                  aria-haspopup="dialog"
                  className="mt-2 text-xs px-3 py-1.5 rounded-full bg-secondary/10 text-primary hover:bg-secondary hover:text-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent">
                  View Specs
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
