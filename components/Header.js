"use client";
import Link from "next/link";
import { theme } from "@/lib/theme";
import { useCart } from "@/lib/cartStore";

export default function Header() {
  const count = useCart((s) => s.items.reduce((sum, i) => sum + i.qty, 0));

  return (
    <>
      <div
        style={{
          backgroundColor: theme.green,
          color: theme.black,
          padding: "8px",
          textAlign: "center",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        Soporte oficial por WhatsApp &amp; Telegram
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 20px",
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontWeight: "bold",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          <span style={{ color: theme.green, fontSize: "18px" }}>⚡</span> TIENDA REGIOS
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Link
            href="/carrito"
            style={{
              position: "relative",
              textDecoration: "none",
              fontSize: "20px",
              color: theme.green,
            }}
          >
            🛒
            {count > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-10px",
                  background: theme.green,
                  color: theme.black,
                  fontSize: "10px",
                  fontWeight: "bold",
                  padding: "2px 6px",
                  borderRadius: "10px",
                  minWidth: "16px",
                  textAlign: "center",
                }}
              >
                {count}
              </span>
            )}
          </Link>

          <span
            style={{
              fontSize: "11px",
              background: theme.bgCard,
              border: `1px solid ${theme.green}40`,
              color: theme.green,
              padding: "4px 8px",
              borderRadius: "6px",
            }}
          >
            MXN
          </span>
        </div>
      </div>
    </>
  );
}
