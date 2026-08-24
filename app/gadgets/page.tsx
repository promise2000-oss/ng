"use client";

import { useState } from "react";
import SpecsModal from "@/components/SpecsModal";
import GadgetsHero from "@/components/gadgets/GadgetsHero";
import CategoriesGrid from "@/components/gadgets/CategoriesGrid";
import ProductsGrid from "@/components/gadgets/ProductsGrid";
import GadgetsCTA from "@/components/gadgets/GadgetsCTA";
import type { GadgetProduct } from "@/lib/gadgets";

export default function GadgetsPage() {
  const [selectedProduct, setSelectedProduct] = useState<GadgetProduct | null>(null);

  return (
    <main className="w-full bg-background text-text-primary">
      <GadgetsHero />
      <CategoriesGrid />
      <ProductsGrid onSelectProduct={setSelectedProduct} />
      <GadgetsCTA />
      <SpecsModal
        product={selectedProduct ? { name: selectedProduct.name, specs: selectedProduct.specs } : null}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}
