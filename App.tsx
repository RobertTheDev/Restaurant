import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Navigator from "./navigator";

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar style="auto" />
                <Navigator />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
