import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
    Keyboard,
    Pressable,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";

export default function UpdatePaymentMethodScreen() {
    const handlePressOutside = () => {
        Keyboard.dismiss();
    };

    const { goBack } = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={handlePressOutside}>
            <View
                style={{ padding: 32, backgroundColor: "whitesmoke", flex: 1 }}
            >
                <View style={{ marginBottom: 32 }}>
                    <Pressable onPress={goBack}>
                        <MaterialCommunityIcons name="chevron-left" size={28} />
                    </Pressable>
                    <Text style={{ fontSize: 24 }}>Update Payment Method</Text>
                </View>
                <View style={{ gap: 16 }}>
                    <TextInput
                        style={{
                            width: "100%",
                            height: 64,
                            backgroundColor: "white",
                            alignItems: "center",
                            paddingHorizontal: 8
                        }}
                        placeholder="Cardholder Name"
                    />
                    <TextInput
                        style={{
                            width: "100%",
                            height: 64,
                            backgroundColor: "white",
                            alignItems: "center",
                            paddingHorizontal: 8
                        }}
                        keyboardType="numeric"
                        placeholder="Card Number"
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            gap: 8,
                            alignItems: "center",
                            width: "100%",
                            height: 80
                        }}
                    >
                        <TextInput
                            style={{
                                width: "50%",
                                height: 64,
                                backgroundColor: "white",
                                alignItems: "center",
                                paddingHorizontal: 8
                            }}
                            keyboardType="numeric"
                            placeholder="Expiration Date"
                        />
                        <TextInput
                            style={{
                                width: "50%",
                                height: 64,
                                backgroundColor: "white",
                                alignItems: "center",
                                paddingHorizontal: 8
                            }}
                            keyboardType="numeric"
                            placeholder="Security Code"
                        />
                    </View>
                    <Pressable
                        style={{
                            width: "100%",
                            height: 64,
                            backgroundColor: "royalblue",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 8
                        }}
                    >
                        <Text style={{ fontSize: 16 }}>
                            Update Payment Method
                        </Text>
                    </Pressable>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
