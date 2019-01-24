import React from "react";
import ReactDOM from "react-dom";


class Foodmenu extends React.Component{
    constructor()
  {
    super();
    this.state={
      data: []
    }
  }

  componentDidMount()
  {
    <h1> JSON fetching </h1>
    const url = "http://localhost:9000/foods"; 
    
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:9000/foods');
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('GET', 'POST');

    fetch(url, {
        headers: headers,
        method: 'GET'
    })
    .then(response => response.json())
    .then(contents => console.log(contents))
    
    .catch(() => console.log("Can’t access " + url + " response. "))
   
  }

  render()
  {
    return(
        <div>
                <table>
                    <thead>
                        <th>Item</th>
                        <th>Calories</th>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
    )
  }
}
export default Foodmenu;