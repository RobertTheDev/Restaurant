import { useRoute } from "@react-navigation/native";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";

import products from "../../data/products";
import { Image } from "expo-image";
import blurHashImage from "../../lib/hashBlurImage";

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
        <View style={{ width: "100%", flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                {/* Image URL */}
                <View style={{ width: "100%", aspectRatio: "4/3" }}>
                    <Image
                        style={{ width: "100%", flex: 1 }}
                        source={product.image.uri}
                        placeholder={blurHashImage}
                    />
                </View>

                <View style={{ padding: 24 }}>
                    {/* Name */}
                    <View>
                        <Text style={{ fontSize: 24, fontWeight: "500" }}>
                            {product.name}
                        </Text>
                    </View>

                    {/* Allergies */}
                    <View>
                        <Text>Allergic Warnings</Text>
                        <FlatList
                            horizontal
                            data={product.allergyWarnings}
                            keyExtractor={(item) => item.value}
                            contentContainerStyle={{ gap: 8 }}
                            renderItem={({ item }) => (
                                <View
                                    style={{
                                        flexDirection: "row",
                                        gap: 4,
                                        backgroundColor: "white",
                                        paddingVertical: 8,
                                        paddingHorizontal: 8,
                                        borderRadius: 8
                                    }}
                                >
                                    <Text>{item.icon}</Text>
                                    <Text>{item.value}</Text>
                                </View>
                            )}
                        />
                    </View>

                    {/* Nutrition */}
                    <View>
                        <Text>Nutrition</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text>Calories: {product.nutrition.calories}</Text>
                            <Text>
                                Carbohydrates: {product.nutrition.carbohydrates}
                            </Text>
                            <Text>Fat: {product.nutrition.fat}</Text>
                            <Text>Protein: {product.nutrition.protein}</Text>
                        </View>
                    </View>
                    {/* Quantity */}
                    <View>
                        <Text>Quantity: {product.quantity} available</Text>
                    </View>
                    {/* Description */}
                    <View>
                        <Text>Description</Text>
                        <Text>{product.description}</Text>
                    </View>

                    {/* <Text>Category: {product.}</Text> */}
                    {/* Add to basket */}
                </View>
            </ScrollView>
            <View
                style={{
                    backgroundColor: "white",
                    width: "100%",
                    height: 88,
                    paddingHorizontal: 16,
                    paddingVertical: 16
                }}
            >
                <Pressable
                    style={{
                        backgroundColor: "red",
                        width: "100%",
                        flex: 1,
                        borderRadius: 99,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 16,
                            fontWeight: "600"
                        }}
                    >
                        View Basket
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}
