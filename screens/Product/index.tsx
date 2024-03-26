import { Image, Pressable, Text, View } from "react-native";

const pizzaData = [
    {
        id: "1",
        description: "",
        discount: {
            percentage: "20%",
            value: 0.2
        },
        image: {
            uri: "",
            alt: ""
        },
        ingredients: [],
        name: "Pizzaaa",
        allergyWarnings: [],
        price: {
            amount: "12.99",
            currency: ""
        },
        status: "Deal",
        sizes: ["S", "M", "X"]
    }
];

export default function ProductScreen() {
    const pizza = pizzaData.find((pizza) => pizza.id === "1");

    if (!pizza) {
        return (
            <View>
                <Text>Not Found</Text>
            </View>
        );
    }

    return (
        <View>
            <View style={{ width: "100%", aspectRatio: "4/3" }}>
                <Image
                    style={{ width: "100%", flex: 1 }}
                    source={require("../../assets/pizzas/texmex.jpg")}
                />
            </View>
            <View>
                <Text>{pizza.name}</Text>
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
    );
}
