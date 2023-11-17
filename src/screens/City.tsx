import React from "react";
import { 
    SafeAreaView,
    Text,
    StyleSheet, 
    ImageBackground, 
    StatusBar,
    View 
} from "react-native";

import { Feather as Icon } from "@expo/vector-icons";

const City = () => {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require("../../assets/city-background.jpg")} style={styles.imageLayout}>
            <Text style={[styles.cityName, styles.cityText]}>Omaha</Text>
            <Text style={[styles.countryName, styles.cityText]}>USA</Text>
            <View style={styles.populationWrapper}>
                <Icon name={'user'} size={50} color={'white'} />
                <Text style={styles.populationText}>500,000</Text>
            </View>
            <View style={styles.riseSetWrapper}>
                <Icon name={'sunrise'} size={50} color={'white'} />
                <Text style={styles.riseSetText}>7:15:45am</Text>
                <Icon name={'sunset'} size={50} color={'white'} />
                <Text style={styles.riseSetText}>5:05:17pm</Text>
            </View>
            </ImageBackground>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayout: {
        flex: 1
    },
    cityName: {
        fontSize: 40
    },
    countryName: {
        fontSize: 30
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationWrapper: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'white',
        fontWeight: 'bold'
    },
    riseSetWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }

})

export default City;