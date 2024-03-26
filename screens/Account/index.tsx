import { Alert, FlatList, Image, Pressable, Text, View } from "react-native";

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
                <View>
                    <Image
                        style={{
                            height: 160,
                            width: 160,
                            borderRadius: 80,
                            overflow: "hidden"
                        }}
                        source={{
                            uri: "data:image/jpeg;base64,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"
                        }}
                    />
                </View>
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
