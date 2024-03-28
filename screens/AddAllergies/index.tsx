import { useNavigation } from "@react-navigation/native";
import { FlatList, Pressable, Text, View } from "react-native";

import allergies from "../../data/allergies";

export default function AddAllergiesScreen() {
    const { goBack } = useNavigation();

    return (
        <FlatList
            ListHeaderComponent={() => {
                return (
                    <View>
                        <Pressable onPress={goBack}>
                            <Text>Back</Text>
                        </Pressable>
                    </View>
                );
            }}
            data={allergies}
            keyExtractor={(_allergy, index) => index.toString()}
            renderItem={({ item }) => (
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8
                    }}
                >
                    <Text style={{ fontSize: 24 }}>{item.icon}</Text>
                    <Text style={{ fontSize: 16 }}>{item.value}</Text>
                </View>
            )}
        />
    );
}
