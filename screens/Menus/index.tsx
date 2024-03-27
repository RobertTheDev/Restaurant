import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, Pressable, Text, View } from "react-native";

import menusData from "../../data/menus";
import IMenu from "../../interfaces/Menu";

function MenuCard({ item }: { item: IMenu }) {
    const navigation = useNavigation();

    return (
        <Pressable
            style={{ alignItems: "center" }}
            onPress={() => navigation.navigate("Menu", { slug: item.slug })}
        >
            <Image
                style={{ width: 160, height: 160, borderRadius: 99 }}
                source={{ uri: item.imageUrl }}
            />
            <Text>{item.name}</Text>
        </Pressable>
    );
}

export default function MenusScreen() {
    return (
        <FlatList
            ListHeaderComponent={() => (
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "500" }}>
                        Menus
                    </Text>
                </View>
            )}
            numColumns={2}
            data={menusData}
            contentContainerStyle={{
                paddingVertical: 32,
                gap: 32,
                alignItems: "center"
            }}
            style={{ width: "100%" }}
            columnWrapperStyle={{ gap: 32 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return <MenuCard item={item} />;
            }}
        />
    );
}
