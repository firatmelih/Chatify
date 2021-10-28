import React from "react";
import { Text, View } from "react-native";
import {
  List,
  Avatar,
  Divider,
  FAB,
  Portal,
  Dialog,
  Paragraph,
} from "react-native-paper";

const ChatList = () => {
  return (
    <View
      style={{
        backgroundColor: "#dfffff",
        flex: 1,
      }}
    >
      <List.Item
        title="John Doe"
        description="Hey this is a massage from John!"
        left={() => <Avatar.Text label="JD" size={50} />}
      />

      <Divider inset />

      <Portal>
        <Dialog visible={true}>
          <Dialog.Title>Contacts</Dialog.Title>
          <Dialog.Content>
            <List.Item
              title="Xazard Doe"
              description="Lovely Day!"
              left={() => <Avatar.Text label="XD" size={50} />}
            />
          </Dialog.Content>
        </Dialog>
      </Portal>

      <FAB
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
