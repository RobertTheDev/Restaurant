import { FlatList, Text, View } from "react-native";

import allergies from "../../data/allergies";

export default function AddIngredientsScreen() {
    return (
        <View>
            <FlatList
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
        </View>
    );
}
