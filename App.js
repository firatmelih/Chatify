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
      component={ChatList}
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
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
