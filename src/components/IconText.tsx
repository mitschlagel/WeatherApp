import React from "react"
import { Text, View, StyleSheet, TextStyle } from "react-native"

import { Feather as Icon } from "@expo/vector-icons"

interface IconTextProps {
    iconName: keyof typeof Icon.glyphMap
    iconColor: string
    bodyText: string
    bodyTextStyles: {}
}

const IconText: React.FC<IconTextProps> = ({ iconName, iconColor, bodyText, bodyTextStyles }) => {

    const { container, textTheme } = styles

    return(
        <View style={container}>
            <Icon name={iconName} size={50} color={iconColor} />
            <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    textTheme: {
        fontWeight: 'bold'
    }
})

export default IconText

