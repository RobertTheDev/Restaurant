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
            <View style={{ width: "100%", aspectRatio: "4/3" }}>
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
                {/* Allergies */}
                <View>
                    <Text>Allergic Warnings</Text>
                    {product.allergyWarnings.map((allergy) => {
                        return (
                            <View>
                                <Text>{allergy.icon}</Text>
                                <Text>{allergy.value}</Text>
                            </View>
                        );
                    })}
                </View>
                <View>
                    <Pressable>
                        <Text>Save</Text>
                    </Pressable>
                </View>
                {/* Nutrition */}
                <View>
                    <Text>Nutrition</Text>
                    <Text>Calories: {product.nutrition.calories}</Text>
                    <Text>
                        Carbohydrates: {product.nutrition.carbohydrates}
                    </Text>
                    <Text>Fat: {product.nutrition.fat}</Text>
                    <Text>Protein: {product.nutrition.protein}</Text>
                </View>
                {/* Quantity */}
                <View>
                    <Text>Quantity</Text>
                    <Text>{product.quantity} available</Text>
                </View>
                {/* Description */}
                <View>
                    <Text>Description</Text>
                    <Text>{product.description}</Text>
                </View>
                {/* Add to basket */}
                <View>
                    <Pressable>
                        <Text>Add To Basket</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}
