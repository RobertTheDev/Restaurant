import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, Pressable, Text, View } from "react-native";

import orderDatas from "../../data/orderData";
import IOrderItem from "../../interfaces/OrderItem";

function BasketItemCard({ item }: { item: IOrderItem }) {
    return (
        <View>
            <Text>{item.id}</Text>
            <Image
                style={{ height: 240, width: 240 }}
                source={item.product.image.uri}
            />
        </View>
    );
}

export default function BasketScreen() {
    const customerId = "22";

    const basket = orderDatas.find(
        (order) => order.customerId === customerId && order.status === "basket"
    );

    const navigation = useNavigation();

    if (!basket) {
        return (
            <View>
                <Text>No items in your basket</Text>
            </View>
        );
    }

    return (
        <FlatList
            ListHeaderComponent={() => (
                <View
                    style={{
                        height: 64,
                        backgroundColor: "white",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>
                        Basket ({basket?.quantity})
                    </Text>
                </View>
            )}
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
            data={basket?.orderItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <BasketItemCard item={item} />}
        />
    );
}
