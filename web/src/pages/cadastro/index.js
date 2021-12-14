// Components
import Header from '../../components/header';

// Logo
import Illustration from '../../assets/illustration.png'

const Cadastro = () => {
  return (
    <div className="container-fluid h-100 bg-primary">

      <Header whiteVersion hideCart />

      <div className="row">
        <div className="col-6 text-right my-auto">
          <img
            src={Illustration}
            className="img-fluid"
            alt="Ilustração do Pet"
          />
        </div>
        <div className="col-6">
          <div className="box col-8">
            <h2 className="text-center">Falta pouco pra fazer o seu Pet feliz.</h2>
            <br />

            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Nome Completo" />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="E-mail" />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Telefone" />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="CPF" />
            <input
              type="date"
              className="form-control form-control-lg mb-3"
              placeholder="Data de Nascimento" />

            <div className="d-grid">
              <button className="btn btn-secondary">
                Finalizar Pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Cadastro;