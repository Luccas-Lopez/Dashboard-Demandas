import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home";
import { Details } from "./pages/details";
import { Form } from "./pages/form";

import IconOcticon from "react-native-vector-icons/Octicons";
import IconFeather from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <IconOcticon color="#1BD15D" size={24} name="apps" />;
            }
            return <IconOcticon color="#9B9B9B" size={24} name="apps" />;
          },
        }}
        />
        <Tab.Screen
          name="Form"
          component={Form}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
                return <IconFeather name="plus" size={40} color="#fff" style={{backgroundColor: "#1BD15D", borderRadius: 8}} />
            }
            return <IconFeather name="plus" size={30} color="#9B9B9B" />
        },
    }}
    />
      <Tab.Screen
        name="details"
        component={Details}
        options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
              if (focused) {
                return <IconOcticon color="#1BD15D" size={24} name="bell-fill" />;
              }
              return <IconOcticon color="#9B9B9B" size={24} name="bell-fill" />;
            },
        }}
        />
    </Tab.Navigator>
  );
}
