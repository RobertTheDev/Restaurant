import { Pressable, Text, TextInput, View } from "react-native";

export default function UpdateReviewScreen() {
    return (
        <View>
            <Text>Update Review</Text>
            <Text>Add Stars</Text>
            <Text>Add Review</Text>
            <TextInput placeholder="Add Review" />
            <Pressable>
                <Text>Update Review</Text>
            </Pressable>
        </View>
    );
}
