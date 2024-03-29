import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

export default function BasketButton() {
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => {
                navigation.navigate("Basket");
            }}
            style={{
                position: "absolute",
                bottom: 16,
                zIndex: 20,
                right: 16,
                backgroundColor: "white",
                height: 56,
                width: 56,
                borderRadius: 40,
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <View
                style={{
                    position: "absolute",
                    top: -8,
                    right: -4,
                    backgroundColor: "black",
                    height: 24,
                    width: 24,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 12
                }}
            >
                <Text style={{ fontSize: 12, color: "white" }}>9+</Text>
            </View>
            <MaterialIcons name="add-shopping-cart" size={28} color="black" />
        </Pressable>
    );
}
