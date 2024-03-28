import { Dimensions, ScrollView, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export default function OnboardingScreen() {
    return (
        <ScrollView
            style={{ height: "100%", width }}
            bounces={false}
            horizontal
            pagingEnabled
            // scrollEnabled={false}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
        >
            <View style={{ height: "100%", width }}>
                <Text>Email Address</Text>
            </View>
            <View style={{ height: "100%", width }}>
                <Text>Name</Text>
            </View>
            <View style={{ height: "100%", width }}>
                <Text>Allergies</Text>
            </View>
            <View style={{ height: "100%", width }}>
                <Text>Add Address</Text>
            </View>
        </ScrollView>
    );
}
