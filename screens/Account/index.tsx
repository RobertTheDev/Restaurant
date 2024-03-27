import { Alert, FlatList, Pressable, Text, View } from "react-native";

const accountMenuLinks = [
    {
        icon: "",
        link: "",
        name: "Update Account"
    }
];

export default function AccountScreen() {
    return (
        <View
            style={{
                flexDirection: "column",
                alignItems: "center",
                padding: 32
            }}
        >
            <View>
                <Text>Sanjiv</Text>
            </View>
            <View>
                <FlatList
                    data={accountMenuLinks}
                    keyExtractor={(_link, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Pressable>
                            <Text>{item.name}</Text>
                        </Pressable>
                    )}
                />
            </View>
            <View>
                <Pressable
                    onPress={() => {
                        Alert.alert(
                            "Sign out?",
                            "You can always sign back in",
                            [
                                {
                                    text: "Cancel",

                                    onPress: () => {}
                                },
                                {
                                    text: "Sign Out",
                                    style: "destructive",
                                    onPress: () => {}
                                }
                            ]
                        );
                    }}
                >
                    <Text style={{ textDecorationLine: "underline" }}>
                        Sign Out
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}
