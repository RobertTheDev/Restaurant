import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
    Alert,
    Dimensions,
    FlatList,
    Pressable,
    Text,
    View
} from "react-native";

import accountLinks from "./accountLinks";

export default function AccountScreen() {
    const navigation = useNavigation();

    return (
        <FlatList
            contentContainerStyle={{
                flex: 1,
                alignItems: "center",
                paddingVertical: 32,
                gap: 16
            }}
            ListHeaderComponent={() => (
                <View>
                    <Feather name="user" size={48} />
                    <Text
                        style={{
                            marginBottom: 16,
                            marginTop: 8,
                            fontSize: 18,
                            fontWeight: "500"
                        }}
                    >
                        Sanjiv
                    </Text>
                </View>
            )}
            data={accountLinks}
            keyExtractor={(_link, index) => index.toString()}
            renderItem={({ item }) => (
                <Pressable
                    style={{
                        backgroundColor: "white",
                        width: Dimensions.get("window").width * 0.8,
                        paddingVertical: 16,
                        paddingHorizontal: 24,
                        borderRadius: 8,
                        overflow: "hidden",
                        flexDirection: "row",
                        gap: 24,
                        alignItems: "center"
                    }}
                    onPress={() => {
                        navigation.navigate(item.link);
                    }}
                >
                    <MaterialCommunityIcons name={item.icon} size={24} />
                    <Text style={{ fontSize: 16, fontWeight: "500" }}>
                        {item.name}
                    </Text>
                </Pressable>
            )}
            ListFooterComponent={() => (
                <View style={{ marginTop: 16 }}>
                    <Pressable onPress={signOut}>
                        <Text
                            style={{
                                textDecorationLine: "underline",
                                fontSize: 14
                            }}
                        >
                            Sign Out
                        </Text>
                    </Pressable>
                </View>
            )}
        />
    );
}

function signOut() {
    return Alert.alert("Sign out?", "You can always sign back in", [
        {
            text: "Cancel",

            onPress: () => {}
        },
        {
            text: "Sign Out",
            style: "destructive",
            onPress: () => {}
        }
    ]);
}
