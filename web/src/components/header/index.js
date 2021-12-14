import LogoWhite from '../../assets/logo-white.png';
import Logo from '../../assets/logo-green.png';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = ({ whiteVersion, hideCart }) => {

  // Abre o botão de abri o carrinho de compra
  const openDrawer = () => {
    const event = new CustomEvent("openCart");
    window.dispatchEvent(event);
  }

  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
        <Link to="/">
          <img src={whiteVersion ? LogoWhite : Logo} alt="Logo" />
        </Link>
      </header>
      {!hideCart && (
        <button
          onClick={() => openDrawer()}
          className="btn btn-secondary cart-button"
        >
          <span className="mdi mdi-cart"></span> 5 itens
        </button>
      )}
    </div>
  );
}

export default Header;