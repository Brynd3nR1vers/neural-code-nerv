import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', emailConfirm: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = "EVA-" + Math.random().toString(36).substr(2, 9).toUpperCase();
    setOrderId(generatedId);
    clearCart();
  };

  // Pantalla de Éxito
  if (orderId) {
    return (
      <div style={{ 
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', 
        minHeight: '80vh', color: 'white', textAlign: 'center', zIndex: 10, position: 'relative' 
      }}>
        <h2 style={{ color: '#00ff00', fontSize: '2.5rem' }}>COMPRA EXITOSA</h2>
        <p>Tu código de sincronización es:</p>
        <h1 style={{ background: '#7000ff', padding: '10px 20px', borderRadius: '5px' }}>{orderId}</h1>
        <button className="nerv-btn" onClick={() => window.location.href = '/'}>VOLVER AL INICIO</button>
      </div>
    );
  }

  return (
    <div style={{ 
      position: 'relative', zIndex: 10,  // Asegura que esté por encima del fondo
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      padding: '40px', minHeight: '100vh' 
    }}>
      
      {/* TÍTULO FORZADO */}
      <h2 style={{ color: '#00ff00', fontSize: '2rem', marginBottom: '20px', textShadow: '2px 2px #000' }}>
        TERMINAL DE DATOS
      </h2>

      <form onSubmit={handleSubmit} style={{ 
        background: 'rgba(20, 20, 20, 0.95)', // Fondo oscuro sólido para que se vea el texto
        padding: '30px', border: '2px solid #7000ff', borderRadius: '10px',
        width: '100%', maxWidth: '450px', boxShadow: '0 0 20px rgba(112, 0, 255, 0.5)'
      }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            style={safeInput} type="text" placeholder="NOMBRE COMPLETO" required 
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            style={safeInput} type="email" placeholder="EMAIL" required 
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input 
            style={safeInput} type="email" placeholder="CONFIRMAR EMAIL" required 
            onChange={(e) => setFormData({...formData, emailConfirm: e.target.value})}
          />
          <input 
            style={safeInput} type="tel" placeholder="TELÉFONO" required 
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        <div style={{ marginTop: '20px', textAlign: 'center', borderTop: '1px solid #7000ff', paddingTop: '15px' }}>
          <p style={{ color: '#fff', fontSize: '1.2rem' }}>
            TOTAL: <span style={{ color: '#00ff00' }}>${Number(totalPrice).toFixed(2)}</span>
          </p>
          <button type="submit" className="nerv-btn" style={{ width: '100%', marginTop: '10px', background: '#00ff00', color: '#000' }}>
            CONFIRMAR ORDEN
          </button>
        </div>
      </form>
    </div>
  );
};

// Estilo de input ultra visible
const safeInput = {
  padding: '12px',
  background: '#fff',
  color: '#000',
  border: 'none',
  borderRadius: '4px',
  fontSize: '1rem',
  width: '100%',
  boxSizing: 'border-box'
};

export default Checkout;