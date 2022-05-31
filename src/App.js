import "./App.css";

import { useState } from 'react';
 
import contactsData from './contacts.json';



function App() {

  const [fiveFirst, setContacts] = useState(contactsData.slice(0,5))
  const [updatedContacts, setAddContact] = useState()
  
  
  
  
   
  const addContact = () => {
    const getRandom = contactsData[Math.floor(Math.random() * contactsData.lenght)]
    const updatedFiveFirst = [...fiveFirst, getRandom]
    setContacts(updatedFiveFirst)
    console.log(getRandom)
  }
  
  return (
  
    <div className="App">

        <h2>Iron Contacts</h2>

        <button onClick={addContact}>Add Random Contact</button>

        <table className="tableHead">
          <tr>
            <th>Picture: </th>
            <th>Name:</th>
            <th>Popularity:</th>
            <th>Won Oscar:</th>
            <th>Won Emmy:</th>
          </tr>
        </table>

        {fiveFirst.map(contact => {
          return (
          
            <tr>
              <td><img src={contact.pictureUrl} alt=""/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              {contact.wonOscar && <td>Got the Oscar Award! </td>}
              {contact.wonEmmy && <td>Got the Emmy Award! </td>}
              
            </tr>
          
          )
        })}
    </div>
  )
}
export default App;
