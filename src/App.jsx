import { useState } from 'react'; 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';

import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import HomeContainer from './components/HomeContainer'; // Importado

const CartWidget = () => {
  const { totalItems } = useCart();
  return (
    <Link to="/cart" style={{ 
      textDecoration: 'none', color: 'var(--eva-01-green)', 
      border: '1px solid var(--eva-01-violet)', padding: '5px 15px',
      display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(112, 0, 255, 0.1)'
    }}>
      <span style={{ fontSize: '0.7rem', fontFamily: 'Share Tech Mono' }}>SYNC_LINK</span>
      <span style={{ fontWeight: 'bold' }}>{totalItems.toString().padStart(2, '0')}</span>
    </Link>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="scanlines"></div>
        <div className={`nav-overlay ${menuOpen ? 'visible' : ''}`} onClick={toggleMenu}></div>

        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#050210' }}>
          
          <header style={{ 
            background: 'rgba(5, 2, 15, 0.95)', borderBottom: '2px solid var(--eva-01-violet)',
            padding: '15px 30px', position: 'sticky', top: 0, zIndex: 100 
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link to="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <div style={{ 
                  width: '35px', height: '35px', background: 'var(--eva-01-violet)', 
                  marginRight: '15px', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                  boxShadow: '0 0 10px var(--eva-01-violet)'
                }}></div>
                <h1 style={{ color: 'var(--eva-01-green)', margin: 0, fontSize: '1.6rem', letterSpacing: '3px', fontFamily: 'Rajdhani' }}>
                  UNIT_01 <span className="desktop-links" style={{ fontWeight: 300, fontSize: '0.9rem', color: '#fff' }}>SYSTEMS</span>
                </h1>
              </Link>

              <nav className="desktop-links" style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                <Link to="/category/software" style={navLinkStyle}>[ SOFTWARE ]</Link>
                <Link to="/category/neural" style={navLinkStyle}>[ NEURAL ]</Link>
                <CartWidget />
              </nav>

              <button className="burger-btn" onClick={toggleMenu}>
                {menuOpen ? '[ CLOSE_X ]' : '[ ACCESS_MENU ]'}
              </button>
            </div>
          </header>

          <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
            <div style={{ color: 'var(--eva-01-violet)', fontSize: '0.8rem', marginBottom: '40px', fontFamily: 'Share Tech Mono' }}>
              {'>'} ESTABLECIENDO_CONEXIÓN_REMOTA...
            </div>
            <Link to="/category/software" onClick={toggleMenu} style={mobileLinkStyle}>[ SOFTWARE_DATA ]</Link>
            <Link to="/category/neural" onClick={toggleMenu} style={mobileLinkStyle}>[ NEURAL_LINK ]</Link>
            <Link to="/cart" onClick={toggleMenu} style={mobileLinkStyle}>[ CARGO_MANIFEST ]</Link>
          </nav>

          <main style={{ flex: 1 }}>
            <Routes>
              {}
              <Route path="/" element={<HomeContainer />} />
              
              {}
              <Route path="/category/:id" element={<ItemListContainer greeting=">> FILTRADO_DATOS_VINCULADOS" />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} /> 
            </Routes>
          </main>

          <footer style={{ padding: '15px 30px', borderTop: '1px solid var(--eva-01-violet)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', background: '#050210' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>NERV_INDUSTRIES // 2026</span>
                <span style={{ color: 'var(--eva-01-green)' }}>SYNC_RATIO: NOMINAL</span>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

const navLinkStyle = { color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'Share Tech Mono', letterSpacing: '1px' };
const mobileLinkStyle = { color: 'var(--eva-01-green)', textDecoration: 'none', fontSize: '1.8rem', marginBottom: '30px', fontFamily: 'Rajdhani', fontWeight: '700', display: 'block', borderLeft: '4px solid var(--eva-01-violet)', paddingLeft: '15px' };

export default App;