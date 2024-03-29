import { FlatList, Text, View } from "react-native";

import BasketButton from "../../components/BasketButton";
import ProductCard from "../../components/ProductCard";
import products from "../../data/products";

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, width: "100%" }}>
            <BasketButton />
            <FlatList
                ListHeaderComponent={() => (
                    <View
                        style={{
                            height: 64,
                            backgroundColor: "white",
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>
                            Hello
                        </Text>
                    </View>
                )}
                stickyHeaderIndices={[0]}
                data={products}
                keyExtractor={(_product, index) => index.toString()}
                contentContainerStyle={{ gap: 32 }}
                renderItem={({ item }) => {
                    return <ProductCard item={item} />;
                }}
            />
        </View>
    );
}
