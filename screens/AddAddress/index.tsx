import { View } from "react-native";
import MapView from "react-native-maps";

export default function AddAddressScreen() {
    return (
        <View style={{ padding: 16 }}>
            <MapView
                style={{ aspectRatio: "1/1", width: "100%" }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            />
        </View>
    );
}