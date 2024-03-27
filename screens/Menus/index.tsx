import { FlatList, Pressable, Text } from "react-native";

import menusData from "../../data/menus";
import IMenu from "../../interfaces/Menu";

function MenuCard({ item }: { item: IMenu }) {
    return (
        <Pressable>
            <Text>{item.name}</Text>
        </Pressable>
    );
}

export default function MenusScreen() {
    return (
        <FlatList
            data={menusData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return <MenuCard item={item} />;
            }}
        />
    );
}
