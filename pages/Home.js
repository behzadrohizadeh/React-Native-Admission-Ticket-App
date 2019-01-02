/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, View,ScrollView,FlatList,Image,AsyncStorage,TouchableOpacity} from 'react-native';
import PTRView from 'react-native-pull-to-refresh';
import { styles,config } from './Styles';


export default class Home extends Component<Props> {
constructor(props) {
    super(props);
    this.state = { 
     keylist:"00",
      myturns:[] ,
      percentage:40

    };
  }
    _refresh() {
      this.FetchData()
    return new Promise((resolve) => {
      setTimeout(()=>{resolve()}, 2000)
    });


  }


async componentWillMount() 

  {


 const usertoken = await AsyncStorage.getItem('@MySuperStore:usertoken');
   if (!usertoken) 
   {
   // this.props.navigation.navigate('Register');
   }


  }

  

async FetchData ()
  {

    const usertoken = await AsyncStorage.getItem('@MySuperStore:usertoken');

  }
 componentDidMount = () => {
 

  this._sub = this.props.navigation.addListener(
    'didFocus',
    this._componentFocused
  );
}

componentWillUnmount() {
  this._sub.remove();
}

_componentFocused = () => {
 this.FetchData()
}
  render() {

    return (
      <View style={styles.container}>

      

      <PTRView onRefresh={(e)=>this._refresh(e)} >

        

             <View style={styles.header}> 
                 <Text style={styles.TextHeader}> Admission Scanner </Text> 
              </View>

              
                
                     <View style={styles.boxstyle}>

                    <View style={styles.row}>
                        <Image  style={styles.childimage} source={{ uri: "data:image/jpeg;base64,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" }} />
                        <Text  style={styles.textname}>Behzad Rohizadeh</Text>

                    </View>

                    <View style={styles.row}>
                        <Text  style={styles.Textnote}>Inside </Text>
                        <Text  style={styles.Textnote}>OutSide </Text>
                    </View>

                    <View style={styles.row}>
                        <Text  style={styles.TextnoteValue}> 12 </Text>
                        <Text  style={styles.TextnoteValue}> 12 </Text>
                    </View>



                     </View>
              
                  
               

      



         
          </PTRView>


          <View style={styles.byscanner} >
             <TouchableOpacity onPress={() => this.props.navigation.navigate("Qrcode")} 
             style={styles.buttonticket}
             >
              <Text style={{ fontSize: 17,color: 'white'}}> BY Scanner</Text>
            </TouchableOpacity>
          </View> 

           <View style={styles.byticketcode} >
             <TouchableOpacity onPress={() => this.props.navigation.navigate("Ticket")} 
             style={styles.buttonticket}
             >
              <Text style={{ fontSize: 17,color: 'white'}}> BY Ticket Code</Text>
            </TouchableOpacity>
          </View> 


 

  </View>
    );
  }
}

