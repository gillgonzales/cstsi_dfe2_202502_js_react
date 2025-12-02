import React, { useEffect, useState } from 'react'
import { axiosClient } from '../../utils/axios-client'

const FornecedoresPage = () => {

    const [fornecedores, setFornecedores] = useState([])
    console.log('fornecedores!!')
    useEffect(() => {
        axiosClient.get('/api/fornecedores')
            .then(response => {
                const { data } = response.data;
                console.log(data)
                setFornecedores(data)
            })
    }, [])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>cnpj</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {fornecedores && fornecedores?.length > 0
                        ? fornecedores.map((fornecedor, k) =>
                            <tr key={k}>
                                <td>{fornecedor.nome}</td>
                                <td>{fornecedor.cnpj}</td>
                                <td>{fornecedor.email}</td>
                            </tr>
                        )
                        : <></>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FornecedoresPage
