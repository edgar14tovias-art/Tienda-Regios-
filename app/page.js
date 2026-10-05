'use client';
import { useState } from 'react';

// LISTA DE PRODUCTOS Y SERVICIOS DIRECTA
const PRODUCTS = [
  {
    id: "stream-1",
    name: "Pantalla Streaming 4K (30 Días)",
    description: "Cuenta con perfil privado y PIN exclusivo. Entrega automática.",
    price: 95,
    type: "digital",
    badge: "⚡ Entrega Inmediata"
  },
  {
    id: "stream-2",
    name: "Combo Streaming Familiar (1 Mes)",
    description: "Acceso multi-pantalla garantizado todo el mes.",
    price: 180,
    type: "digital",
    badge: "⚡ Automático"
  },
  {
    id: "fisico-1",
    name: "Filtro de Aceite Sintético de Alto Rendimiento",
    description: "Repuesto automotriz de larga duración. Envío por paquetería.",
    price: 280,
    type: "physical",
    badge: "📦 Envío a Domicilio"
  },
  {
    id: "serv-1",
    name: "Asesoría Técnica y Diagnóstico Remoto",
    description: "Sesión 1 a 1 de 45 minutos para soporte o configuración.",
    price: 350,
    type: "service",
    badge: "📅 Cita Online"
  }
];

export default function Home() {
  const [filter, setFilter] = useState('all');
  const [purchasedItem, setPurchasedItem] = useState(null);

  const filtered = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(item => item.type === filter);

  const handleComprar = (prod) => {
    if (prod.type === 'digital') {
      setPurchasedItem({
        title: prod.name,
        tipo: 'digital',
        info: 'usuario_demo@stream.com:ClaveSegura2026 (PIN: 1409)'
      });
    } else if (prod.type === 'physical') {
      setPurchasedItem({
        title: prod.name,
        tipo: 'physical',
        info: 'Guía de rastreo generada: ENV-MX-8829103'
      });
    } else {
      setPurchasedItem({
        title: prod.name,
        tipo: 'service',
        info: 'Enlace de videollamada y agenda asignado.'
      });
    }
  };

  return (
    <div style={{ backgroundColor: '#070b08', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '80px' }}>
      
      {/* Banner Superior */}
      <div style={{ backgroundColor: '#10b981', color: '#000', padding: '8px', textAlign: 'center', fontSize: '12px', fontWeight: 'bold' }}>
        Soporte oficial por WhatsApp & Telegram
      </div>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid #1a241e' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
          <span style={{ color: '#10b981', fontSize: '18px' }}>⚡</span> TIENDA REGIOS
        </div>
        <span style={{ fontSize: '11px', background: '#0f1712', border: '1px solid #10b98140', color: '#10b981', padding: '4px 8px', borderRadius: '6px' }}>
          MXN
        </span>
      </div>

      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '28px 20px 16px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '900', lineHeight: '1.2', margin: '0' }}>
          Digital y Servicios,<br/><span style={{ color: '#10b981' }}>al instante.</span>
        </h1>
        <p style={{ color: '#88998f', fontSize: '13px', marginTop: '8px' }}>
          Catálogo con entregas inmediatas y pagos protegidos.
        </p>

        {/* BOTÓN DESTACADO: VENTA DE LLANTAS */}
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
          <a
            href="https://comprarllantas.mx/llantas-regios"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              backgroundColor: '#10b981',
              color: '#05130b',
              fontWeight: '900',
              fontSize: '14px',
              padding: '14px 24px',
              borderRadius: '16px',
              textDecoration: 'none',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
              border: '1px solid #34d399',
              width: '90%',
              maxWidth: '380px'
            }}
          >
            <span style={{ fontSize: '16px' }}>🛞</span> Venta de llantas - Cotiza aquí <span>→</span>
          </a>
        </div>
      </div>

      {/* Filtros por Categoría */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', padding: '10px 16px 20px', flexWrap: 'wrap' }}>
        {[
          { id: 'all', label: 'Todos' },
          { id: 'digital', label: 'Digitales' },
          { id: 'physical', label: 'Físicos' },
          { id: 'service', label: 'Servicios' }
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            style={{
              padding: '6px 14px',
              borderRadius: '10px',
              fontSize: '12px',
              fontWeight: 'bold',
              border: filter === btn.id ? '1px solid #10b981' : '1px solid #1f2b23',
              backgroundColor: filter === btn.id ? '#10b981' : '#0e1411',
              color: filter === btn.id ? '#000' : '#88998f',
              cursor: 'pointer'
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Lista de Productos */}
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '500px', margin: '0 auto' }}>
        {filtered.map((prod) => (
          <div key={prod.id} style={{ backgroundColor: '#0e1411', border: '1px solid #1a261f', borderRadius: '16px', padding: '18px' }}>
            <span style={{ fontSize: '10px', background: '#10b98115', color: '#10b981', padding: '3px 8px', borderRadius: '6px', fontWeight: 'bold' }}>
              {prod.badge}
            </span>
            <h2 style={{ fontSize: '17px', fontWeight: 'bold', margin: '10px 0 4px' }}>{prod.name}</h2>
            <p style={{ color: '#7a8c82', fontSize: '12px', margin: '0 0 14px' }}>{prod.description}</p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '11px', color: '#66776d' }}>Precio</span>
                <div style={{ fontSize: '20px', fontWeight: '900', color: '#fff' }}>${prod.price} MXN</div>
              </div>
              <button 
                onClick={() => handleComprar(prod)}
                style={{ backgroundColor: '#10b981', color: '#000', border: 'none', padding: '10px 18px', borderRadius: '12px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}
              >
                Comprar
              </button>
            </div>
          </div>
        ))}

        {/* Modal / Caja de entrega simulada */}
        {purchasedItem && (
          <div style={{ backgroundColor: '#111e16', border: '1px solid #10b981', borderRadius: '16px', padding: '16px', marginTop: '12px' }}>
            <div style={{ fontSize: '13px', color: '#10b981', fontWeight: 'bold' }}>✓ ¡Orden confirmada!</div>
            <div style={{ fontSize: '12px', color: '#fff', fontWeight: 'bold', marginTop: '4px' }}>{purchasedItem.title}</div>
            <p style={{ fontSize: '11px', color: '#a0b0a6', margin: '6px 0 4px' }}>
              {purchasedItem.tipo === 'digital' ? 'Tus accesos generados:' : 'Detalles de la compra:'}
            </p>
            <div style={{ background: '#000', padding: '10px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '12px', color: '#34d399', wordBreak: 'break-all' }}>
              {purchasedItem.info}
            </div>
          </div>
        )}
      </div>

    </div>
  );
    }
    
