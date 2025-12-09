import { ButtonDelete, ButtonEdit } from "../../Button/button.styled"
import { TableStyled } from "./produtoTable.styled"

const ProdutoTable = ({ produtos, edit, remove }) => {
    return (
        <TableStyled>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Qtd</th>
                    <th>Importado</th>
                    <th colSpan={2}>Ações</th>
                </tr>
            </thead>
            <tbody>
                {produtos.map((produto, key) => (
                    <tr key={`produto${key}`}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.preco}</td>
                        <td>{produto.qtd_estoque}</td>
                        <td>{produto.importado ? 'Sim' : 'Não'}</td>
                        <td colSpan={2}>
                            <ButtonEdit onClick={() => edit(produto.id)}>Editar</ButtonEdit>
                            <ButtonDelete onClick={() => remove(produto.id)}>Excluir</ButtonDelete>
                        </td>
                    </tr>
                ))}
            </tbody>
        </TableStyled>
    )
}

export default ProdutoTable
