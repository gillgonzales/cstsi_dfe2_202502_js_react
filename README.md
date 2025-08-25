

# 📚 Desenvolvimento Front-End 2 - Javascript - ReactJS
## IFSUL - Curso Superior de Tecnologia em Sistemas para Internet - 2025.02

Este repositório contém uma coleção de links úteis e tutoriais para a disciplina, cobrindo tópicos como ferramentas, versionamento de código e configurações de ambiente, além de exemplos da própria disciplina.

-----

## ▶️ Como executar os exemplos?

Os exemplos deste repositório estão organizados por tópicos, acompanhando os conteúdos abordados na disciplina. Cada exemplo corresponde a um projeto Node.js, criado utilizando o comando `npm init` ou por meio do Vite. Para executar qualquer exemplo, acesse a pasta correspondente ao projeto desejado e utilize os comandos de instalação e execução de dependências (npm ou yarn) dentro dessa pasta. Dessa forma, cada exemplo pode ser testado de forma independente, facilitando o aprendizado e a prática dos conceitos apresentados.

Instalação de dependências:
```shell
npm i
```
Execução:
```shell
npm run start
```
Ou para projetos com vite:
```shell
npm run dev
```

Comandos equivalentes usando yarn:

Instalação de dependências:
```shell
yarn i
```
Execução:
```shell
yarn start
```
Ou para projetos com vite:
```shell
yarn dev
```

Pode trocar o ***npm*** pelo ***yarn***, ou outro gerenciador de pacotes compatível com o nodejs.



## 🔗 Links Úteis e Tutoriais

  * **Playlist de vídeos da disciplina**: [Link](https://www.youtube.com/playlist?list=PLYIQM64rTyLLZY2dkmXwKdhWSfn8LUgMW)

## 🛠️ Ferramentas

### NodeJS

  * **Instalação do NodeJS**: [Link](https://nodejs.org/en/download)
  * **NVM (Node Version Manager)**: [Link](https://github.com/nvm-sh/nvm)
  * **FNM (Fast Node Manager)**: [Link](https://github.com/Schniz/fnm)
  * **Chocolatey e NodeJS via NVM para Windows**: [Link](https://blog.logrocket.com/install-node-windows-chocolatey/)

### Vite
  * **Documentação do Vite**: [Link](https://vite.dev/guide/)

-----

### ZSH (Linux/Ubuntu)

  * **ZSH no Linux (Ubuntu)**: [Link](https://pt.linux-console.net/?p=13785#google_vignette)
  * **Tutorial ZSH + Plugins + Power10k Theme no Ubuntu 22.04**: [Link](https://gist.github.com/jonilsonds9/4b017d54876b279c27ce77f116f5d3ca)  
  * **Repositório do OH-MY-ZSH**: [Link](https://github.com/ohmyzsh/)
  * **Power10K ZSH Theme**: [Link](https://github.com/romkatv/powerlevel10k)

-----

### Windows

  * **Tutorial de Instalação do GIT (Use Windows Secure Channel)**: [Link](https://dicasdeprogramacao.com.br/como-instalar-o-git-no-windows/)
  * **Download Git para Windows (Usar Windows Native Secure Channel Library)**: [Link](https://git-scm.com/downloads/win)
  * **OH-MY-POSH para WINDOWS**: [Link](https://ohmyposh.dev/docs/installation/windows)
  * **Tutorial OH-MY-POSH (Versão do ZSH para Windows PowerShell)**: [Link](https://prof-gillgonzales-ifsul.notion.site/Oh-My-Posh-2551037386bf8057a457f2564059dbe1h)

-----

## 🤖 Versionamento de Código

### Git

  * **Git vs SVN**: [Link](https://prof-gillgonzales-ifsul.notion.site/SVN-vs-GIT-2551037386bf80a4b26ec69429777850)
  * **Tutorial de Instalação do Git no Windows**: [Link](https://dicasdeprogramacao.com.br/como-instalar-o-git-no-windows/)
  * **Git e Github - Criação de projetos**: [Link](https://www.freecodecamp.org/portuguese/news/tutorial-de-git-e-github-controle-de-versao-para-iniciantes/)
  * **Git e GitLab - Criação de Projeto**: [Link](https://medium.com/ekode/primeiros-passos-com-git-e-gitlab-criando-seu-primeiro-projeto-89f9001614b0)
  * **Git por Linus Torvalds**: [Link](https://www.youtube.com/watch?v=4XpnKHJAok8)
  * **Git para iniciantes**: [Link](https://www.youtube.com/watch?v=8JJ101D3knE)
  * **Pro Git - Livro Gratuito**: [Link](https://git-scm.com/book/pt-br/v2)

### Dicas de Configuração Git

#### Configurando a chave SSH para o repositório

* **Uso de chaves SSH para acesso ao GitHub**:[Link](https://docs.github.com/pt/enterprise-cloud@latest/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

Para garantir que o Git use a chave SSH correta para o seu repositório, você pode usar o seguinte comando. Isso é especialmente útil se você tiver várias chaves SSH no seu sistema.

```bash
git config core.sshCommand 'ssh -o IdentitiesOnly=yes -i ~/.ssh/NOME_DA_CHAVE -F /dev/null'
```

Substitua `NOME_DA_CHAVE` pelo nome do arquivo da sua chave SSH.

#### Instalação e Configuração no Windows

Ao instalar o Git no Windows, use a opção **HTTPS "Windows Secure Channel library"** para garantir uma configuração mais segura e compatível.
