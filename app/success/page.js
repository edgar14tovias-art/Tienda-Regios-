"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/lib/cartStore";
import { theme } from "@/lib/theme";
import Header from "@/components/Header";

export default function SuccessPage() {
  const clear = useCart((s) => s.clear);

  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <div
      style={{
        backgroundColor: theme.bg,
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <Header />
      <div style={{ maxWidth: "500px", margin: "0 auto", padding: "60px 20px", textAlign: "center" }}>
        <div style={{ fontSize: "60px", marginBottom: "20px" }}>✅</div>
        <h1 style={{ fontSize: "26px", fontWeight: "900", marginBottom: "12px" }}>
          ¡Pago exitoso!
        </h1>
        <p style={{ color: theme.textSub, fontSize: "14px", lineHeight: "1.6" }}>
          Recibirás tus credenciales por correo en los próximos minutos.
          <br />
          Si no llegan, escríbenos por WhatsApp.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            marginTop: "30px",
            background: theme.green,
            color: theme.black,
            padding: "14px 28px",
            borderRadius: "12px",
            fontWeight: "900",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          Volver a la tienda
        </Link>
      </div>
    </div>
  );
                  }
