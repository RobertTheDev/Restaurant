import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, TextInput, View } from "react-native";

export default function AccountSettingsScreen() {
    const { goBack } = useNavigation();

    return (
        <View>
            <View>
                <Pressable onPress={goBack}>
                    <Text>Back</Text>
                </Pressable>
                <Text>Account Settings</Text>
            </View>

            <View>
                <Text>Change Email</Text>
                <Text>You can change your email here</Text>
                <TextInput placeholder="Change Email" />
                <Pressable>
                    <Text>Change Email</Text>
                </Pressable>
            </View>
            <View>
                <Text>Change Password</Text>
                <Text>You can change your password hre</Text>
                <TextInput placeholder="Current Password" />
                <TextInput placeholder="New Password" />
                <Pressable>
                    <Text>Change Password</Text>
                </Pressable>
            </View>
            <View>
                <Text>Close Account</Text>
                <Text>You can close your account here</Text>
                <TextInput placeholder="Type Delete" />

                <Pressable>
                    <Text>Close Account</Text>
                </Pressable>
            </View>
        </View>
    );
}
