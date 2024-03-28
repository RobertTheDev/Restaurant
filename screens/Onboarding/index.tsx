import * as Haptics from "expo-haptics";
import { useState } from "react";
import {
    Dimensions,
    FlatList,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View
} from "react-native";

import allergies from "../../data/allergies";

const { width } = Dimensions.get("window");

function SignInWithPhoneNumber() {
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <View style={{ height: "100%", width }}>
            <Text>Phone Number</Text>
            <TextInput
                style={{
                    width: 120,
                    height: 40,
                    backgroundColor: "whitesmoke"
                }}
                placeholder="Enter Phone Number"
                onChangeText={(text) => setPhoneNumber(text)}
            />
            <Pressable
                onPress={() => {
                    console.log(phoneNumber);
                }}
            >
                <Text>Sign In With Phone number</Text>
            </Pressable>
        </View>
    );
}

function SignInWithEmail() {
    const [email, setEmail] = useState("");
    return (
        <View style={{ height: "100%", width }}>
            <Text>Email Address</Text>
            <TextInput
                style={{
                    width: 120,
                    height: 40,
                    backgroundColor: "whitesmoke"
                }}
                placeholder="Enter Email"
                onChangeText={(text) => setEmail(text)}
            />
            <Pressable
                onPress={() => {
                    console.log(email);
                }}
            >
                <Text>Sign In With Email Address</Text>
            </Pressable>
        </View>
    );
}

function SignIn() {
    const [formMethod, setFormMethod] = useState("email");

    return (
        <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Pressable onPress={() => setFormMethod("email")}>
                    <Text>Email</Text>
                </Pressable>
                <Pressable onPress={() => setFormMethod("phoneNumber")}>
                    <Text>Phone Number</Text>
                </Pressable>
            </View>
            {formMethod === "email" ? (
                <SignInWithEmail />
            ) : (
                <SignInWithPhoneNumber />
            )}
        </View>
    );
}

function AddName() {
    const [name, setName] = useState("");

    return (
        <View style={{ height: "100%", width }}>
            <Text>Name</Text>
            <TextInput
                style={{
                    width: 120,
                    height: 40,
                    backgroundColor: "whitesmoke"
                }}
                placeholder="Enter Name"
                onChangeText={(text) => setName(text)}
            />
            <Pressable
                onPress={() => {
                    console.log("NAME:", name);
                }}
            >
                <Text>Confirm Name</Text>
            </Pressable>
        </View>
    );
}

function AddAllergies() {
    const [userAllergies, setUserAllergies] = useState(["Fish"]);

    return (
        <FlatList
            ListHeaderComponent={() => {
                return (
                    <View
                        style={{
                            height: 60,
                            width: "100%",
                            backgroundColor: "white",
                            paddingHorizontal: 16,
                            alignItems: "center",
                            flexDirection: "row"
                        }}
                    >
                        <Text>Add Allergies</Text>
                    </View>
                );
            }}
            data={allergies}
            stickyHeaderIndices={[0]}
            keyExtractor={(_allergy, index) => index.toString()}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => {
                        Haptics.impactAsync();
                        setUserAllergies(userAllergies.concat(item.icon));
                    }}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 16,
                        paddingHorizontal: 16,
                        paddingVertical: 8
                    }}
                >
                    <Text style={{ fontSize: 24 }}>{item.icon}</Text>
                    <Text
                        style={{
                            fontSize: 16,
                            color: userAllergies.find((p) => p === item.value)
                                ? "red"
                                : "black"
                        }}
                    >
                        {item.value}
                    </Text>
                </Pressable>
            )}
        />
    );
}

export default function OnboardingScreen() {
    return (
        <ScrollView
            style={{ height: "100%", width }}
            bounces={false}
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
        >
            <SignIn />
            <AddName />
            <AddAllergies />
        </ScrollView>
    );
}
