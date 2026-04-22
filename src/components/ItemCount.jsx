import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const add = () => {
    if (count < stock) setCount(count + 1);
  };

  const substract = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: '15px',
      margin: '20px 0' 
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '20px',
        border: '1px solid var(--neon-cyan)',
        padding: '10px'
      }}>
        {/* Botón Menos */}
        <button 
          onClick={substract} 
          style={{ 
            background: 'transparent', border: 'none', color: 'var(--neon-magenta)', 
            fontSize: '1.5rem', cursor: 'pointer', width: '30px' 
          }}
        >
          -
        </button>

        {/* Display del Contador */}
        <span style={{ 
          fontSize: '1.5rem', fontFamily: 'Share Tech Mono', minWidth: '40px', textAlign: 'center' 
        }}>
          {count.toString().padStart(2, '0')}
        </span>

        {/* Botón Más */}
        <button 
          onClick={add} 
          style={{ 
            background: 'transparent', border: 'none', color: 'var(--neon-cyan)', 
            fontSize: '1.5rem', cursor: 'pointer', width: '30px' 
          }}
        >
          +
        </button>
      </div>

      <button 
        className="mod-box"
        onClick={() => onAdd(count)}
        style={{
          width: '100%',
          padding: '12px',
          background: 'var(--neon-cyan)',
          color: 'black',
          fontWeight: 'bold',
          border: 'none',
          cursor: 'pointer',
          letterSpacing: '2px'
        }}
      >
        [ CONFIRMAR_CARGA ]
      </button>
      
      <small style={{ color: 'var(--neon-violet)', fontSize: '0.7rem' }}>
        STOCK_DISPONIBLE: {stock} units
      </small>
    </div>
  );
};

export default ItemCount;