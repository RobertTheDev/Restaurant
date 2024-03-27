import { FlatList, Text, View } from "react-native";

import orderData from "../../data/orderData";
import IOrderItem from "../../interfaces/OrderItem";

function BasketItemCard({ item }: { item: IOrderItem }) {
    return (
        <View>
            <Text>{item.id}</Text>
        </View>
    );
}

export default function BasketScreen() {
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
            renderItem={({ item }) => <BasketItemCard item={item} />}
        />
    );
}
