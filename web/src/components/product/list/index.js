import './styles.css';

const Product = () => {
  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img
            src="https://images.tcdn.com.br/img/img_prod/742943/racao_foster_premium_caes_filhotes_7kg_351_1_20200629180249.jpg"
            alt="Imagem do produto"
            className="img-fluid"
          />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge bg-primary">R$ 30,00</label>
          </h6>
          <small>
            <b>
              Ração Foster Premium Cães Filhotes 7Kg - Portal dos Bichos,
              Ração Foster Premium Cães Filhotes 7Kg - Portal dos Bichos
            </b>
          </small>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary rounded-circle">-</button>
        </div>
      </div>
    </div>
  );
}

export default Product;