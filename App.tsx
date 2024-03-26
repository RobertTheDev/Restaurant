import { StatusBar } from "expo-status-bar";

import RestaurantScreen from "./screens/RestaurantScreen";

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <RestaurantScreen />
        </>
    );
}
