import { Pressable, Text, TextInput, View } from "react-native";

export default function AddReviewScreen() {
    return (
        <View>
            <Text>Add Review</Text>
            <Text>Add Stars</Text>
            <Text>Add Review</Text>
            <TextInput placeholder="Add Review" />
            <Pressable>
                <Text>Add Review</Text>
            </Pressable>
        </View>
    );
}
