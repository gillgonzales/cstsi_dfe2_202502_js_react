import React, { useContext } from "react";
import { render } from 'vitest-browser-react'
// import { userEvent } from '@vitest/browser/context'
import { describe, test, expect } from "vitest";
import { SearchBar } from "../../src/components/SearchBar/SearchBar";
import ProdutosProvider, { ProdutosContext } from "../../src/context/ProdutosProvider";


describe("SearchBar Testes", () => {
    test("Teste simples de renderização!", async () => {
        const { getByText } = render(
            <SearchBar filterFunction={() => { }} />
        )
        await expect.element(getByText('Pesquisar')).toBeInTheDocument()

    });


    const WrappedSearchBar = () => {
        const { filterProdutos } = useContext(ProdutosContext)
        return (<SearchBar filterFunction={filterProdutos} data-testid="searchbar" />)
    }

    test("Teste com Provider de Produtos!", async () => {

        const { getByText, getByPlaceholder} = render(
            <ProdutosProvider>
                <WrappedSearchBar />
            </ProdutosProvider>
        )

        await expect.element(getByText('Pesquisar')).toBeInTheDocument()
        await expect.element(getByPlaceholder('Pesquisar produtos')).toBeInTheDocument()

        // const searchComponent = getByTestId("searchbar");

        // await searchComponent.click()
        // await userEvent.click(searchComponent);

        // // expect(consoleSpy).toHaveBeenCalledWith("Button clicked in browser!");
        // // consoleSpy.mockRestore();

    });
});