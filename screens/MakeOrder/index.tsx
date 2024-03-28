import { useNavigation } from "@react-navigation/native";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";

import IOrderItem from "../../interfaces/OrderItem";
import ordersData from "../../data/orderData";

function OrderAddress() {
    return (
        <View>
            <Text>Order Address</Text>
        </View>
    );
}

function OrderItemCard({ item }: { item: IOrderItem }) {
    return (
        <View>
            <Text>{item.id}</Text>
        </View>
    );
}

function OrderConfirmationScreen() {
    const customerId = "22";

    return (
        <FlatList
            data={
                ordersData.find(
                    (order) =>
                        order.customerId === customerId &&
                        order.status === "basket"
                )?.orderItems
            }
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <OrderItemCard item={item} />}
        />
    );
}

function OrderTimeScreen() {
    const navigation = useNavigation();

    return (
        <View>
            <Pressable
                onPress={() => {
                    navigation.navigate("OrderConfirmation");
                }}
            >
                <Text>Next</Text>
            </Pressable>
        </View>
    );
}

function OrderOptions() {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Order Options</Text>
            <Pressable
                onPress={() => {
                    navigation.navigate("OrderAddress");
                }}
            >
                <Text>Delivery</Text>
            </Pressable>
            <Pressable
                onPress={() => {
                    navigation.navigate("OrderTime");
                }}
            >
                <Text>Collection</Text>
            </Pressable>
        </View>
    );
}
function BookTableScreen() {
    return (
        <View>
            <Text>Book Table</Text>
        </View>
    );
}

export default function MakeOrderScreen() {
    return (
        <ScrollView
            style={{ height: "100%", width: "100%" }}
            bounces={false}
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
        >
            <OrderOptions />
            <OrderAddress />
            <BookTableScreen />
            <OrderTimeScreen />
            <OrderConfirmationScreen />
        </ScrollView>
    );
}
