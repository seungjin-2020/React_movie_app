import React from "react";

class App extends React.Component{
  state = {
    islLoading: true
  };

  componentDidMount() {
    setTimeout(() =>{
      this.setState({islLoading: false});
    }, 6000);
  }
   render(){
     const { islLoading } = this.state;
   return <div>{islLoading ? "Loading" : "We are ready"}</div>;
   }
}

export default App;