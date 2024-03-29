import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, TextInput, View } from "react-native";

export default function AccountSettingsScreen() {
    const { goBack } = useNavigation();

    return (
        <View>
            <View
                style={{
                    backgroundColor: "white",
                    height: 64,
                    width: "100%",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingHorizontal: 16,
                    justifyContent: "center"
                }}
            >
                <Pressable
                    style={{
                        position: "absolute",
                        left: 16,
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    onPress={goBack}
                >
                    <MaterialCommunityIcons name="chevron-left" size={24} />
                </Pressable>
                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                    Account Settings
                </Text>
            </View>

            <View style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>
                        Change Email
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                        You can change your email here
                    </Text>
                    <TextInput
                        placeholder="Change Email"
                        style={{
                            backgroundColor: "white",
                            height: 48,
                            paddingHorizontal: 16,
                            borderRadius: 8
                        }}
                    />
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
        </View>
    );
}
