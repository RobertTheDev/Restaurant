import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Image, Pressable, Text, View } from "react-native";

import ProductCard from "../../components/ProductCard";
import menusData from "../../data/menus";

export default function MenuSectionScreen() {
    const route = useRoute();

    const { goBack } = useNavigation();

    const { slug } = route.params;

    const menu = menusData.find((menu) => menu.slug === slug);

    return (
        <FlatList
            ListHeaderComponent={() => (
                <View
                    style={{
                        backgroundColor: "white",
                        flexDirection: "row",
                        gap: 8,
                        paddingHorizontal: 24,
                        paddingVertical: 8,
                        height: 64,
                        width: "100%",
                        alignItems: "center"
                    }}
                >
                    <Pressable onPress={goBack}>
                        <MaterialCommunityIcons name="chevron-left" size={28} />
                    </Pressable>
                    <View
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 40,
                            overflow: "hidden"
                        }}
                    >
                        <Image
                            style={{ height: "100%", width: "100%" }}
                            source={{ uri: menu?.image.uri }}
                        />
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "600",
                                marginBottom: 2
                            }}
                        >
                            {menu.name}
                        </Text>
                    </View>
                </View>
            )}
            data={menu?.products}
            ListEmptyComponent={() => (
                <View>
                    <Text>
                        Oops. There are currently no active menu items in this
                        section of the menu at the moment.
                    </Text>
                    <Pressable onPress={goBack}>
                        <Text>Go Back</Text>
                    </Pressable>
                </View>
            )}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return <ProductCard item={item} />;
            }}
        />
    );
}
