"use client";
import { theme } from "@/lib/theme";

const OPTIONS = [
  { id: "all", label: "Todos" },
  { id: "digital", label: "Digitales" },
  { id: "physical", label: "Físicos" },
  { id: "service", label: "Servicios" },
];

export default function Filters({ filter, setFilter }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        padding: "10px 16px 20px",
        flexWrap: "wrap",
      }}
    >
      {OPTIONS.map((btn) => (
        <button
          key={btn.id}
          onClick={() => setFilter(btn.id)}
          style={{
            padding: "7px 15px",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: "bold",
            border:
              filter === btn.id
                ? `1px solid ${theme.green}`
                : `1px solid ${theme.borderSoft}`,
            backgroundColor: filter === btn.id ? theme.green : theme.bgCard,
            color: filter === btn.id ? theme.black : "#88998f",
            cursor: "pointer",
          }}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
