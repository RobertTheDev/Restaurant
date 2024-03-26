import { MaterialIcons } from "@expo/vector-icons";
import {
    BottomTabBarButtonProps,
    createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";

import AccountScreen from "../screens/Account";
import HomeScreen from "../screens/Home";
import ProductScreen from "../screens/Product";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function TabButton({
    props,
    title
}: {
    props: BottomTabBarButtonProps;
    title: string;
}) {
    return (
        <Pressable
            {...props}
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 8
            }}
        >
            {title === "Home" && (
                <MaterialIcons name="home" size={24} color="black" />
            )}
            {title === "Menu" && (
                <MaterialIcons name="restaurant-menu" size={24} color="black" />
            )}
            {title === "Orders" && (
                <MaterialIcons name="list-alt" size={24} color="black" />
            )}
            {title === "Account" && (
                <MaterialIcons name="settings" size={24} color="black" />
            )}
            <Text style={{ fontSize: 10, fontWeight: "600" }}>{title}</Text>
        </Pressable>
    );
}

function HomeTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="HomeTabs"
                component={HomeScreen}
                options={{
                    tabBarButton: (props) => (
                        <TabButton props={props} title="Home" />
                    )
                }}
            />
            <Tab.Screen
                name="MenuTabs"
                component={HomeScreen}
                options={{
                    tabBarButton: (props) => (
                        <TabButton props={props} title="Menu" />
                    )
                }}
            />
            <Tab.Screen
                name="OrderTabs"
                component={HomeScreen}
                options={{
                    tabBarButton: (props) => (
                        <TabButton props={props} title="Orders" />
                    )
                }}
            />
            <Tab.Screen
                name="AccountTabs"
                component={AccountScreen}
                options={{
                    tabBarButton: (props) => (
                        <TabButton props={props} title="Account" />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Home" component={HomeTabs} />
                <Stack.Screen name="Product" component={ProductScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
