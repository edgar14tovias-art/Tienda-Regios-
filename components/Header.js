import { theme } from "@/lib/theme";

export default function Header() {
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
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "bold" }}>
          <span style={{ color: theme.green, fontSize: "18px" }}>⚡</span> TIENDA REGIOS
        </div>
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
    </>
  );
          }
