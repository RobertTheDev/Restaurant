import { FlatList } from "react-native";

import ProductCard from "../../components/ProductCard";
import menusData from "../../data/menus";

export default function MenuScreen() {
    return (
        <FlatList
            data={menusData.find((menu) => menu.slug === "pastas")?.products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return <ProductCard item={item} />;
            }}
        />
    );
}
