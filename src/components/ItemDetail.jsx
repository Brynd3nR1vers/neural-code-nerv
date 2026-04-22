import { useState } from 'react';
import { Link } from 'react-router-dom'; // <--- Importante para los botones
import { useCart } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const { addToCart } = useCart();
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addToCart({ ...item, quantity });
  };

  return (
    <div className="item-detail-card" style={{
      border: '1px solid var(--neon-cyan)',
      padding: '40px',
      background: 'rgba(2, 6, 23, 0.9)',
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 style={{ color: 'var(--neon-cyan)', letterSpacing: '4px' }}>{item.name}</h1>
      <p style={{ margin: '20px 0', color: '#ccc' }}>{item.description}</p>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>${item.price}</h2>

      {quantityAdded > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <p style={{ color: 'var(--neon-cyan)', fontWeight: 'bold' }}>
            [ SISTEMA ACTUALIZADO: {quantityAdded} UNIDADES ]
          </p>
          
          {/* BOTÓN IR AL CARRITO */}
          <Link to="/cart" className="mod-box" style={{ 
            textDecoration: 'none', padding: '15px', color: 'var(--neon-magenta)', 
            border: '1px solid var(--neon-magenta)', display: 'block' 
          }}>
            IR AL CARRITO
          </Link>

          {/* BOTÓN SEGUIR COMPRANDO (Vuelve a la raíz) */}
          <Link to="/" className="mod-box" style={{ 
            textDecoration: 'none', padding: '15px', color: 'var(--neon-cyan)', 
            border: '1px solid var(--neon-cyan)', display: 'block' 
          }}>
            SEGUIR COMPRANDO
          </Link>
        </div>
      ) : (
        <ItemCount stock={item.stock} initial={1} onAdd={handleOnAdd} />
      )}
    </div>
  );
};

export default ItemDetail;