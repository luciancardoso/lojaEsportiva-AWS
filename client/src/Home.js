// import ProductForm from './ProductForm';
import { Link } from 'react-router-dom';
import Navbar from './components/navbar/navbar';

const Home = () => {
    return (

        <>
            <Navbar />

            <div className="container mt-page">

                <div className="container">
                    <div className="row">
                    <div className="col-lg-7 text-center mx-auto">
                        <h1 className="pt-3 mt-n5">Bem vindo à Loja de Artigos Esportivos</h1>
                        <p className="lead mt-3">Aqui você encontra os melhores itens para teu esporte e lazer. </p>
                    </div>
                    </div>
                </div>

                <form className="ms-4 d-flex justify-content-between">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-search-heart"></i></span>
                        <input type="text" className="form-control" placeholder="Procurar por sapatos, roupas, etc." aria-label="Username" aria-describedby="basic-addon1" />
                        <button className="btn btn-primary me-4" onClick="#">Procurar</button>
                    </div>
                    <Link className="btn btn-secondary me-4" to="/cadastro-produto/novo">Cadastrar Item</Link>
                </form>

            </div>
        </>

        // <div>
        //     <h1>Bem vindo à Loja de Artigos Esportivos</h1>
        //     <p>Aqui você encontra os melhores itens para teu esporte e lazer.</p>
        //     <ProductForm />
        // </div>
    );
};

export default Home;