import './styles.css';

const Petshop = () => {
  return (
    <li className="petshop d-inline-block">
      <div className="d-inline-block">
        <img
          src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png"
          alt="Logo da PetLove"
          className="img-fluid"
        />
      </div>
      <div className="d-inline-block ps-3 align-bottom infos">
        <b>PetLove</b>
        <div className="petshop-infos">
          <span className="mdi mdi-star"></span>
          <text>
            <b>2,8</b>
          </text>
          <span className="mdi mdi-cash-usd-outline">
            <text>$$$</text>
          </span>
          <span className="mdi mdi-crosshairs-gps">
            <text>2,9km</text>
          </span>
        </div>
        <label className="badge bg-primary">Frete Grátis</label>
      </div>
    </li>
  );
}

export default Petshop;