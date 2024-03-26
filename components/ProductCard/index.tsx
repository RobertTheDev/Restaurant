import { useNavigation } from "@react-navigation/native";
import {
    Image,
    ImageSourcePropType,
    Pressable,
    Text,
    View
} from "react-native";

export default function ProductCard(props: {
    item: { id: string; name: string; image: { uri: ImageSourcePropType } };
}) {
    const { item } = props;

    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() =>
                navigation.navigate("Product", { productId: item.id })
            }
        >
            <View style={{ width: "100%", aspectRatio: "4/3" }}>
                <Image
                    style={{ width: "100%", height: "100%" }}
                    source={item.image.uri}
                />
            </View>
            <View>
                <Text>{item.name}</Text>
            </View>
        </Pressable>
    );
}
