import React, { useEffect, useState } from 'react'
import axiosClient, { BASE_URL } from '../../../utils/axios-client'
import { useFornecedorContext } from '../../../contexts/FornecedorProvider'

const FornecedoresPage = () => {

    // const [fornecedores, setFornecedores] = useState([])

    // useEffect(() => {
    //     axiosClient.get('fornecedores')
    //     .then(response=>{
    //         const {data} = response;
    //         // debugger;
    //         console.log(response)
    //         setFornecedores(data)
    //     })
    // }, [])

    const {listFornecedores, loadFornecedores} = useFornecedorContext()

    useEffect(()=>{
        loadFornecedores()
    },[])
    
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
                    {listFornecedores.length>0
                        ? listFornecedores.map((fornecedor,k) =>
                            <tr key={k}>
                                <td>{fornecedor.nome}</td>
                                <td>{fornecedor.cnpj}</td>
                                <td>{fornecedor.email}</td>
                            </tr>
                            )
                    :<></>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FornecedoresPage
