import { MaterialIcons } from "@expo/vector-icons";
import {
    BottomTabBarButtonProps,
    createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";

import AccountScreen from "../screens/Account";
import AddAddressScreen from "../screens/AddAddress";
import AddPaymentMethodScreen from "../screens/AddPaymentMethod";
import BasketScreen from "../screens/Basket";
import EditAccountScreen from "../screens/EditAccount";
import HomeScreen from "../screens/Home";
import MenuScreen from "../screens/Menu";
import MenusScreen from "../screens/Menus";
import NotFoundScreen from "../screens/NotFound";
import OrderConfirmationScreen from "../screens/OrderConfirmation";
import OrdersScreen from "../screens/Orders";
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
                component={MenusScreen}
                options={{
                    tabBarButton: (props) => (
                        <TabButton props={props} title="Menu" />
                    )
                }}
            />
            <Tab.Screen
                name="OrderTabs"
                component={OrdersScreen}
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
                <Stack.Screen name="Menu" component={MenuScreen} />
                <Stack.Screen name="Product" component={ProductScreen} />
                <Stack.Screen name="Basket" component={BasketScreen} />
                <Stack.Screen
                    name="AddPaymentMethod"
                    component={AddPaymentMethodScreen}
                />
                <Stack.Screen name="AddAddress" component={AddAddressScreen} />
                <Stack.Screen
                    name="EditAccount"
                    component={EditAccountScreen}
                />
                <Stack.Screen name="NotFound" component={NotFoundScreen} />
                <Stack.Screen
                    name="OrderConfirmation"
                    component={OrderConfirmationScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
