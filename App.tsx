
import React from 'react';
import { Text, View, Button } from 'react-native'
import CompanyData from "./components/companyData"
let  age = 39;
var email = "vikas@immortal.in";
function fruit(){
  return "apple";
}
function App() {
  const name = "Vikas";
  return (
    <View>
      <Text style={{
        fontSize: 30
      }}>Components</Text>
      <UserData/>
      <CompanyData/>
    </View>
  )
}

const UserData = () => {
  return(
    <View>
      <Text style={{fontSize: 20}}>Name: Vikas</Text>
      <Text style={{fontSize: 20}}>Age: 19</Text>
      <Text style={{fontSize: 20}}>Email: Vikash@gla.ac.in</Text>
    </View>
  ) 
}


export default App;