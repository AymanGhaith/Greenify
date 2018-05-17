import React from 'react';

import {ScrollView, StyleSheet, Text, View ,TouchableOpacity,TextInput,Image} from 'react-native';
export default class PlantList extends React.Component {
    constructor(){
    super();
   
    this.state={
      plants: []
    };
  }



  plantRetrieve = () => {
   fetch('http://192.168.1.76:3000/plants')
    .then((response) => response.json())
    .then((responseJson) => {
      // console.log(responseJson)
      this.setState({
        plants:responseJson
      });
    })
    .catch((error) => {
      console.error(error);
    }); 
}
//   .then(function(data) {
//     console.log(data)
//     this.setState({
//       plants:data
//     })
//   })
//   }

render() {
  return (

    <View style={styles.container}>
      <Text> ya hala walla</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
    justifyContent: 'center',

  },
   input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
   },
   text:{
    fontSize:50,
    textAlign:'center',
    paddingBottom:60,
   },
  button: {
    padding:20,
    borderWidth:1,
    backgroundColor:'green'
  }
});