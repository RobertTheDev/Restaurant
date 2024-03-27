import { useNavigation } from "@react-navigation/native";
import { Alert, FlatList, Pressable, Text, View } from "react-native";

import accountLinks from "./accountLinks";

export default function AccountScreen() {
    const navigation = useNavigation();

    return (
        <FlatList
            ListHeaderComponent={() => (
                <View>
                    <Text>Sanjiv</Text>
                </View>
            )}
            data={accountLinks}
            keyExtractor={(_link, index) => index.toString()}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => {
                        navigation.navigate(item.link);
                    }}
                >
                    <Text>{item.name}</Text>
                </Pressable>
            )}
            ListFooterComponent={() => (
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
            )}
        />
    );
}
