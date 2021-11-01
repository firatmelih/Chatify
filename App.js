import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatList from "./screens/ChatList";
import Settings from "./screens/Settings";
import Chat from "./screens/Chat";
import Register from "./screens/Register";
import Login from "./screens/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-native-paper";

const dummyContacts = [
  {
    name: "John Doe",
    id: 1,
    status: "What a lovely day!",
    messageLog: [
      {
        id: 1,
        message: "Hey buddy!",
        date: Date("27.01.2021"),
      },
      {
        id: 2,
        message: "Are you okay buddy?",
        date: Date("28.01.2021"),
      },
    ],
  },
  {
    name: "Jane Doe",
    id: 2,
    status: "What a bad day!",
    messageLog: [
      {
        id: 1,
        message: "Hi I am Jane!",
        date: Date("27.01.2021"),
      },
      {
        id: 2,
        message: "Would you like to talk?",
        date: Date("28.01.2021"),
      },
    ],
  },
];

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const TabNavigator = () => (
  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        return (
          <Ionicons
            name={route.name === "Chat List" ? "chatbubbles" : "settings"}
            color={color}
            size={size}
          />
        );
      },
    })}
  >
    <Tabs.Screen
      options={{
        headerStyle: {
          backgroundColor: "#00948f",
        },
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
      name="Chat List"
      component={() => <ChatList persons={dummyContacts} />}
    />

    <Tabs.Screen
      name="Settings"
      options={{
        headerStyle: {
          backgroundColor: "#00948f",
        },
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
      component={Settings}
    />
  </Tabs.Navigator>
);

const App = () => {
  let selected_id = 0;
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            options={{ headerTitle: `${dummyContacts[selected_id].name}` }}
            name="Chat"
            component={() => <Chat person={dummyContacts[selected_id]} />}
          />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
