import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

export default function OrderOptions() {
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
