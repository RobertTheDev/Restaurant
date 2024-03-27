import { FlatList, Pressable, Text, View } from "react-native";

import orderData from "../../data/orderData";
import IOrderItem from "../../interfaces/OrderItem";
import { useNavigation } from "@react-navigation/native";

function BasketItemCard({ item }: { item: IOrderItem }) {
    return (
        <View>
            <Text>{item.id}</Text>
        </View>
    );
}

export default function BasketScreen() {
    const customerId = "22";

    const navigation = useNavigation();

    return (
        <FlatList
            ListFooterComponent={() => (
                <View>
                    <Pressable
                        onPress={() => {
                            navigation.navigate("OrderOptions");
                        }}
                    >
                        <Text>Next</Text>
                    </Pressable>
                </View>
            )}
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
