import { describe, test, expect } from 'vitest';
import { fazerLogin } from '../login';
import {users} from '../mocks/users';

describe("Teste de login com Vitest", () => {
  test("Deve logar para credenciais válidas", () => {
    // ARRANGE (Arranjo)
    const email = "admin@exemplo.com";
    const senha = "123456";
    const resultadoEsperado = {
      sucesso: true,
      mensagem: "Login bem-sucedido!",
    };

    // ACT (Ação)
    const resultado = fazerLogin(email, senha);

    // ASSERT (Asserção)
    expect(resultado).toEqual(resultadoEsperado);
  });

  test("Deve falhar para senha incorreta", () => {
    // ARRANGE
    const emailValido = "user@exemplo.com";
    const senhaInvalida = "123456";

    // ACT
    const resultado = fazerLogin(emailValido, senhaInvalida);

    // ASSERT
    expect(resultado.sucesso).toBe(false);
    expect(resultado.mensagem).toContain("inválidas"); // Alternativa ao .toMatch() do Jest
  });
});