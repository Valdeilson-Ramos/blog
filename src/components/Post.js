import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default class Post extends Component{

    render(){
        return(
            <View style={Styles.container}>
                <Text style={Styles.title1}>Aprendendo React Native</Text>
                <Text style={Styles.lorem}> O materialismo histórico ­dialético é formal ao seguir os 
                preceitos da lógicavum método de interpretação da realidade dialética. O processo 
                dialético ­ considerado considerado como a teoria do conhecimento 
                </Text>
            </View>
        );
    }
}

const Styles=StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#ADD8E6',
        margin: 20,
    },
    title1:{
        fontSize: 25,
    },
    lorem: {
        fontSize: 18,
    }
})