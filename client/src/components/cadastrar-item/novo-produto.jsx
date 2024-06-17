import Navbar from "../navbar/navbar"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NovoProduto = () => {

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        quantity: '',
    });
    
    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar o código para enviar os dados do produto para o back-end
        console.log(product);
        navigate("/")
    };

    return(
        <>
            <Navbar />

            <form className="container mt-page" onSubmit={handleSubmit}>

                <div className="ms-4" style={{width:500}}>
                    <h2>Novo Item</h2>

                    <div className="form-floating mb-3">
                        <input type="text" name="name" value={product.name} onChange={handleChange} className="form-control" id="floatingInput" placeholder="Nome do Produto" required />
                        <label for="floatingInput">Nome do Produto</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="number" name="price" value={product.price} onChange={handleChange} className="form-control" id="floatingPassword" placeholder="0,00" required />
                        <label for="floatingPassword">Preço do Produto</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="number" name="quantity" value={product.quantity} onChange={handleChange} className="form-control" id="floatingPassword" placeholder="0,00" required />
                        <label for="floatingPassword">Quantidade em estoque</label>
                    </div>
                    
                    <div className="form-floating mb-3">
                        <textarea name="description" value={product.description} onChange={handleChange} className="form-control" placeholder="Descrição do Produto" id="floatingTextarea2" required style={{height:150}}></textarea>
                        <label for="floatingTextarea2">Descrição do Produto</label>
                    </div>

                    <button type="submit" className="btn btn-success me-4">Cadastrar Produto</button>

                </div>

            </form>
            
        </>
    )
}

export default NovoProduto