import { Image, Text, View } from "react-native";

export default function RestaurantScreen() {
    return (
        <View>
            <View style={{ width: "100%", aspectRatio: "4/3" }}>
                <Image
                    style={{ width: "100%", flex: 1 }}
                    source={require("../../assets/pizzas/texmex.jpg")}
                />
            </View>
            <Text>TexMex Pizza</Text>
        </View>
    );
}
