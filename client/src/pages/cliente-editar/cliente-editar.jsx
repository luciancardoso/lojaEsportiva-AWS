import Navbar from "../../components/navbar/navbar";
import { Link, useNavigate } from "react-router-dom";

import "./cliente-editar.css"
import { useEffect, useState } from "react";

const ClienteEditar = () => {

    const navigate = useNavigate();

    const [id_cliente, setIdCliente] = useState(0)
    const [cliente, setCliente] = useState("")
    const [sexo, setSexo] = useState("")
    const [lista_sexo, setListaSexo] = useState([])

    const PesquisarSexo = () => {
        // Fazer um Get no servidor...
        setListaSexo(
        [
            {sexo: 1, nome: "Masculino"},
            {sexo: 2, nome: "Feminino"}
        ])
    }

    const SalvarDados = () => {
        const dados_cliente = {
            id_cliente,
            id_usuario: 0,
        };

        // console.log(JSON.stringify(dados_cliente));
        // Fazer um POST / PUT para o servidor...
        navigate("/clientes")
    }

    useEffect(() => {
        PesquisarSexo();
        // CarregarDadosCliente(id_cliente);
    }, [])

    useEffect(() => {
    }, [])

    return(
        <>
            <Navbar />
            
            <div className="container-fluid mt-page form-pedido-editar">

                <div className="row col-lg-6 offset-lg-3">

                    <div className="col-12 mb-4 mt-2">
                        <h2 className="d-inline">
                            {
                                id_cliente > 0 ? "Editar Cliente " + id_cliente : "Cadastrar Cliente"
                            }
                        </h2>
                    </div>

                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="inputNome" class="form-label">Nome Completo</label>
                            <input type="text" class="form-control" id="inputNome" placeholder="Nome Completo" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="seu@email.com" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="InputCpf" className="form-label">CPF:</label>
                            <input type="text" class="form-control" id="floatingInput" placeholder="000.000.000-00" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="InputIdade" className="form-label">Idade:</label>
                            <input type="text" class="form-control" id="floatingInput" placeholder="Sua Idade" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="InputTel" className="form-label">Telefone:</label>
                            <input type="text" class="form-control" id="floatingInput" placeholder="(99) 99999-9999" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="InputSexo" className="form-label">Sexo:</label>
                            <div className="form-control mb-2">
                                <select name="sexo" id="sexo" onChange={(e) => setSexo(e.target.value)} value={sexo}>
                                    <option value="0">Selecione o Sexo</option>
                                    {lista_sexo.map(s => {
                                        return(
                                            <option value={s.sexo}>{s.nome}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Endereço</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234, Av. Paulista" />
                        </div>
                        
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Cidade</label>
                            <input type="text" class="form-control" id="inputCity" placeholder="Cidade" />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Estado</label>
                            <input type="text" class="form-control" placeholder="Estado" aria-label="Estado" />
                        </div>
                        <div class="col-md-2 mb-4">
                            <label for="inputZip" class="form-label">CEP</label>
                            <input type="text" class="form-control" id="inputZip" placeholder="00000-000" />
                        </div>
                    </form>

                    {/* <div className="col-md-8 mb-4">
                        <label htmlFor="InputNome" className="form-label">Cliente</label>
                        <input type="text" class="form-control" id="floatingInput" placeholder="Nome do Cliente" />
                    </div>

                    <div className="col-md-8 mb-4">
                        <label htmlFor="InputCpf" className="form-label">CPF:</label>
                        <input type="text" class="form-control" id="floatingInput" placeholder="000.000.000-00" />
                    </div>

                    <div className="col-md-8 mb-4">
                        <label htmlFor="InputTel" className="form-label">Telefone:</label>
                        <input type="text" class="form-control" id="floatingInput" placeholder="(99) 99999-9999" />
                    </div>

                    <div className="col-md-8 mb-4">
                        <label htmlFor="InputEmail" className="form-label">E-mail:</label>
                        <input type="text" class="form-control" id="floatingInput" placeholder="seuemail@email.com" />
                    </div>

                    <div className="col-md-8 mb-4">
                        <label htmlFor="InputIdade" className="form-label">Idade:</label>
                        <input type="text" class="form-control" id="floatingInput" placeholder="Sua Idade" />
                    </div> */}

                    {/* <div className="col-md-8 mb-4">
                        <label htmlFor="InputSexo" className="form-label">Sexo:</label>
                        <div className="form-control mb-2">
                            <select name="sexo" id="sexo" onChange={(e) => setSexo(e.target.value)} value={sexo}>
                                <option value="0">Selecione o Sexo</option>
                                {lista_sexo.map(s => {
                                    return(
                                        <option value={s.sexo}>{s.nome}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div> */}

                    {/* <div className="col-md-8 mb-4">
                        <label htmlFor="InputCep" className="form-label">CEP:</label>
                        <input type="text" class="form-control" id="floatingInput" placeholder="00000-000" />
                    </div>

                    <div className="col-md-8 mb-4">
                        <label htmlFor="InputEnd" className="form-label">Endereço:</label>
                        <input type="text" class="form-control" id="floatingInput" placeholder="Endereço" />
                    </div>
                                        
                    <div className="col-md-8 mb-4">
                        <label htmlFor="InputEstado" className="form-label">Estado:</label>
                        <input type="text" class="form-control" id="floatingInput" placeholder="Seu Estado" />
                    </div> */}

                    <div className="col-md-8 mb-4">
                        <div>
                            <div className="d-flex justify-content-end">
                                <Link to="/clientes" type="button" className="btn btn-outline-primary me-4">Cancelar</Link>
                                <button type="button" className="btn btn-success" onClick={SalvarDados}>Salvar Dados</button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default ClienteEditar