import { FlatList, View } from "react-native";

import ProductCard from "../../components/ProductCard";
import products from "../../data/products";
import BasketButton from "../../components/BasketButton";

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, width: "100%" }}>
            <BasketButton />
            <FlatList
                data={products}
                keyExtractor={(_product, index) => index.toString()}
                contentContainerStyle={{ gap: 24, paddingVertical: 24 }}
                renderItem={({ item }) => {
                    return <ProductCard item={item} />;
                }}
            />
        </View>
    );
}
