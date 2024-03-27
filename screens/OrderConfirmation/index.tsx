import { FlatList, Text, View } from "react-native";

import orderData from "../../data/orderData";
import IOrderItem from "../../interfaces/OrderItem";

function OrderItemCard({ item }: { item: IOrderItem }) {
    return (
        <View>
            <Text>{item.id}</Text>
        </View>
    );
}

export default function OrdersScreen() {
    const customerId = "22";

    return (
        <FlatList
            data={
                orderData.find(
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
