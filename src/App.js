import './App.css';
import React from 'react'
import Items from './Components/list-component/list-component'
import axios from 'axios'
import ListItems from './Components/list-item/list-item'
import Button from './Components/button/button'
import MarginRecipes from './Components/margin-recipes/margin-recipes'

let incorrect = [];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [],
      isIncorrect: "false",
      checked: false
    }
  }

  getData() {
    axios.get('https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/')
      .then(res => {
        var data = res.data
        this.setState({ items: data.results }, () => console.log(this.state.items))
      })
  }

  isIncorrect = () => {

    this.state.items.map((item) => (
      item.is_incorrect
        ? incorrect.push(item)
        : ""

    ))
  }

  onClickIncorrect = () => {
    this.setState({ isIncorrect: "true" }, () => console.log(this.state.isIncorrect))
  }

  onClickAllRecipes = () => {
    this.setState({ isIncorrect: "false" })
  }
  componentDidMount() {
    this.getData()
  }

  onClickCheckbox = () => {
    this.setState({ checked: !(this.state.checked) })
  }
  render() {
    // Top boxes are not properly made as no proper data was given (2nd and 3rd APIs didnt had any data)
    // Proper Functionality to the buttons also not provided as there was no data
    return (
      <div className="App">
        <div className="margin">
          <MarginRecipes heading="High Margin Recipes"></MarginRecipes>
          <MarginRecipes heading="Low Margin Recipes"></MarginRecipes>
          <MarginRecipes heading="Top Fluctuating Recipes"></MarginRecipes>
        </div>
        <Button onClickIncorrect={this.onClickIncorrect} onClickAllRecipes={this.onClickAllRecipes}></Button>

        <Items checked={this.state.checked} onClickCheckbox={this.onClickCheckbox} name='Name' cogs='COGS'
          last="Last Updated" costPrice="Cost Price" salePrice="Sale Price" grossMargins="Gross Margins" tags="Tags/Actions" color="skyblue"></Items>

        {
          this.state.isIncorrect === "true"
            ? <div>
              {incorrect.map((item, i) => (
                <div key={item.id}>
                  <ListItems item={item} i={i}></ListItems>
                </div>
              ))}
            </div>
            :
            <div>
              {this.state.items.map((item, i) => (
                <div key={item.id}>
                  <ListItems item={item} checked={this.state.checked} i={i}></ListItems>
                </div>
              ))}
            </div>
        }
      </div >
    );
  }
}

export default App;
