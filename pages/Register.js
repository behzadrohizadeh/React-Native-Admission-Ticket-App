import React from "react";
import {AsyncStorage,Dimensions, TextInput,StyleSheet,TouchableNativeFeedback,Text,View,Button,Image } from "react-native";
import { styles,config } from './Styles';
import {SkypeIndicator} from 'react-native-indicators';



export default class Register extends React.Component {


constructor(props) {

    super(props);
    this.state = { 
      name:'',
      lastname:"",
      mobile:"",
      error:"" ,
      loading:false
     


    };
  }

 
    

setMobile (mobile) 
{
    this.setState({ mobile:mobile ,loading:false});
}
setPassword(password) 
{
    this.setState({ password:password,loading:false });
}

createuser = async() => 
    
    {


     this.setState({loading:true})
    
      const response= await  fetch(config.Urlfetch+"login", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'api-token': config.apiToken,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "mobile": this.state.mobile,
            "password": this.state.password,

          }),
        });
if (response.status==200) {
 
       const json = await response.json();
      


       if (json.status==200) {

           this.setState({loading:false}) ; 
            await AsyncStorage.setItem('@MySuperStore:tokenuser', json.token);
             this.props.navigation.navigate("Home");

            
            }
           
        
        if (json.status==201) {
          this.setState({error:json.error,loading:false})

        }
         

          }
          else
          {
          this.setState({error:"Error From Server",loading:false})
          

          }


          
        }

 
 render() {
    return (
      

      <View style={styles.MainContainer}>

     
     
       <View style={styles.box}>

     
    {this.state.loading==true ? <SkypeIndicator color='#26A69A' /> : null } 
    {this.state.error!="" ? <Text style={styles.TexterrortStyle}>{this.state.error}</Text> : null } 

  <View>
       <TextInput
              placeholder="Mobile"
              onChangeText={(mobile) => this.setMobile(mobile)}
              value={this.state.mobile}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              keyboardType='numeric'
               disableFullscreenUI={true}

            /> 

        <TextInput
          placeholder="Password"
          onChangeText={(assword) => this.setPassword(assword)}
          value={this.state.assword}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          disableFullscreenUI={true}
        />


  
     

        </View>     
       




     <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('rgb(74,20,140)')}
       onPress={()=>this.createuser()}
        background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={styles.button}>
        <Text style={styles.TextStyle}>Login  </Text>
      </View>
    </TouchableNativeFeedback>



     

    </View>


      
  
 
</View>
            

   
    );
    
  }
}

 
