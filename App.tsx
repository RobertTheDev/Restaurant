import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import MenuItem from "./screens/MenuItem";

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar style="auto" />
                <MenuItem />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
