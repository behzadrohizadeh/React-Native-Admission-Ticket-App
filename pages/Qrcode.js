'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,AsyncStorage
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { styles,config } from './Styles';
import {SkypeIndicator} from 'react-native-indicators';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


var radio_props = [
  {label: 'Inside', value:"inside" },
  {label: 'Outside', value: "outside" }
];
export default class Qrcode extends Component {
constructor(props) {
    super(props);
    this.state = { 
        error:"" ,
        success:"" ,
        loading:false,
        value: "inside",


    };
   
    };
  
 
 async onSuccess(e) {
     this.setState({loading:true,success:"",error:""})

  	var code = e.data ; 

     const tokenuser = await AsyncStorage.getItem('@MySuperStore:tokenuser');

      const response= await  fetch(config.Urlfetch+"checkticket", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'api-token': config.apiToken,
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          },
          body: JSON.stringify({
            "ticket": code,
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
    	<View>


     <View style={styles.header}>
         <Text style={styles.TextHeader}>Check New Ticket </Text>
      </View>

       <View style={styles.typeRadio}>
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



     



		      <QRCodeScanner
		        onRead={this.onSuccess.bind(this)}
		        showMarker={true}
		        reactivate={false}
		        fadeIn={false}
		         cameraStyle={styles.cameraStyle}
		         markerStyle={styles.markerStyle}
		         />
      </View>
    );
  }
}

