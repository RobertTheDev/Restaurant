import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

export default function OrderTimeScreen() {
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
