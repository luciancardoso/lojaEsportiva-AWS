import { Link } from "react-router-dom"

const Cliente = (props) => {

    // id_cli = id_cliente
    const ExcluirCliente = id_cli => {
        alert('Excluir Cliente ' + id_cli)

        // Fazer o DELETE no servidor
    }

    return(
        <tr>
            <td>{props.id_cliente}</td>
            <td>{props.cliente}</td>
            <td>{props.cpf}</td>
            <td>{props.telefone}</td>
            <td>{props.email}</td>
            <td>{props.idade}</td>
            <td>{props.sexo}</td>
            <td>{props.endereco}</td>
            <td>{props.cep}</td>
            <td>{props.estado}</td>
            <td>
                <div className="dropdown">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Opções
                    </button>
                    <ul className="dropdown-menu">
                        {/* <li><Link className="dropdown-item" to={"/clientes/editar/" + props.id_cliente}>Editar Cliente</Link></li> */}
                        <li><button className="dropdown-item" onClick={(e) => ExcluirCliente(props.id_cliente)}>Excluir Cliente</button></li>
                    </ul>
                </div>
            </td>
        </tr>
    )
}

export default Cliente