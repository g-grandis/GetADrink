import './App.css'; 
import React from "react"
import ReactDOM from "react-dom"


class App extends React.Component{
constructor(props){
    super(props)
    this.state = {
        drinkImg :'',
        drinkName : '',
        drinkCategory :''
        } 
    }

getDrink = async () =>{
    const body = await fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php").then( r => r.json());
    this.setState({
        drinkName : body.drinks[0].strDrink,
        drinkImg : body.drinks[0].strDrinkThumb,
        drinkCategory : body.drinks[0].strCategory
    })
    console.log(this.state);
}

    render(){
        const drink = this.state;
        return(
            <div>
                <div class="container">
                    <div class="center">
                        <button 
                        type="button" 
                        class="btn btn-info" 
                        onClick ={() => this.getDrink()} >Get a Drink!</button>
                        </div>
                </div>
                <div class="container2">
                    <div class="">
                        <h2>{this.state.drinkName}</h2>
                        <img class="img"src={this.state.drinkImg}></img>
                        <h4>Drink category: {this.state.drinkCategory}</h4>
                    </div>
                </div>
            </div>

        )
    }



}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  