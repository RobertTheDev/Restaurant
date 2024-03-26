import { useRoute } from "@react-navigation/native";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

import products from "../../data/products";

export default function ProductScreen() {
    const route = useRoute();

    const { productId } = route.params;

    const product = products.find((product) => product.id === productId);

    if (!product) {
        return (
            <View>
                <Text>Not Found</Text>
            </View>
        );
    }

    return (
        <ScrollView style={{ flex: 1 }} bounces={false}>
            <View style={{ width: "100%", aspectRatio: "1/1" }}>
                <Image
                    style={{ width: "100%", flex: 1 }}
                    source={product.image.uri}
                />
            </View>
            <View style={{ padding: 24 }}>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: "500" }}>
                        {product.name}
                    </Text>
                </View>
                <View>
                    <Text>Price</Text>
                </View>
                <View>
                    <Text>Sizes</Text>
                </View>
                <View>
                    <Text>Allergies</Text>
                </View>
                <View>
                    <Pressable>
                        <Text>Save</Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable>
                        <Text>Add To Basket</Text>
                    </Pressable>
                </View>
                <View>
                    <Text>Description</Text>
                </View>
            </View>
        </ScrollView>
    );
}
