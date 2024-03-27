import { useRoute } from "@react-navigation/native";
import { FlatList, Image, Text, View } from "react-native";

import ProductCard from "../../components/ProductCard";
import menusData from "../../data/menus";

export default function MenuScreen() {
    const route = useRoute();

    const { slug } = route.params;

    const menu = menusData.find((menu) => menu.slug === slug);

    return (
        <FlatList
            ListHeaderComponent={() => (
                <View>
                    <View
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 80,
                            overflow: "hidden"
                        }}
                    >
                        <Image
                            style={{ height: "100%", width: "100%" }}
                            source={{ uri: menu?.imageUrl }}
                        />
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: "500" }}>
                        {menu.name}
                    </Text>
                </View>
            )}
            data={menu?.products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return <ProductCard item={item} />;
            }}
        />
    );
}
