import { useEffect, useState } from 'react';

const _data = {
  name: 'Ada',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/0/0f/Ada_lovelace.jpg',
  imageSize: 100,
};

export default function Ada() {
  //states
  const [data, setData] = useState(_data); //setState
  const [countRender, setCountRender] = useState(1); //setState

  useEffect(() => { //callback -> componentDidMount && componentDidUpdate
    console.log(countRender, 'render');
    return () => {//componentWillUnmount
      console.log('Ada será removida!!');
    };
  }, [data] );// dependência -> observa mudanças em data


  const changeData = () => {
    data.name = 'Ada Lovalace';
    data.imageSize = 200;
    setData({ ...data });
    setCountRender(countRender + 1);
  };

  //render
  return (
    <>
      <a href="https://pt.wikipedia.org/wiki/Ada_Lovelace" target="_blank">
        <img
          className="avatar"
          src={data.imageUrl}
          alt={'Photo of ' + data.name}
          style={{
            width: data.imageSize,
          }}
          onClick={changeData}
        />
      </a>
      <h1>{data.name}</h1>
    </>
  );
}
