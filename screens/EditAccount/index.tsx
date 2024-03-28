import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, TextInput, View } from "react-native";

export default function EditAccountScreen() {
    const { goBack } = useNavigation();

    return (
        <View>
            <Pressable onPress={goBack}>
                <Text>Back</Text>
                <MaterialCommunityIcons name="chevron-left" />
            </Pressable>

            <Text>Edit Account</Text>

            <Text>Change Name</Text>
            <Text>You can change your name here.</Text>
            <TextInput placeholder="Name" />
            <Pressable>
                <Text>Change Name</Text>
            </Pressable>
        </View>
    );
}
