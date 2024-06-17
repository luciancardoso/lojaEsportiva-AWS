import { Link } from "react-router-dom"
import Navbar from "../../components/navbar/navbar"
import Cliente from "../../components/cliente/cliente"

import "./clientes.css"
import { useEffect, useState } from "react"

const Clientes = () => {

    const [clientes, setClientes] = useState([]);
    const [status, setStatus] = useState("");

    const ConsultarClientes = () => {
        setClientes(
        [
            // para fins de teste está static
            {
                "id_cliente": 1,
                "cliente": "Catarina Azevedo",
                "cpf": "419.358.270-14",
                "telefone": "(79) 99456-0909",
                "email": "fdias@yahoo.com.br",
                "idade": "59",
                "sexo": "F",
                "endereco": "Jardim de Fernandes Cdi Jatoba, 1234 Vieira / SE",
                "cep": "27017-938",
                "estado": "SE",
            }
        ])
    }

    useEffect(() => {
        ConsultarClientes()
    }, [])


    return(
        <>
            <Navbar />

            <div className="container p-3 mt-page form-pedido">

                <div className="ms-4 d-flex justify-content-between">
                    <div>
                        <h2 className="d-inline">Clientes</h2>
                        <Link className="btn btn-success ms-5 mb-2" to="/clientes/novo">Cadastrar Cliente</Link>
                    </div>

                    <div>
                        <div className="form-control d-inline me-3">
                            <select name="status" id="status" onChange={(e) => setStatus(e.target.value)}>
                                <option value="">Todos os Clientes</option>
                                <option value="estado">Por Estado</option>
                                <option value="cpf">Por Cpf</option>
                            </select>
                        </div>
                        <button className="btn btn-primary" onClick={ConsultarClientes}>Filtrar</button>
                    </div>
                </div>
            </div>

            <div className="mt-5 ms-4 me-4">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Idade</th>
                            <th scope="col">Sexo</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">CEP</th>
                            <th scope="col">Estado</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clientes.map((cliente) => {
                                    return(
                                        <Cliente 
                                            key={cliente.id_cliente}
                                            id_cliente={cliente.id_cliente}
                                            cliente={cliente.cliente}
                                            cpf={cliente.cpf}
                                            telefone={cliente.telefone}
                                            email={cliente.email}
                                            idade={cliente.idade}
                                            sexo={cliente.sexo}
                                            endereco={cliente.endereco}
                                            cep={cliente.cep}
                                            estado={cliente.estado}
                                        />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

        </>
    )
}

export default Clientes