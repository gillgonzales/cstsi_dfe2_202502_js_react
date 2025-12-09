import styled from 'styled-components';

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
   table-layout: fixed;
    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #f2f2f2;
         overflow: hidden;
         text-overflow: clip;
    }

    tr:nth-child(even) {
        background-color: lightgray;
    }

    tr:hover {
        background-color: #f1f1f1;
    }

     td:first-child, th:first-child{
         min-width: 50px;
     }

    td:nth-child(2), th:nth-child(2) {
        /* background-color:red; */
        min-width: 15rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    td:last-child, th:last-child{
        width: 165px;
    }


    @media(prefers-color-scheme: dark) {

         tr:nth-child(even) {
            background-color: blue;
        }

        tr:nth-child(even) {
            background-color: gray;
        }

        tr:hover {
            background-color: #101010;
        }
    }
`;