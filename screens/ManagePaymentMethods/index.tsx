import React from "react";
import { Pressable, Text, View } from "react-native";

export default function ManagePaymentMethods() {
    return (
        <View>
            <Text>Manage Payment Methods</Text>
            <Text>Your payment methods will appear here.</Text>
            <Pressable>
                <Text>Add A Payment Methods</Text>
            </Pressable>

            <Pressable>
                <Text>Update Payment Method Card</Text>
            </Pressable>
        </View>
    );
}
