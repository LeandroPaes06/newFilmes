import React from 'react'
import {View, Text, Image} from 'react-native'
import { useRoute } from '@react-navigation/native';
import styles from './style';



export default function Details(){

  const routes = useRoute();
    return(
            <View style ={styles.container}>
                <Text> {routes.params.titulo} </Text>
                <Text>{routes.params.nota}</Text>
                <Image style={styles.imageBanner} source ={require(`../../Img/${routes.params.imagem}`)}></Image>
            </View> 
    
        )


}