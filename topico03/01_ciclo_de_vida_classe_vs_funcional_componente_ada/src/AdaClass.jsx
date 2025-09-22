import { Component } from 'react';

const _data = {
  name: 'Ada',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/0/0f/Ada_lovelace.jpg',
  imageSize: 100,
};

export default class AdaClass extends Component {
  //useState
  state = {
    data: _data,
    countRender: 1,
  };

  //useEffect
  componentDidMount() {
    console.log(this.state.countRender, 'render');
  }

  //useEffect
  componentDidUpdate(prevProps, prevState) {
    if (this.state.data !== prevState.data) {
      console.log(this.state.countRender, 'render');
    }
  }

  //função retornada no useEffect
  componentWillUnmount() {
    console.log('Ada será removida!!');
  }

  changeData = () => {
    let new_data = {
      name: 'Ada Lovalace',
      imageUrl: this.state.data.imageUrl,
      imageSize: 200,
    };
    this.setState({
      //useState
      data: new_data,
      countRender: this.state.countRender + 1,
    });
  };

  //return da função que cria o component
  render() {
    return (
      <>
        <a href="https://pt.wikipedia.org/wiki/Ada_Lovelace" target="_blank">
          <img
            className="avatar"
            src={this.state.data.imageUrl}
            alt={'Photo of ' + this.state.data.name}
            style={{
              width: this.state.data.imageSize,
            }}
            onClick={this.changeData}
          />
        </a>
        <h1>{this.state.data.name}</h1>
      </>
    );
  }
}
