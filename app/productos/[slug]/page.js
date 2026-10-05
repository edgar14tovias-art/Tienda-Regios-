"use client";
import { use } from "react";
import { useRouter } from "next/navigation";
import { getProductBySlug, PRODUCTS } from "@/lib/products";
import { theme } from "@/lib/theme";
import { useCart } from "@/lib/cartStore";
import Header from "@/components/Header";

export default function ProductPage({ params }) {
  const { slug } = use(params);
  const router = useRouter();
  const prod = getProductBySlug(slug);
  const addItem = useCart((s) => s.addItem);

  if (!prod) {
    return (
      <div style={{ background: theme.bg, minHeight: "100vh", color: "#fff", fontFamily: "sans-serif" }}>
        <Header />
        <div style={{ padding: "40px 20px", textAlign: "center" }}>
          <h1>Producto no encontrado</h1>
          <button
            onClick={() => router.push("/")}
            style={{
              marginTop: "20px",
              background: theme.green,
              color: theme.black,
              border: "none",
              padding: "12px 20px",
              borderRadius: "12px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Volver al catálogo
          </button>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(prod);
    alert(`"${prod.name}" agregado al carrito 🛒`);
    router.push("/carrito");
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

      <div style={{ maxWidth: "500px", margin: "0 auto", padding: "24px 16px" }}>
        <button
          onClick={() => router.push("/")}
          style={{
            background: "transparent",
            border: "none",
            color: theme.textSub,
            fontSize: "13px",
            cursor: "pointer",
            marginBottom: "16px",
            padding: 0,
          }}
        >
          ← Volver al catálogo
        </button>

        <span
          style={{
            fontSize: "10px",
            background: theme.bgBadge,
            color: theme.green,
            padding: "3px 8px",
            borderRadius: "6px",
            fontWeight: "bold",
          }}
        >
          {prod.badge}
        </span>

        <h1 style={{ fontSize: "26px", fontWeight: "900", margin: "14px 0 10px" }}>
          {prod.name}
        </h1>
        <p style={{ color: theme.textMuted, fontSize: "14px", lineHeight: "1.5" }}>
          {prod.description}
        </p>

        <div
          style={{
            marginTop: "24px",
            background: theme.bgCard,
            border: `1px solid ${theme.border}`,
            borderRadius: "16px",
            padding: "20px",
          }}
        >
          <div style={{ fontSize: "12px", color: theme.textDim, marginBottom: "4px" }}>Precio</div>
          <div style={{ fontSize: "32px", fontWeight: "900", color: theme.green }}>
            ${prod.price} MXN
          </div>

          <button
            onClick={handleAdd}
            style={{
              width: "100%",
              marginTop: "18px",
              background: theme.green,
              color: theme.black,
              border: "none",
              padding: "14px",
              borderRadius: "12px",
              fontWeight: "900",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            🛒 Agregar al carrito
          </button>
        </div>

        <ul
          style={{
            marginTop: "24px",
            padding: 0,
            listStyle: "none",
            color: theme.textSub,
            fontSize: "13px",
            lineHeight: "2",
          }}
        >
          <li>✅ Entrega inmediata</li>
          <li>✅ Soporte por WhatsApp</li>
          <li>✅ Garantía durante la vigencia</li>
        </ul>
      </div>
    </div>
  );
            }
