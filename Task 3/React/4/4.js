//class component
class App extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            clicked: true
        }
      };
  
handleClick() {
  var clicked = this.state.clicked;
  this.setState( {clicked: !clicked} )
}

//rendering component and returning div element containing data to be displayed on the page 
render() {
  return(<div>   
            <div className="header">
                <h2>{this.state.clicked ? 'click to hide data':'click to show data'}</h2>    
                <button type="button" onClick={this.handleClick.bind(this)} className="btn btn-primary">                            
                 {this.state.clicked ? 'hide' : 'show'}</button>
            </div>
            <div className={!this.state.clicked ? 'hide' : 'show'}>   
                <Data items={items} />      
            </div>  
         </div> //enclosing div 
         ) // return     
        } // render   
} // App component

//functional stateless component (added to App component as sub-component)
function Data(props) {
    return (
        <table>
        <thead className="thead-inverse">
         <tr>
           <th>Id</th>
           <th>First name</th>
           <th>Last name</th>
           <th>Country</th>
          </tr>
         </thead>
         <tbody>
          {props.items.map((item) =>
           <tr keys={item.id}>
            <td>{item.id}</td>              
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.country}</td>
         </tr>
           )}
         </tbody>                           
         </table> 
)}
          
//fake data in JSON format
const items = [{
  "id": 1,
  "first_name": "Troy",
  "last_name": "Sollas",
  "country": "Ukraine"
}, {
  "id": 2,
  "first_name": "Georgia",
  "last_name": "Ratt",
  "country": "Sweden"
}, {
  "id": 3,
  "first_name": "Carita",
  "last_name": "Skelhorn",
  "country": "China"
}, {
  "id": 4,
  "first_name": "Harmony",
  "last_name": "Henden",
  "country": "Indonesia"
}, {
  "id": 5,
  "first_name": "Antony",
  "last_name": "Dyble",
  "country": "Mexico"
}, {
  "id": 6,
  "first_name": "Prescott",
  "last_name": "Lamey",
  "country": "Colombia"
}]

//mounting App component to the DOM         
ReactDOM.render(<App />, document.getElementById('main'));