import React from "react";
import { View, Text } from "react-native";

interface RowTextProps {
  messageOne: string;
  messageTwo: string;
  containerStyles: {};
  messageOneStyles: {};
  messageTwoStyles: {};
}
const RowText: React.FC<RowTextProps> = ({
  messageOne,
  messageTwo,
  containerStyles,
  messageOneStyles,
  messageTwoStyles,
}) => {
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  );
};

export default RowText;
