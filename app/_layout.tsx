import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function Layout(){
    return (
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home screen",
            tabBarIcon: ({size,color}) => (
              <AntDesign name="menufold" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="counter"
          options={{
            title: "Counter screen",
            headerShown: false,
            tabBarIcon: ({size,color}) => (
              <AntDesign name="clockcircleo" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="idea"
          options={{
            title: "idea screen",
            tabBarIcon: ({size,color}) => (
              <FontAwesome6 name="lightbulb" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    );
}