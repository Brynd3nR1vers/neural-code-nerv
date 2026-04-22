import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from '../services/firebase'; 
import { collection, getDocs } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    
    const fetchItems = async () => {
      try {
        const itemsCollection = collection(db, "items");
        const snapshot = await getDocs(itemsCollection);
        
        const allDocs = snapshot.docs.map(doc => {
          const data = doc.data();
          // Detectamos si falta la categoría
          const hasCategory = data.category !== undefined && data.category !== null;
          return { 
            id: doc.id, 
            ...data,
            finalCat: hasCategory ? data.category.toString().toLowerCase().trim() : "missing"
          };
        });

        if (id) {
          const catURL = id.toLowerCase().trim();
          
          const filtered = allDocs.filter(prod => {
            // Si no tiene categoría, lo mostramos en todo para que no se "pierda"
            if (prod.finalCat === "missing") return true;

            // Lógica de grupos para Software
            const esSoftware = (catURL === 'software' || catURL === 'os') && 
                               (prod.finalCat === 'software' || prod.finalCat === 'os');
            
            return esSoftware || prod.finalCat === catURL;
          });

          setProductos(filtered);
        } else {
          setProductos([]);
        }
      } catch (error) {
        console.error(">> ERR_SYNC_NERV:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [id]);

  if (loading) return <h2 className="pulse-text" style={{ textAlign: 'center', marginTop: '100px', color: 'var(--eva-01-green)' }}>{">> SINCRONIZANDO_NÚCLEO..."}</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ borderLeft: '4px solid var(--eva-01-green)', paddingLeft: '20px', marginBottom: '40px' }}>
        <h2 style={{ color: 'var(--eva-01-green)', letterSpacing: '5px', margin: 0 }}>{greeting}</h2>
        <span style={{ color: 'var(--eva-01-violet)', fontSize: '0.8rem', fontFamily: 'Share Tech Mono' }}>
          SECTOR: {id?.toUpperCase()} // UNIDADES: {productos.length}
        </span>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
        {productos.map((prod, index) => (
          <Link to={`/item/${prod.id}`} key={`${prod.id}-${index}`} style={{ textDecoration: 'none' }}>
            <div className="tactical-card" style={{ width: '260px', padding: '25px' }}>
              <div className="loading-line"></div>
              <h3 style={{ color: '#fff', fontFamily: 'Rajdhani', fontSize: '1.1rem' }}>{prod.name || "UNKNOWN_UNIT"}</h3>
              
              {/* Aviso visual de estado de datos */}
              <p style={{ 
                color: prod.finalCat === "missing" ? "#ff4444" : "var(--eva-01-green)", 
                fontSize: '0.65rem', 
                fontFamily: 'Share Tech Mono',
                marginTop: '5px'
              }}>
                {prod.finalCat === "missing" ? "[!] CATEGORY_UNDEFINED" : `SYNC_OK: ${prod.finalCat.toUpperCase()}`}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                <span style={{ color: 'var(--eva-01-green)', fontWeight: 'bold' }}>${prod.price || "0"}</span>
                <div className="nerv-btn" style={{ padding: '5px 10px', fontSize: '0.7rem' }}>DATA_LINK</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;