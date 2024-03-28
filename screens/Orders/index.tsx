import { format } from "date-fns";
import { FlatList, Text, View } from "react-native";

import orderData from "../../data/orderData";
import IOrderItem from "../../interfaces/OrderItem";

function OrderItemCard({ item }: { item: IOrderItem }) {
    return (
        <View>
            <Text>{item.id}</Text>
            <Text>{format(item.createdAt, "yyyy")}</Text>

            <Text>{item.quantity}</Text>
        </View>
    );
}

export default function OrdersScreen() {
    const customerId = "22";

    return (
        <FlatList
            ListHeaderComponent={() => (
                <View>
                    <Text>Orders</Text>
                    <Text>
                        All your active and historic orders will appear on this
                        screen.
                    </Text>
                </View>
            )}
            data={
                orderData.find(
                    (order) =>
                        order.customerId === customerId &&
                        order.status !== "basket"
                )?.orderItems
            }
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <OrderItemCard item={item} />}
        />
    );
}
