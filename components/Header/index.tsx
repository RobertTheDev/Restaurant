import { Text, View } from "react-native";

export default function Header() {
    return (
        <View
            style={{
                alignItems: "center",
                flexDirection: "row",
                height: 64,
                paddingHorizontal: 16,
                width: "100%"
            }}
        >
            <Text>Home</Text>
        </View>
    );
}
