import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

export default function AccountSettingsScreen() {
    const { goBack } = useNavigation();

    return (
        <View>
            <Pressable onPress={goBack}>
                <Text>Back</Text>
            </Pressable>
            <Text>Account Settings</Text>
        </View>
    );
}
