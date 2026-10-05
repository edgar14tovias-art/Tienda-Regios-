'use client';
import { useState } from 'react';
import { PRODUCTS, generateDeliveryInfo } from '@/lib/products';
import { theme } from '@/lib/theme';

export default function Home() {
  const [filter, setFilter] = useState('all');
  const [purchasedItem, setPurchasedItem] = useState(null);

  const filtered =
    filter === 'all' ? PRODUCTS : PRODUCTS.filter((item) => item.type === filter);

  const handleComprar = (prod) => {
    const delivery = generateDeliveryInfo(prod);
    setPurchasedItem({
      title: prod.name,
      label: delivery.label,
      tipo: delivery.tipo,
      info: delivery.info,
    });
  };

  return (
    <div
      style={{
        backgroundColor: theme.bg,
        color: '#fff',
        minHeight: '100vh',
        fontFamily: 'sans-serif',
        paddingBottom: '80px',
      }}
    >
      {/* Banner */}
      <div
        style={{
          backgroundColor: theme.green,
          color: theme.black,
          padding: '8px',
          textAlign: 'center',
          fontSize: '12px',
          fontWeight: 'bold',
        }}
      >
        Soporte oficial por WhatsApp & Telegram
      </div>

      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 20px',
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
          <span style={{ color: theme.green, fontSize: '18px' }}>⚡</span> TIENDA REGIOS
        </div>
        <span
          style={{
            fontSize: '11px',
            background: theme.bgCard,
            border: `1px solid ${theme.green}40`,
            color: theme.green,
            padding: '4px 8px',
            borderRadius: '6px',
          }}
        >
          MXN
        </span>
      </div>

      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '32px 20px 16px' }}>
        <h1
          style={{
            fontSize: '36px',
            fontWeight: '900',
            lineHeight: '1.1',
            margin: '0',
            letterSpacing: '-0.5px',
            color: theme.textMain,
          }}
        >
          Tienda <span style={{ color: theme.green }}>Regios</span>
        </h1>
        <p style={{ color: theme.textSub, fontSize: '14px', marginTop: '10px', fontWeight: '500' }}>
          Venta de productos y servicios
        </p>

        <div style={{ marginTop: '22px', display: 'flex', justifyContent: 'center' }}>
          <a
            href="https://comprarllantas.mx/llantas-regios"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              backgroundColor: theme.green,
              color: '#05130b',
              fontWeight: '900',
              fontSize: '14px',
              padding: '14px 22px',
              borderRadius: '16px',
              textDecoration: 'none',
              boxShadow: '0 0 22px rgba(16, 185, 129, 0.35)',
              border: `1px solid ${theme.greenLight}`,
              width: '92%',
              maxWidth: '380px',
            }}
          >
            <span style={{ fontSize: '17px' }}>🛞</span> Venta de llantas - Cotiza aquí <span>→</span>
          </a>
        </div>
      </div>

      {/* Título catálogo */}
      <div style={{ textAlign: 'center', marginTop: '18px', marginBottom: '12px' }}>
        <h2
          style={{
            fontSize: '16px',
            fontWeight: '800',
            color: '#e2e8f0',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          Explora nuestro catálogo
        </h2>
        <div
          style={{
            width: '40px',
            height: '2px',
            backgroundColor: theme.green,
            margin: '6px auto 0',
            borderRadius: '2px',
          }}
        />
      </div>

      {/* Filtros */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          padding: '10px 16px 20px',
          flexWrap: 'wrap',
        }}
      >
        {[
          { id: 'all', label: 'Todos' },
          { id: 'digital', label: 'Digitales' },
          { id: 'physical', label: 'Físicos' },
          { id: 'service', label: 'Servicios' },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            style={{
              padding: '7px 15px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: 'bold',
              border:
                filter === btn.id
                  ? `1px solid ${theme.green}`
                  : `1px solid ${theme.borderSoft}`,
              backgroundColor: filter === btn.id ? theme.green : theme.bgCard,
              color: filter === btn.id ? theme.black : '#88998f',
              cursor: 'pointer',
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Productos */}
      <div
        style={{
          padding: '0 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          maxWidth: '500px',
          margin: '0 auto',
        }}
      >
        {filtered.map((prod) => (
          <div
            key={prod.id}
            style={{
              backgroundColor: theme.bgCard,
              border: `1px solid ${theme.border}`,
              borderRadius: '16px',
              padding: '18px',
            }}
          >
            <span
              style={{
                fontSize: '10px',
                background: theme.bgBadge,
                color: theme.green,
                padding: '3px 8px',
                borderRadius: '6px',
                fontWeight: 'bold',
              }}
            >
              {prod.badge}
            </span>
            <h3
              style={{
                fontSize: '17px',
                fontWeight: 'bold',
                margin: '10px 0 4px',
                color: theme.textMain,
              }}
            >
              {prod.name}
            </h3>
            <p style={{ color: theme.textMuted, fontSize: '12px', margin: '0 0 14px' }}>
              {prod.description}
            </p>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <span style={{ fontSize: '11px', color: theme.textDim }}>Precio</span>
                <div style={{ fontSize: '20px', fontWeight: '900', color: '#fff' }}>
                  ${prod.price} MXN
                </div>
              </div>
              <button
                onClick={() => handleComprar(prod)}
                style={{
                  backgroundColor: theme.green,
                  color: theme.black,
                  border: 'none',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  fontWeight: 'bold',
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                Comprar
              </button>
            </div>
          </div>
        ))}

        {/* Modal compra */}
        {purchasedItem && (
          <div
            style={{
              backgroundColor: theme.bgSoft,
              border: `1px solid ${theme.green}`,
              borderRadius: '16px',
              padding: '16px',
              marginTop: '12px',
            }}
          >
            <div style={{ fontSize: '13px', color: theme.green, fontWeight: 'bold' }}>
              ✓ ¡Orden confirmada!
            </div>
            <div
              style={{
                fontSize: '12px',
                color: '#fff',
                fontWeight: 'bold',
                marginTop: '4px',
              }}
            >
              {purchasedItem.title}
            </div>
            <p style={{ fontSize: '11px', color: '#a0b0a6', margin: '6px 0 4px' }}>
              {purchasedItem.label}
            </p>
            <div
              style={{
                background: '#000',
                padding: '10px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '12px',
                color: theme.greenLight,
                wordBreak: 'break-all',
              }}
            >
              {purchasedItem.info}
            </div>
          </div>
        )}
      </div>
    </div>
  );
          }
