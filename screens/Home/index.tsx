import { FlatList } from "react-native";

import ProductCard from "../../components/ProductCard";
import products from "../../data/products";

export default function HomeScreen() {
    return (
        <FlatList
            data={products}
            keyExtractor={(_product, index) => index.toString()}
            contentContainerStyle={{ gap: 24, paddingVertical: 24 }}
            renderItem={({ item }) => {
                return <ProductCard item={item} />;
            }}
        />
    );
}
