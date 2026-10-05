"use client";
import Link from "next/link";
import { theme } from "@/lib/theme";
import { useCart } from "@/lib/cartStore";
import Header from "@/components/Header";

export default function CarritoPage() {
  const items = useCart((s) => s.items);
  const updateQty = useCart((s) => s.updateQty);
  const removeItem = useCart((s) => s.removeItem);
  const clear = useCart((s) => s.clear);

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

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
        <h1 style={{ fontSize: "24px", fontWeight: "900", marginBottom: "20px" }}>
          Tu carrito
        </h1>

        {items.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "40px 20px",
              background: theme.bgCard,
              border: `1px solid ${theme.border}`,
              borderRadius: "16px",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>🛒</div>
            <p style={{ color: theme.textSub }}>Tu carrito está vacío</p>
            <Link
              href="/"
              style={{
                display: "inline-block",
                marginTop: "16px",
                background: theme.green,
                color: theme.black,
                padding: "10px 20px",
                borderRadius: "12px",
                fontWeight: "bold",
                textDecoration: "none",
                fontSize: "13px",
              }}
            >
              Ver catálogo
            </Link>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: theme.bgCard,
                    border: `1px solid ${theme.border}`,
                    borderRadius: "14px",
                    padding: "14px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: "14px", fontWeight: "bold", margin: "0 0 4px" }}>
                        {item.name}
                      </h3>
                      <p style={{ fontSize: "12px", color: theme.green, margin: 0, fontWeight: "bold" }}>
                        ${item.price} MXN
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#ef4444",
                        fontSize: "18px",
                        cursor: "pointer",
                        padding: "0 6px",
                      }}
                    >
                      ✕
                    </button>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "8px",
                        border: `1px solid ${theme.borderSoft}`,
                        background: theme.bgSoft,
                        color: "#fff",
                        cursor: "pointer",
                        fontSize: "16px",
                      }}
                    >
                      −
                    </button>
                    <span style={{ fontWeight: "bold", minWidth: "20px", textAlign: "center" }}>
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "8px",
                        border: `1px solid ${theme.borderSoft}`,
                        background: theme.bgSoft,
                        color: "#fff",
                        cursor: "pointer",
                        fontSize: "16px",
                      }}
                    >
                      +
                    </button>
                    <span
                      style={{
                        marginLeft: "auto",
                        fontWeight: "900",
                        color: "#fff",
                        fontSize: "15px",
                      }}
                    >
                      ${item.price * item.qty} MXN
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={clear}
              style={{
                marginTop: "14px",
                background: "transparent",
                border: `1px solid ${theme.borderSoft}`,
                color: theme.textMuted,
                padding: "8px 14px",
                borderRadius: "10px",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              Vaciar carrito
            </button>

            <div
              style={{
                marginTop: "24px",
                background: theme.bgSoft,
                border: `1px solid ${theme.green}`,
                borderRadius: "16px",
                padding: "18px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "14px",
                }}
              >
                <span style={{ color: theme.textSub, fontSize: "13px" }}>Total</span>
                <span style={{ fontSize: "24px", fontWeight: "900", color: theme.green }}>
                  ${total} MXN
                </span>
              </div>
              <button
                style={{
                  width: "100%",
                  background: theme.green,
                  color: theme.black,
                  border: "none",
                  padding: "14px",
                  borderRadius: "12px",
                  fontWeight: "900",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
                onClick={() => alert("Aquí irá Stripe en el siguiente paso")}
              >
                Pagar con tarjeta
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
                   }
