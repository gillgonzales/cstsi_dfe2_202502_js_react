/* eslint-disable no-unused-vars */
import React from "react";
import { render } from 'vitest-browser-react'
import { describe, test, expect } from "vitest";
import RouterStub from "../router/RouterStub";
import { NavLinks } from "../../src/components/NavLinks/NavLinks";
import "../../src/styles/main.css"

describe("NavLink Teste", () => {
    test("Teste dos links da barra superior de navegação!", async () => {
        const { getByText } = render(<RouterStub component={<NavLinks />} />)
        await expect.element(getByText('Log in')).toBeInTheDocument()
    });

    test("Teste com usuário!", async () => {
        const user = {name:"User Test"}
        const { getByText } = render(<RouterStub component={<NavLinks user={user}/>}/>)
        await expect.element(getByText('Dashboard')).toBeInTheDocument()
    });
});