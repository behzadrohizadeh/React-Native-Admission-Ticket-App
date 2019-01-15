import React from "react";
import {AsyncStorage,Dimensions, TextInput,StyleSheet,TouchableNativeFeedback,Text,View,Button,Image } from "react-native";
import { styles,config } from './Styles';
import {SkypeIndicator} from 'react-native-indicators';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
  {label: 'Inside', value:"inside" },
  {label: 'Outside', value: "outside" }
];

export default class Ticket extends React.Component {


constructor(props) {

    super(props);
    this.state = { 
      code:'',
      error:"" ,
      success:"" ,
      loading:false,
      value: "inside",

     


    };
  }

 
    

setTicketCode (code) 
{
    this.setState({ code:code });
}


CheckTicket = async() => 
    
    {


     this.setState({loading:true,success:"",error:""})
     const tokenuser = await AsyncStorage.getItem('@MySuperStore:tokenuser');

      const response= await  fetch(config.Urlfetch+"checkticket", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'api-token': config.apiToken,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "ticket": this.state.code,
            "admission": tokenuser,
            "type": this.state.value,

          }),
        });
if (response.status==200) {
 
       const json = await response.json();
      

       if (json.status==200) {

           
          this.setState({success:json.success,loading:false})
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

       <View>
        <RadioForm
          radio_props={radio_props}
          initial={this.state.value}
          onPress={(value) => {this.setState({value:value})}}
          formHorizontal={true}
          labelHorizontal={true}
          buttonColor={'#2196f3'}
          animation={true}
        />
      </View>

     
    {this.state.loading==true ? <SkypeIndicator color='#26A69A' /> : null } 
    {this.state.error!="" ? <Text style={styles.TexterrortStyle}>{this.state.error}</Text> : null } 
    {this.state.success!="" ? <Text style={styles.TextsuccesstStyle}>{this.state.success}</Text> : null } 

  <View>
       <TextInput
              placeholder="Tciket Code"
              onChangeText={(code) => this.setTicketCode(code)}
              value={this.state.code}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              disableFullscreenUI={true}

            /> 

       


  
     

        </View>     
       




     <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('rgb(74,20,140)')}
       onPress={()=>this.CheckTicket()}
        background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={styles.button}>
        <Text style={styles.TextStyle}>Check</Text>
      </View>
    </TouchableNativeFeedback>



     

    </View>


      
  
 
</View>
            

   
    );
    
  }
}

 
