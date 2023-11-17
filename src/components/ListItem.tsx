import React from "react";
import { View, Text, StyleSheet } from "react-native"
import { Feather as Icon } from '@expo/vector-icons';

interface ItemProps {
    dt_txt: string;
    min: number;
    max: number;
    condition: string;
  };
  
  const ListItem: React.FC<ItemProps> = ({ dt_txt, min, max, condition }) => {

    const {item, date, temp } = styles
    return (
      <View style={item}>
        <Icon name={'sun'} size={50} color={"black"} />
        <Text style={date}>{dt_txt}</Text>
        <Text style={temp}>{min}</Text>
        <Text style={temp}>{max}</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'lightblue'
    },
    temp: {
        color: 'black',
        fontSize: 20
    },
    date: {
        color: 'black',
        fontSize: 15
    }
})

  export default ListItem;