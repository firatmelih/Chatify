import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Text, View } from "react-native";
import {
  List,
  Avatar,
  Divider,
  FAB,
  Portal,
  Dialog,
  Button,
  Paragraph,
} from "react-native-paper";

const ChatList = (props) => {
  let x = 0;
  const [dialog, setDialog] = useState(false);
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "#dfffff",
        flex: 1,
      }}
    >
      {props.persons.map((i) => (
        <List.Item
          onPress={() => {
            navigation.navigate("Chat");
          }}
          title={`${i.name}`}
          description={`${
            i.messageLog.find(
              (x) =>
                x.id ==
                Math.max(
                  ...i.messageLog.map((m) => {
                    let x = m.id;
                    return x;
                  })
                )
            ).message
          }`}
          left={() => (
            <Avatar.Text
              label={`${i.name.substr(0, 2).toUpperCase()}`}
              size={50}
            />
          )}
        />
      ))}

      <Divider inset />

      <Portal>
        <Dialog
          onDismiss={() => {
            setDialog(false);
          }}
          visible={dialog}
        >
          <Dialog.Title>Contacts</Dialog.Title>
          <Dialog.Content>
            {props.persons.map((i) => (
              <List.Item
                title={`${i.name}`}
                description={`${i.status}`}
                left={() => (
                  <Avatar.Text
                    label={`${i.name.substr(0, 2).toUpperCase()}`}
                    size={50}
                  />
                )}
              />
            ))}
          </Dialog.Content>
        </Dialog>
      </Portal>

      <FAB
        onPress={() => {
          setDialog(true);
        }}
        style={{
          backgroundColor: "#00948f",
          position: "absolute",
          bottom: 16,
          right: 16,
        }}
        icon="plus"
      />
    </View>
  );
};

export default ChatList;
