import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

export default function EditAccountScreen() {
    const { goBack } = useNavigation();

    return (
        <View>
            <Pressable onPress={goBack}>
                <Text>Back</Text>
                <MaterialCommunityIcons name="chevron-left" />
            </Pressable>

            <Text>Edit Account</Text>
        </View>
    );
}
