import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
    BottomTabBarButtonProps,
    createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";

import AccountScreen from "../screens/Account";
import AccountSettingsScreen from "../screens/AccountSettings";
import AddAddressScreen from "../screens/AddAddress";
import AddAllergiesScreen from "../screens/AddAllergies";
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
import ManagePaymentMethods from "../screens/ManagePaymentMethods";
import UpdatePaymentMethodScreen from "../screens/UpdatePaymentMethod";

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
                <Ionicons name="home-outline" size={24} color="black" />
            )}
            {title === "Menu" && (
                <Ionicons name="restaurant-outline" size={24} color="black" />
            )}
            {title === "Orders" && (
                <MaterialIcons name="list-alt" size={24} color="black" />
            )}
            {title === "Account" && (
                <Feather name="user" size={24} color="black" />
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

                <Stack.Screen
                    name="AccountSettings"
                    component={AccountSettingsScreen}
                />
                <Stack.Screen name="AddAddress" component={AddAddressScreen} />
                <Stack.Screen
                    name="AddAllergies"
                    component={AddAllergiesScreen}
                />
                <Stack.Screen
                    name="AddPaymentMethod"
                    component={AddPaymentMethodScreen}
                />
                <Stack.Screen name="Basket" component={BasketScreen} />
                <Stack.Screen
                    name="EditAccount"
                    component={EditAccountScreen}
                />
                <Stack.Screen name="Menu" component={MenuScreen} />
                <Stack.Screen name="NotFound" component={NotFoundScreen} />
                <Stack.Screen
                    name="OrderConfirmation"
                    component={OrderConfirmationScreen}
                />
                <Stack.Screen
                    name="ManagePaymentMethods"
                    component={ManagePaymentMethods}
                />
                <Stack.Screen
                    name="UpdatePaymentMethod"
                    component={UpdatePaymentMethodScreen}
                />
                <Stack.Screen name="Product" component={ProductScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
