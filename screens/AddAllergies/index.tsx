import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Haptics from "expo-haptics";
import { FlatList, Pressable, Text, View } from "react-native";

import allergies from "../../data/allergies";

export default function AddAllergiesScreen() {
    const { goBack } = useNavigation();

    return (
        <FlatList
            ListHeaderComponent={() => {
                return (
                    <View
                        style={{
                            height: 60,
                            width: "100%",
                            backgroundColor: "white",
                            paddingHorizontal: 16,
                            alignItems: "center",
                            flexDirection: "row"
                        }}
                    >
                        <Pressable onPress={goBack}>
                            <MaterialCommunityIcons
                                name="chevron-left"
                                size={32}
                            />
                        </Pressable>
                        <Text>Add Allergies</Text>
                    </View>
                );
            }}
            data={allergies}
            stickyHeaderIndices={[0]}
            keyExtractor={(_allergy, index) => index.toString()}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => {
                        Haptics.impactAsync();
                        console.log(item.icon);
                    }}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 16,
                        paddingHorizontal: 16,
                        paddingVertical: 8
                    }}
                >
                    <Text style={{ fontSize: 24 }}>{item.icon}</Text>
                    <Text style={{ fontSize: 16 }}>{item.value}</Text>
                </Pressable>
            )}
        />
    );
}
