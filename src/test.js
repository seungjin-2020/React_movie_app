/*
//import PropTypes from "prop-types";

constructor(props) {
    super(props);
    console.log("hello");
  }
  // Object 이고 직접적으로 값을 변경할수 없다
  state = {
    count: 0
  };
  add = () => {
    console.log("add");
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    console.log("minus");
    this.setState(current => ({ count: current.count - 1 }))
  };
  componentDidUpdate(){
     console.log("Update");
  }
  componentDidMount(){
    console.log("Mount");
  }

   render(){
     console.log("render");
     return(
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick = {this.add} >Add</button>
        <button onClick = {this.minus}>Minus</button>
      </div>
     );
   }
*/