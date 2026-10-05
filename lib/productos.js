export const PRODUCTS = [
  {
    id: "stream-1",
    slug: "pantalla-streaming-4k",
    name: "Pantalla Streaming 4K (30 Días)",
    description: "Cuenta con perfil privado y PIN exclusivo. Entrega automática.",
    price: 95,
    type: "digital",
    badge: "⚡ Entrega Inmediata",
  },
  {
    id: "stream-2",
    slug: "combo-streaming-familiar",
    name: "Combo Streaming Familiar (1 Mes)",
    description: "Acceso multi-pantalla garantizado todo el mes.",
    price: 180,
    type: "digital",
    badge: "⚡ Automático",
  },
  {
    id: "fisico-1",
    slug: "filtro-aceite-sintetico",
    name: "Filtro de Aceite Sintético de Alto Rendimiento",
    description: "Repuesto automotriz de larga duración. Envío por paquetería.",
    price: 280,
    type: "physical",
    badge: "📦 Envío a Domicilio",
  },
  {
    id: "serv-1",
    slug: "asesoria-tecnica-remota",
    name: "Asesoría Técnica y Diagnóstico Remoto",
    description: "Sesión 1 a 1 de 45 minutos para soporte o configuración.",
    price: 350,
    type: "service",
    badge: "📅 Cita Online",
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function generateDeliveryInfo(prod) {
  if (prod.type === "digital") {
    return {
      tipo: "digital",
      label: "Tus accesos generados:",
      info: "usuario_demo@stream.com:ClaveSegura2026 (PIN: 1409)",
    };
  }
  if (prod.type === "physical") {
    return {
      tipo: "physical",
      label: "Detalles de la compra:",
      info: "Guía de rastreo generada: ENV-MX-8829103",
    };
  }
  return {
    tipo: "service",
    label: "Detalles de la compra:",
    info: "Enlace de videollamada y agenda asignado.",
  };
}
