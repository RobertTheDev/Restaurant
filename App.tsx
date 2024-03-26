import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import RestaurantScreen from "./screens/RestaurantScreen";

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <RestaurantScreen />
        </SafeAreaView>
    );
}
