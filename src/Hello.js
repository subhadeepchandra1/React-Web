import React,{Component} from 'react';
import './Hello.css';

class Hello extends Component {
  render() {
    return (
    <div class="f1 tc">
    <h1>Hello</h1>
    <h2>{this.props.greeting}</h2>
    </div>
    );
  }
}

export default Hello;
