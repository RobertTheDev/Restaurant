import { Text, View } from "react-native";

export default function NotFoundScreen() {
    return (
        <View
            style={{
                flex: 1,
                width: "100%",
                backgroundColor: "whitesmoke",
                padding: 16
            }}
        >
            <Text style={{ fontSize: 32, fontWeight: "500" }}>
                Oops Not Found
            </Text>
        </View>
    );
}
