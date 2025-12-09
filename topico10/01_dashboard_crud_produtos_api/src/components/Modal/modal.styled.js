import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
`;

export const ModalStyled = styled.div`

  color: var(--second-color);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  background-color: white;
  border: 2px solid var(--second-color);
  border-radius: 12px;
  position:  absolute;
  min-width: 250px;
  width: 80%;
  top: 5vh;
  height: auto;
  max-height: 700px;
  padding: 2.5vh;
  /* left: calc(50% - 125px); */
  /* bottom: 70px; */
  >div{
    width: 95%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center
  }
  h1{
    margin-bottom: .3rem;
  }

  select{
     outline: 0;
    background: var(--main-bg-color);
    width: 100%;
    border: 2px solid var(--ligth-gray-100);
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    transition: all 0.3s;
    option{
        padding: 5px;
    }
  }

  @media (min-width: 480px) {
    width: 70vw;
  }

  @media (min-width: 768px) {
    width: 65vw;
  }

  @media (prefers-color-scheme: dark) {

      background-color: #3f3f3f;
      color: var(--primary-color);
      
      input[type=text]{
        color:var(--second-color);
      }
  }
`