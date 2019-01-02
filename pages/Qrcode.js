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

export default class Qrcode extends Component {
constructor(props) {
    super(props);
    this.state = { 
           modalVisible: false,
           error:"درحال بررسی ",


    };
   
    };
  
 setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
 async onSuccess(e) {
     this.setState({modalVisible:true})

  	var code = e.data ; 
 const usertoken = await AsyncStorage.getItem('@MySuperStore:usertoken');

  	  const response= await  fetch(config.Urlfetch+"newturn", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'api-token': "jsontoken",
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          },
          body: JSON.stringify({
            "token": code,
            "user":usertoken

          }),
        });
  	  if (response.status==200) 
  	  {
       var json = await response.json();
       if (json.status==200) 
       {


         this.props.navigation.navigate("Home")
       }

       if (json.status==201) 
       {
       	     this.setState({error:json.error})

       }


  	  	
  	  }else
  	  {
  	    this.setState({error:"خطای ارتباط "})

  	  }
   
  }

  render() {
    return (
    	<View>



    	

            {this.state.loading==true ? <SkypeIndicator color='#26A69A' /> : null } 




              <View style={styles.header}>
                   <Text style={styles.TextHeader}>Check New Ticket </Text>
              </View>
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

