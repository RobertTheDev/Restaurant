import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { Dimensions, FlatList, Pressable, Text, View } from "react-native";

import menusData from "../../data/menus";
import IMenu from "../../interfaces/Menu";
import blurHashImage from "../../lib/hashBlurImage";
import { BlurView } from "expo-blur";

function MenuCard({ item }: { item: IMenu }) {
    const navigation = useNavigation();

    return (
        <Pressable
            style={{
                alignItems: "center",
                paddingVertical: 16,
                width: "50%"
            }}
            onPress={() =>
                navigation.navigate("MenuSection", { slug: item.slug })
            }
        >
            <View style={{ paddingHorizontal: 16, marginBottom: 8 }}>
                <Image
                    source={{ uri: item.image.uri }}
                    placeholder={blurHashImage}
                    contentFit="cover"
                    transition={1000}
                    style={{
                        aspectRatio: "1/1",
                        width: "100%",
                        borderRadius: 99,
                        overflow: "hidden"
                    }}
                />
            </View>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>{item.name}</Text>
        </Pressable>
    );
}

export default function MenuScreen() {
    return (
        <FlatList
            ListHeaderComponent={() => (
                <BlurView
                    intensity={90}
                    tint="light"
                    style={{
                        height: 64,
                        width: Dimensions.get("window").width,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Text style={{ fontSize: 18, fontWeight: "600" }}>
                        Menu
                    </Text>
                </BlurView>
            )}
            style={{ backgroundColor: "white" }}
            stickyHeaderIndices={[0]}
            numColumns={2}
            data={menusData}
            contentContainerStyle={{
                alignItems: "center",
                width: "100%"
            }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return <MenuCard item={item} />;
            }}
        />
    );
}
