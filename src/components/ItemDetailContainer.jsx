import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// IMPORTACIÓN DEL ARCHIVO DE DATOS Y RECURSOS
import { productsDB } from '../data/products';
import militechImg from '../images/militech.png'; // Importamos la referencia para la comparación lógica

const ItemDetailContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Buscamos el producto en nuestra DB externa
    const found = productsDB.find(p => p.id === parseInt(id));
    setProduct(found);
  }, [id]);

  const handleTransfer = () => {
    if (product) {
      addToCart(product, 1);
      navigate('/cart');
    }
  };

  if (!product) return <div className="sync-entry" style={{color: 'var(--eva-01-green)'}}>ANALIZING_ID...</div>;

  return (
    <div className="sync-entry" style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      
      {/* CABECERA DE PRODUCTO */}
      <div style={{ marginBottom: '40px', borderLeft: `4px solid ${product.img === militechImg ? '#ff0000' : 'var(--eva-01-green)'}`, paddingLeft: '20px' }}>
        <span style={{ color: 'var(--eva-01-violet)', fontSize: '0.8rem' }}>REGISTRY_ID: #000{product.id}</span>
        <h2 style={{ fontSize: '3rem', margin: 0, color: '#fff', textTransform: 'uppercase' }}>{product.name}</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        
        {/* CONTENEDOR DE IMAGEN DINÁMICA */}
        <div className="image-frame" style={{ 
          height: '400px', 
          background: 'rgba(0,0,0,0.4)', 
          position: 'relative',
          border: `1px solid ${product.img === militechImg ? '#ff0000' : 'var(--eva-01-violet)'}`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: '10px', left: '10px', color: product.img === militechImg ? '#ff0000' : 'var(--eva-01-green)', fontSize: '0.7rem', zIndex: 2 }}>
            [ VISUAL_LINK_ESTABLISHED ]
          </div>

          <img 
            src={product.img} 
            alt={product.name} 
            style={{ 
              maxWidth: '85%', 
              maxHeight: '85%', 
              objectFit: 'contain',
              // Si es Militech, glow rojo. Si no, glow verde.
              filter: product.img === militechImg 
                ? 'drop-shadow(0 0 20px #ff0000) contrast(1.2)' 
                : 'drop-shadow(0 0 15px var(--eva-01-green))',
              zIndex: 1
            }} 
          />

          <div className="scanlines" style={{ pointerEvents: 'none' }}></div>
        </div>

        {/* PANEL DE DATOS TÉCNICOS */}
        <div className="data-panel" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div className="tactical-card" style={{ padding: '20px' }}>
            <h4 style={{ color: product.img === militechImg ? '#ff0000' : 'var(--eva-01-green)', marginTop: 0 }}>DATA_REPORT:</h4>
            <p style={{ lineHeight: '1.6', color: 'rgba(255,255,255,0.8)', fontFamily: 'Share Tech Mono' }}>
              {product.description}
            </p>
          </div>

          <div className="tactical-card" style={{ padding: '20px' }}>
            <div className="loading-line" style={{ background: product.img === militechImg ? '#ff0000' : 'var(--eva-01-green)' }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: product.img === militechImg ? '#ff0000' : 'var(--eva-01-green)' }}>
                ${product.price}
              </span>
              <button 
                onClick={handleTransfer} 
                className="nerv-btn"
                style={{ borderColor: product.img === militechImg ? '#ff0000' : '' }}
              >
                INITIALIZE_TRANSFER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;