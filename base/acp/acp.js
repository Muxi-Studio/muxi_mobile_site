import { h, render, Component } from "preact";




export default function  changeComponent(WrappedComponent,newData) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data: newData
      };
    }
  render({}, {}) {
    return (
          <WrappedComponent appChangePage = {this._onChangePage.bind(this)}  data = {this.state.data} />
      );
    }
    
  }
}

// export default (WrappedComponent, data) => {
//   class NewComponent extends Component {
//     constructor() {
//       this.state = {
//         data: data
//       };
//     }
//     render({}, {}) {
//       return (
//         <Scroll data={this.state.data}>
//           <WrappedComponent data={this.state.data} />
//         </Scroll>
//       );
//     }
//   }
// };
