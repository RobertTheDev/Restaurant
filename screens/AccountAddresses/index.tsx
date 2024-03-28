import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

function AccountAddressCard() {
    return (
        <Pressable
            style={{
                flexDirection: "row",
                backgroundColor: "white",
                padding: 24,
                gap: 32,
                borderRadius: 16,
                overflow: "hidden"
            }}
        >
            <View>
                <View
                    style={{
                        backgroundColor: "whitesmoke",
                        padding: 8,
                        borderRadius: 99
                    }}
                >
                    <MaterialCommunityIcons name="home-outline" size={28} />
                </View>
            </View>
            <View>
                <Text>Building Name</Text>
                <Text>Address</Text>
                <Text>City</Text>
                <Text>Post Code</Text>
                <Text>Region</Text>
                <Text>Country</Text>
            </View>
        </Pressable>
    );
}

export default function AccountAddressesScreen() {
    return (
        <View style={{ paddingHorizontal: 24, paddingVertical: 32 }}>
            <Text style={{ fontSize: 24, fontWeight: "600", marginBottom: 32 }}>
                Account Addresses
            </Text>
            <AccountAddressCard />
        </View>
    );
}
