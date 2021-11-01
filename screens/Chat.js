import React from "react";
import { Text, View } from "react-native";

const Chat = (props) => {
  return (
    <View>
      {props.person.messageLog.map((i) => (
        <Text>{i.message}</Text>
      ))}
    </View>
  );
};

export default Chat;
