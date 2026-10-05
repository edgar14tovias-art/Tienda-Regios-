'use client';
import { useState } from 'react';

export default function Home() {
  const [purchasedAccount, setPurchasedAccount] = useState(null);
  const [loading, setLoading] = useState(false);

  // Simulación de entrega instantánea
  const comprarSimulado = () => {
    setLoading(true);
    setTimeout(() => {
      setPurchasedAccount('cuenta_demo@dominio.com:ClaveSegura2026');
      setLoading(false);
    }, 1200);
  };

  return (
    <div style={{ backgroundColor: '#070b08', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '60px' }}>
      {/* Banner Superior */}
      <div style={{ backgroundColor: '#10b981', color: '#000', padding: '8px', textAlign: 'center', fontSize: '12px', fontWeight: 'bold' }}>
        Soporte oficial por WhatsApp & Telegram
      </div>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid #1a241e' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
          <span style={{ color: '#10b981', fontSize: '18px' }}>⚡</span> MI TIENDA
        </div>
        <span style={{ fontSize: '11px', background: '#0f1712', border: '1px solid #10b98140', color: '#10b981', padding: '4px 8px', borderRadius: '6px' }}>
          MXN
        </span>
      </div>

      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '30px 20px 20px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '900', lineHeight: '1.2', margin: '0' }}>
          Digital,<br/><span style={{ color: '#10b981' }}>al instante.</span>
        </h1>
        <p style={{ color: '#88998f', fontSize: '13px', marginTop: '10px' }}>
          Cuentas, licencias y suscripciones con entrega automatizada.
        </p>
      </div>

      {/* Catálogo de Productos */}
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ backgroundColor: '#0e1411', border: '1px solid #1a261f', borderRadius: '16px', padding: '18px' }}>
          <span style={{ fontSize: '10px', background: '#10b98120', color: '#10b981', padding: '3px 8px', borderRadius: '6px', fontWeight: 'bold' }}>
            ENTREGA INMEDIATA
          </span>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px 0 4px' }}>Membresía Streaming (1 Mes)</h2>
          <p style={{ color: '#7a8c82', fontSize: '12px', margin: '0 0 14px' }}>Garantía completa de 30 días con renovación directa.</p>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '11px', color: '#66776d' }}>Precio</span>
              <div style={{ fontSize: '20px', fontWeight: '900', color: '#fff' }}>$120 MXN</div>
            </div>
            <button 
              onClick={comprarSimulado}
              style={{ backgroundColor: '#10b981', color: '#000', border: 'none', padding: '10px 18px', borderRadius: '12px', fontWeight: 'bold', fontSize: '13px' }}
            >
              {loading ? 'Procesando...' : 'Comprar'}
            </button>
          </div>
        </div>

        {/* Entrega en pantalla */}
        {purchasedAccount && (
          <div style={{ backgroundColor: '#111e16', border: '1px solid #10b981', borderRadius: '16px', padding: '16px', marginTop: '10px' }}>
            <div style={{ fontSize: '12px', color: '#10b981', fontWeight: 'bold' }}>✓ ¡Compra confirmada!</div>
            <p style={{ fontSize: '11px', color: '#a0b0a6', margin: '4px 0 8px' }}>Tus credenciales de acceso:</p>
            <div style={{ background: '#000', padding: '10px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '13px', color: '#34d399', wordBreak: 'break-all' }}>
              {purchasedAccount}
            </div>
          </div>
        )}
      </div>
    </div>
  );
    }
                  
