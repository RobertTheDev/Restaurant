import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import MapView from "react-native-maps";

export default function AddAddressScreen() {
    const { goBack } = useNavigation();

    return (
        <View style={{ padding: 16 }}>
            <View>
                <Pressable onPress={goBack}>
                    <Text>Back</Text>
                </Pressable>
            </View>

            <View
                style={{
                    aspectRatio: "4/3",
                    borderRadius: 16,
                    overflow: "hidden",
                    width: "100%"
                }}
            >
                <MapView
                    style={{ height: "100%", width: "100%" }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                />
            </View>
        </View>
    );
}
