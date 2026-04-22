import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomeContainer = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const navigate = useNavigate();

  // Función para simular la carga de terminal NERV
  const handleStartSync = (e) => {
    e.preventDefault();
    setIsSyncing(true);
    
    // Delay de 2.5 segundos para la simulación de sincronización
    setTimeout(() => {
      setIsSyncing(false);
      navigate('/category/software'); // Redirige a la tienda
    }, 2500);
  };

  const styles = {
    container: { maxWidth: '1200px', margin: '40px auto', padding: '20px', color: '#fff' },
    hero: {
      border: '2px solid var(--eva-01-violet)',
      background: 'rgba(112, 0, 255, 0.05)',
      padding: '50px 30px',
      textAlign: 'center',
      position: 'relative',
      marginBottom: '60px',
      overflow: 'hidden'
    },
    glitchTitle: {
      fontFamily: 'Rajdhani',
      fontSize: 'clamp(2.5rem, 8vw, 4rem)',
      color: 'var(--eva-01-green)',
      letterSpacing: '10px',
      textShadow: '0 0 20px var(--eva-01-green)',
      margin: '0 0 10px 0'
    },
    grid: { display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' },
    card: {
      flex: '1', minWidth: '320px', maxWidth: '450px',
      background: '#0a0a0f', border: '1px solid var(--eva-01-violet)',
      padding: '25px', textAlign: 'center', transition: '0.3s'
    },
    imgBox: { 
      width: '100%', height: '250px', overflow: 'hidden', 
      marginBottom: '20px', border: '1px solid var(--eva-01-green)' 
    },
    // Estilo de la pantalla de carga (Loading Overlay)
    loadingOverlay: {
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(5, 2, 16, 0.98)', zIndex: 1000,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Share Tech Mono'
    }
  };

  return (
    <div style={styles.container}>
      
      {/* PANTALLA DE CARGA (LOADING SCREEN) - Solo visible al sincronizar */}
      {isSyncing && (
        <div style={styles.loadingOverlay}>
          <div className="pulse-text" style={{ color: 'var(--eva-01-green)', fontSize: '2rem', letterSpacing: '5px' }}>
            ESTABLECIENDO_ENLACE...
          </div>
          <div style={{ 
            width: '300px', height: '4px', background: 'rgba(255,255,255,0.1)', 
            marginTop: '20px', position: 'relative', overflow: 'hidden' 
          }}>
            <div className="loading-line" style={{ width: '100%', height: '100%', background: 'var(--eva-01-green)' }}></div>
          </div>
          <div style={{ color: 'var(--eva-01-violet)', marginTop: '10px', fontSize: '0.8rem' }}>
            SYNC_RATIO: NOMINAL // A88_PROTOCOL_ACTIVE // PILOT_01_DETECTED
          </div>
        </div>
      )}

      {/* SECCIÓN HERO (Terminal de acceso) */}
      <section style={styles.hero} className="tactical-card">
        <h1 style={styles.glitchTitle}>NERV_RESOURCES</h1>
        <p style={{ color: 'var(--eva-01-violet)', letterSpacing: '3px', fontFamily: 'Share Tech Mono' }}>
          [ REPOSITORIO DE TECNOLOGÍA TÁCTICA ]
        </p>
        <div style={{ maxWidth: '800px', margin: '30px auto', lineHeight: '1.8', fontFamily: 'Share Tech Mono' }}>
          <p>Bienvenido al centro de suministros oficial de la Unidad-01. Nuestra plataforma se especializa en la distribución de software de sincronización de datos y sistemas de enlace neural de alta fidelidad.</p>
          <p style={{ color: 'var(--eva-01-green)', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '20px' }}>
            ACCESO AUTORIZADO A PROTOCOLOS CYBERPUNK.
          </p>
        </div>
        {/* BOTÓN CON LOADING SIMULADO */}
        <button 
          onClick={handleStartSync} 
          className="nerv-btn" 
          style={{ background: 'none', cursor: 'pointer', fontSize: '1rem', marginTop: '20px', textDecoration: 'none' }}
        >
          INGRESAR_AL_SISTEMA
        </button>
      </section>

      {/* SECCIÓN DE PRODUCTOS (Con Imágenes) */}
      <div style={styles.grid}>
        
        {/* SECTOR SOFTWARE */}
        <div style={styles.card} className="tactical-card">
          <div style={styles.imgBox}>
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600" 
              alt="Software" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'hue-rotate(240deg)' }} 
            />
          </div>
          <h3 style={{ color: 'var(--eva-01-green)', fontFamily: 'Rajdhani', fontSize: '1.8rem' }}>SOFTWARE_CORE</h3>
          <p style={{ fontSize: '0.9rem', opacity: 0.8, fontFamily: 'Share Tech Mono' }}>
            Sistemas operativos de núcleo LCL y protocolos de enlace MAGI optimizados para combate.
          </p>
          <Link to="/category/software" className="nerv-btn" style={{ textDecoration: 'none', display: 'block', marginTop: '20px' }}>
            VER_CATALOGO
          </Link>
        </div>

        {/* SECTOR NEURAL */}
        <div style={styles.card} className="tactical-card">
          <div style={styles.imgBox}>
            <img 
              src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=600" 
              alt="Neural" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'hue-rotate(280deg)' }} 
            />
          </div>
          <h3 style={{ color: 'var(--eva-01-green)', fontFamily: 'Rajdhani', fontSize: '1.8rem' }}>NEURAL_LINK</h3>
          <p style={{ fontSize: '0.9rem', opacity: 0.8, fontFamily: 'Share Tech Mono' }}>
            Interfaces cerebro-máquina y plugs de conexión espinal para sincronización profunda.
          </p>
          <Link to="/category/neural" className="nerv-btn" style={{ textDecoration: 'none', display: 'block', marginTop: '20px' }}>
            VER_CATALOGO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;