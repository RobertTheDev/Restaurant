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
                        gap: 16,
                        paddingHorizontal: 24,
                        paddingVertical: 8
                    }}
                >
                    <Pressable
                        style={{
                            height: 16,
                            width: 16,
                            backgroundColor: "whitesmoke"
                        }}
                        onPress={goBack}
                    >
                        <MaterialCommunityIcons name="chevron-left" />
                    </Pressable>
                    <View
                        style={{
                            height: 60,
                            width: 60,
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
                                fontSize: 16,
                                fontWeight: "500",
                                marginBottom: 2
                            }}
                        >
                            {menu.name}
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: "400",
                                width: 240
                            }}
                        >
                            {menu?.description}
                        </Text>
                    </View>
                </View>
            )}
            data={menu?.products}
            ListEmptyComponent={() => (
                <View>
                    <Text>Ooops</Text>
                </View>
            )}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return <ProductCard item={item} />;
            }}
        />
    );
}
