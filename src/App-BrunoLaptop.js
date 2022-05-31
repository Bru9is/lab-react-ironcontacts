import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

import contactsData from './contacts.json'

function App() {
  
  const [ fiveFirst, setContacts ] = useState(contactsData.slice(0,5))
  
  return(
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <th>Name</th>
        <th
          </th>

        </tr>
        </table>  
    
    </div>
  ) 
  

}
export default App;
