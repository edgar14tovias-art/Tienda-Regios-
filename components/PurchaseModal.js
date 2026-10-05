import { theme } from "@/lib/theme";

export default function PurchaseModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      style={{
        backgroundColor: theme.bgSoft,
        border: `1px solid ${theme.green}`,
        borderRadius: "16px",
        padding: "16px",
        marginTop: "12px",
      }}
    >
      <div style={{ fontSize: "13px", color: theme.green, fontWeight: "bold" }}>
        ✓ ¡Orden confirmada!
      </div>
      <div
        style={{
          fontSize: "12px",
          color: "#fff",
          fontWeight: "bold",
          marginTop: "4px",
        }}
      >
        {item.title}
      </div>
      <p style={{ fontSize: "11px", color: "#a0b0a6", margin: "6px 0 4px" }}>
        {item.label}
      </p>
      <div
        style={{
          background: "#000",
          padding: "10px",
          borderRadius: "8px",
          fontFamily: "monospace",
          fontSize: "12px",
          color: theme.greenLight,
          wordBreak: "break-all",
        }}
      >
        {item.info}
      </div>
      <button
        onClick={onClose}
        style={{
          marginTop: "12px",
          width: "100%",
          background: "transparent",
          border: `1px solid ${theme.green}`,
          color: theme.green,
          padding: "8px",
          borderRadius: "10px",
          fontWeight: "bold",
          fontSize: "12px",
          cursor: "pointer",
        }}
      >
        Cerrar
      </button>
    </div>
  );
}
