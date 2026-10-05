import { theme } from "@/lib/theme";

export default function Hero() {
  return (
    <div style={{ textAlign: "center", padding: "32px 20px 16px" }}>
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "900",
          lineHeight: "1.1",
          margin: "0",
          letterSpacing: "-0.5px",
          color: theme.textMain,
        }}
      >
        Tienda <span style={{ color: theme.green }}>Regios</span>
      </h1>
      <p style={{ color: theme.textSub, fontSize: "14px", marginTop: "10px", fontWeight: "500" }}>
        Venta de productos y servicios
      </p>

      <div style={{ marginTop: "22px", display: "flex", justifyContent: "center" }}>
        <a
          href="https://comprarllantas.mx/llantas-regios"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            backgroundColor: theme.green,
            color: "#05130b",
            fontWeight: "900",
            fontSize: "14px",
            padding: "14px 22px",
            borderRadius: "16px",
            textDecoration: "none",
            boxShadow: "0 0 22px rgba(16, 185, 129, 0.35)",
            border: `1px solid ${theme.greenLight}`,
            width: "92%",
            maxWidth: "380px",
          }}
        >
          <span style={{ fontSize: "17px" }}>🛞</span> Venta de llantas - Cotiza aquí <span>→</span>
        </a>
      </div>
    </div>
  );
          }
