import { theme } from "@/lib/theme";

export default function ProductCard({ prod, onBuy }) {
  return (
    <div
      style={{
        backgroundColor: theme.bgCard,
        border: `1px solid ${theme.border}`,
        borderRadius: "16px",
        padding: "18px",
      }}
    >
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
      <h3
        style={{
          fontSize: "17px",
          fontWeight: "bold",
          margin: "10px 0 4px",
          color: theme.textMain,
        }}
      >
        {prod.name}
      </h3>
      <p style={{ color: theme.textMuted, fontSize: "12px", margin: "0 0 14px" }}>
        {prod.description}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <span style={{ fontSize: "11px", color: theme.textDim }}>Precio</span>
          <div style={{ fontSize: "20px", fontWeight: "900", color: "#fff" }}>
            ${prod.price} MXN
          </div>
        </div>
        <button
          onClick={() => onBuy(prod)}
          style={{
            backgroundColor: theme.green,
            color: theme.black,
            border: "none",
            padding: "10px 18px",
            borderRadius: "12px",
            fontWeight: "bold",
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          Comprar
        </button>
      </div>
    </div>
  );
          }
