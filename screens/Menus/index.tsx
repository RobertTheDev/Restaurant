import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, Pressable, Text, View } from "react-native";

import menusData from "../../data/menus";
import IMenu from "../../interfaces/Menu";

function MenuCard({ item }: { item: IMenu }) {
    const navigation = useNavigation();

    return (
        <Pressable
            style={{
                alignItems: "center",
                paddingVertical: 16,
                width: "50%"
            }}
            onPress={() => navigation.navigate("Menu", { slug: item.slug })}
        >
            <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
                <Image
                    style={{
                        aspectRatio: "1/1",
                        width: "100%",
                        borderRadius: 99,
                        overflow: "hidden"
                    }}
                    source={{ uri: item.image }}
                />
            </View>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>{item.name}</Text>
        </Pressable>
    );
}

export default function MenusScreen() {
    return (
        <FlatList
            ListHeaderComponent={() => (
                <View style={{ marginBottom: 16 }}>
                    <Text style={{ fontSize: 24, fontWeight: "500" }}>
                        Menu
                    </Text>
                </View>
            )}
            numColumns={2}
            data={menusData}
            contentContainerStyle={{
                alignItems: "center",
                paddingVertical: 32,
                width: "100%"
            }}
            style={{ width: "100%" }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return <MenuCard item={item} />;
            }}
        />
    );
}
