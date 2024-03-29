import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { ImageSourcePropType, Pressable, Text, View } from "react-native";
import blurHashImage from "../../lib/hashBlurImage";

export default function ProductCard(props: {
    item: { id: string; name: string; image: { uri: ImageSourcePropType } };
}) {
    const { item } = props;

    const navigation = useNavigation();

    return (
        <Pressable
            style={{
                paddingHorizontal: 0,
                gap: 16
            }}
            onPress={() =>
                navigation.navigate("Product", { productId: item.id })
            }
        >
            <View
                style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    borderRadius: 16,
                    overflow: "hidden"
                }}
            >
                <Image
                    placeholder={blurHashImage}
                    style={{ width: "100%", height: "100%" }}
                    source={item.image.uri}
                />
            </View>
            <View>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                    {item.name}
                </Text>
            </View>
        </Pressable>
    );
}
