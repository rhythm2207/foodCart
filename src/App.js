import './App.css';
import React from 'react'
import Items from './Components/list-component/list-component'
import axios from 'axios'

class App extends React.Component {



  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  getData() {
    axios.get('https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/')
      .then(res => {
        var data = res.data
        this.setState({ items: data.results }, () => console.log(this.state.items))
      })
  }
  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <div className="App">
        <Items name='Name' cogs='COGS'
          last="Last Updated" CostPrice="Cost Price" salePrice="Sale Price" tags="Tags/Actions"></Items>
        <div>
          {
            this.state.items.map(item => (
              <Items
                name={item.name}
                last={item.last_updated}
                cogs={item.cogs}
                costPrice={item.cost_price}
                salePrice={item.sale_price}
                grossMargins={item.gross_margin}
                tags="" >
              </Items>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
