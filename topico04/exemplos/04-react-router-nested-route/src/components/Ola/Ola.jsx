import { Link, useParams } from 'react-router';

export default function Ola() {
  let { name } = useParams();

  return (
    <>
      <div>Ola {name || 'Mundo'} !!!</div>
      <dir>
        <Link to="/">{'< voltar'}</Link>
      </dir>
    </>
  );
}
