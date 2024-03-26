import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import ProductScreen from "./screens/Product";

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar style="auto" />
                <ProductScreen />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
