/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,Dimensions} from 'react-native';
widthd = Dimensions.get("window").width;
heightd=Dimensions.get("window").height;


export const config = {
	                     Urlfetch:"http://admission.royanz.com/api/v1/",
                       apiToken:"eGPMR5EoUSO8SzKSocbedkjJHKKFCTUiDsYLjs0LYJeS8o91t8FS7EqgM8tu4uu0"
	                  }



export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row:
  {
      minHeight:10,
      flexDirection:"row" ,
      justifyContent: "flex-start" ,
      alignItems:"stretch" ,
      width:"100%"
  }
 , 
 column:{
    justifyContent:"flex-start" ,
    flexDirection:"column",
    alignItems:"stretch" ,
 },
  
   cameraStyle:{    
   	height: heightd-50,
   	width:widthd,
   	marginTop:5
},
markerStyle:{

	height: widthd-60,
   	width:widthd-60,
},
 
  childimage:
  {
      height:80,
      width:80,
      borderRadius:50,
      marginTop:40
  },header:
  {
      backgroundColor :'#bf4574',
      height :60 ,
      width:"100%",
      flexDirection:"row" ,
      justifyContent: 'space-between',
      alignItems:"flex-start"
  },
 
textname:
     {
           
            
            color:"#283593",
            fontSize: 15  ,     
             marginTop:40,
    fontFamily:'IRANSansMobile'


      },TextComponentStyle:{

            fontSize: 17  ,     
         fontFamily:'IRANSansMobile'
  },
      Textnote:
      {
        width:"50%" , 
            fontFamily:'IRANSansMobile',
            color:"#78909C",
            textAlign:"center" , 
            fontSize:15


      } , 
      TextnoteValue:
      {
        width:"50%" , 
            fontFamily:'IRANSansMobile',
            color:"#283593",
            textAlign:"center" , 
            fontSize:15
          },
      TextHeader:
      {
        fontFamily:'IRANSansMobile',
            color:"#ffffff",
            textAlign:"center" , 
            fontSize:17  ,
            width:"100%" ,
            paddingTop:15
      } ,  
    byscanner:
  
            {
             position: 'absolute',
             right: 10,
             bottom: 60,

    }, 
    typeRadio:{padding:5} ,
    byticketcode:
  
            {
             position: 'absolute',
             left: 10,
             bottom: 60,

    },

    buttonticket:{
      backgroundColor: '#03A9F4',
             borderRadius: 75,
             elevation: 8,
             width: 150,
             height: 150,
             alignItems: 'center',
             justifyContent: 'center'} , 

boxstyle:{
     flex: 1,
      width:"96%",
      height: 200,
      backgroundColor:"#ffffff",
      marginTop:2,
      borderWidth:1,
      borderColor:"#cccccc" ,
      marginLeft:"2%",
      borderRadius:5

   },
TexterrortStyle:
{
            width:"100%",
            textAlign: 'center' ,
            color:"#e53935",
            fontSize: 17  ,
} , 

TextsuccesstStyle:

{
  width:"100%",
            textAlign: 'center' ,
            color:"#1B5E20",
            fontSize: 17  ,
},


MainContainer :{
justifyContent: 'center',
flex:1,
backgroundColor :'#C2185B'
},
box :{
justifyContent: 'center',
backgroundColor :'#ffffff',
height:400,
margin:5,
padding:5,
borderRadius:5
},
TextInputStyleClass: {
textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
borderColor: '#2196F3',
borderRadius: 5 ,
fontFamily:'IRANSansMobile'

},button :
 {
  width:'100%', 
  height:80,
  marginTop:30 , 


 },
 TextStyle:
 {
   fontFamily:'IRANSansMobile',
   fontSize: 18 , 
    textAlign:'center',
    backgroundColor:'#4A148C',
    padding:15,
    color:"#ffffff",
    borderRadius:5
 }
});