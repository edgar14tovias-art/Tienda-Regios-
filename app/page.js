"use client";
import { useState } from "react";
import { PRODUCTS, generateDeliveryInfo } from "@/lib/products";
import { theme } from "@/lib/theme";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Filters from "@/components/Filters";
import ProductCard from "@/components/ProductCard";
import PurchaseModal from "@/components/PurchaseModal";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [purchasedItem, setPurchasedItem] = useState(null);

  const filtered =
    filter === "all" ? PRODUCTS : PRODUCTS.filter((item) => item.type === filter);

  const handleComprar = (prod) => {
    const delivery = generateDeliveryInfo(prod);
    setPurchasedItem({
      title: prod.name,
      label: delivery.label,
      tipo: delivery.tipo,
      info: delivery.info,
    });
  };

  return (
    <div
      style={{
        backgroundColor: theme.bg,
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "sans-serif",
        paddingBottom: "80px",
      }}
    >
      <Header />
      <Hero />

      <div style={{ textAlign: "center", marginTop: "18px", marginBottom: "12px" }}>
        <h2
          style={{
            fontSize: "16px",
            fontWeight: "800",
            color: "#e2e8f0",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Explora nuestro catálogo
        </h2>
        <div
          style={{
            width: "40px",
            height: "2px",
            backgroundColor: theme.green,
            margin: "6px auto 0",
            borderRadius: "2px",
          }}
        />
      </div>

      <Filters filter={filter} setFilter={setFilter} />

      <div
        style={{
          padding: "0 16px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        {filtered.map((prod) => (
          <ProductCard key={prod.id} prod={prod} onBuy={handleComprar} />
        ))}

        <PurchaseModal item={purchasedItem} onClose={() => setPurchasedItem(null)} />
      </div>
    </div>
  );
          }
