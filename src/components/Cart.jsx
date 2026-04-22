import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, totalPrice, totalItems, addToCart, removeItem, clearCart } = useCart();
  const navigate = useNavigate();

  // Validación de seguridad para el total
  const validatedTotal = Number(totalPrice) || 0;

  // 1. Verificación de integridad: ¿Hay datos en el núcleo?
  if (cart.length === 0) {
    return (
      <div className="sync-entry tactical-card" style={{ textAlign: 'center', padding: '50px', margin: '20px auto', maxWidth: '600px' }}>
        <h2 style={{ color: 'var(--eva-01-violet)' }}>[ ! ] NO_DATA_FOUND</h2>
        <p style={{ fontFamily: 'Share Tech Mono' }}>El búfer de transferencia está vacío.</p>
        <button className="nerv-btn" onClick={() => navigate('/')}>VOLVER_AL_NEXO</button>
      </div>
    );
  }

  return (
    <div className="sync-entry" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ color: 'var(--eva-01-green)', borderBottom: '1px solid var(--eva-01-green)', paddingBottom: '10px', letterSpacing: '2px' }}>
        {'>'} CONTENIDO_MEMORIA_RAM_CARRITO
      </h2>

      <div style={{ marginTop: '30px' }}>
        {cart.map((item) => {
          const itemPrice = Number(item.price) || 0;
          const subtotal = itemPrice * item.quantity;

          return (
            <div key={item.id} className="tactical-card" style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '20px', 
              marginBottom: '15px' 
            }}>
              {/* Información del Producto */}
              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--eva-01-violet)', fontFamily: 'Share Tech Mono' }}>
                  ID_HEX: 0x0{item.id}
                </span>
                <h3 style={{ margin: '5px 0', color: '#fff', textTransform: 'uppercase' }}>{item.name}</h3>
                <div style={{ color: 'var(--eva-01-green)', fontFamily: 'Share Tech Mono' }}>
                  UNIT_PRICE: ${itemPrice.toFixed(2)}
                </div>
              </div>

              {/* Controles de Cantidad y Subtotal */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px', 
                  background: 'rgba(0,0,0,0.3)', 
                  padding: '5px 15px', 
                  border: '1px solid var(--eva-01-violet)' 
                }}>
                  <button onClick={() => removeItem(item.id)} style={controlBtn}>-</button>
                  <span style={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center', color: 'var(--eva-01-green)' }}>
                    {item.quantity}
                  </span>
                  <button onClick={() => addToCart(item, 1)} style={controlBtn}>+</button>
                </div>

                <div style={{ textAlign: 'right', minWidth: '120px' }}>
                  <div style={{ fontSize: '0.7rem', opacity: 0.5, fontFamily: 'Share Tech Mono' }}>SUBTOTAL</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--eva-01-green)' }}>
                    ${subtotal.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Resumen Final */}
      <div className="tactical-card" style={{ 
        marginTop: '30px', 
        padding: '30px', 
        textAlign: 'right', 
        borderTop: '4px solid var(--eva-01-green)',
        background: 'rgba(112, 0, 255, 0.05)'
      }}>
        <span style={{ fontSize: '1.2rem', marginRight: '20px', color: 'rgba(255,255,255,0.7)' }}>TOTAL_SINCRO:</span>
        <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--eva-01-green)' }}>
          ${validatedTotal.toFixed(2)}
        </span>
        
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
          <button 
            className="nerv-btn" 
            onClick={clearCart} 
            style={{ borderColor: '#ff4b4b', color: '#ff4b4b' }}
          >
            PURGAR_TODO
          </button>
          
          {/* BOTÓN INTEGRADO AL CHECKOUT */}
          <button 
            className="nerv-btn" 
            onClick={() => navigate('/checkout')}
            style={{ background: 'var(--eva-01-green)', color: '#000', fontWeight: 'bold' }}
          >
            INICIAR_PROTOCOLO_CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

const controlBtn = {
  background: 'transparent',
  border: 'none',
  color: 'var(--eva-01-green)',
  fontSize: '1.5rem',
  cursor: 'pointer',
  padding: '0 10px',
  fontFamily: 'Share Tech Mono'
};

export default Cart;