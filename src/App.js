import faker from '@faker-js/faker';
import React from 'react';
import { v4 } from 'uuid';
import './App.css';
import List1 from './component/List1/List1';
import List2 from './component/List2/List2';


export default class App extends React.Component{
  state={
    items: [],
    flag: false
  }
  handelAddTostart(){
    const newItem = faker.name.firstName();
    this.setState({
      items: [
        {
        item: newItem,
        id: v4()
      },
      ...this.state.items
    ]

    })
  }
  handelAddToend(){
    const newItem = faker.name.firstName();
    this.setState({
      items: [
      ...this.state.items,
      {
        item: newItem,
        id: v4()
      }      
    ]

    })
  }
  render(){
    return (
      <div className="App">
        <button onClick={()=>this.setState({flag: !this.state.flag})}>
          Click
        </button>

        <button onClick={this.handelAddTostart.bind(this)}>
          add
        </button>

        <button onClick={this.handelAddToend.bind(this)}>
          end
        </button>

        {this.state.flag
        ?<List1 items={this.state.items}/>
        :<List2 items={this.state.items}/>
        }
        
        
      </div>
    )
  }
  
}


