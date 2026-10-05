"use client";
import { useState } from "react";
import { PRODUCTS } from "@/lib/products";
import { theme } from "@/lib/theme";
import { useCart } from "@/lib/cartStore";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Filters from "@/components/Filters";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const addItem = useCart((s) => s.addItem);

  const filtered =
    filter === "all" ? PRODUCTS : PRODUCTS.filter((item) => item.type === filter);

  const handleAdd = (prod) => {
    addItem(prod);
    alert(`"${prod.name}" agregado al carrito 🛒`);
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
          <ProductCard key={prod.id} prod={prod} onBuy={handleAdd} />
        ))}
      </div>
    </div>
  );
}
