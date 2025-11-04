import { describe, test, expect } from 'vitest';
import { fazerLogin } from '../src/login';

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
    const emailValido = "admin@exemplo.com";
    const senhaInvalida = "senhaErrada";

    // ACT
    const resultado = fazerLogin(emailValido, senhaInvalida);

    // ASSERT
    expect(resultado?.sucesso).toBe(false);
    expect(resultado?.mensagem).toContain("inválidas"); // Alternativa ao .toMatch() do Jest
  });

  test("Deve falhar para email vazio", () => {
    // ARRANGE
    const emailValido = "";
    const senhaInvalida = "senhaErrada";

    // ACT
    const resultado = fazerLogin(emailValido, senhaInvalida);

    // ASSERT
    expect(resultado?.sucesso).toBe(false);
    expect(resultado?.mensagem).toContain("inválidas"); // Alternativa ao .toMatch() do Jest
  });

  test("Deve falhar para email incorreto", () => {
    // ARRANGE
    const emailValido = "asdfasdf@asdfasd.com";
    const senhaInvalida = "senhaErrada";

    // ACT
    const resultado = fazerLogin(emailValido, senhaInvalida);

    // ASSERT
    expect(resultado?.sucesso).toBe(false);
    expect(resultado?.mensagem).toContain("inválidas"); // Alternativa ao .toMatch() do Jest
  });
});