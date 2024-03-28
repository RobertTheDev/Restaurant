import { Dimensions, ScrollView, Text, View } from "react-native";

const { width } = Dimensions.get("window");

function SignInWithPhoneNumber() {
    return (
        <View style={{ height: "100%", width }}>
            <Text>Email Address</Text>
        </View>
    );
}

function SignInWithEmail() {
    return (
        <View style={{ height: "100%", width }}>
            <Text>Email Address</Text>
        </View>
    );
}

function SignIn() {
    return (
        <View>
            <SignInWithEmail />
            <SignInWithPhoneNumber />
        </View>
    );
}

function AddName() {
    return (
        <View style={{ height: "100%", width }}>
            <Text>Name</Text>
        </View>
    );
}

function AddAllergies() {
    return (
        <View style={{ height: "100%", width }}>
            <Text>Allergies</Text>
        </View>
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
