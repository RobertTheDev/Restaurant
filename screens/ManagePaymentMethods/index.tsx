import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

export default function ManagePaymentMethods() {
    const { navigate } = useNavigation();

    return (
        <View>
            <Text>Manage Payment Methods</Text>
            <Text>Your payment methods will appear here.</Text>
            <Pressable onPress={() => navigate("AddPaymentMethod")}>
                <Text>Add A Payment Methods</Text>
            </Pressable>

            <Pressable onPress={() => navigate("UpdatePaymentMethod")}>
                <Text>Visa ending in 5536</Text>
                <Text>Exp date 06/24</Text>
                <Pressable
                    onPress={() => {
                        console.log("Set as default");
                    }}
                >
                    <Text>Set As Default</Text>
                </Pressable>
                <Pressable
                    onPress={() => {
                        console.log("Deleted");
                    }}
                >
                    <MaterialCommunityIcons name="trash-can-outline" />
                </Pressable>
            </Pressable>
        </View>
    );
}
