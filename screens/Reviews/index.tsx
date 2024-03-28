import { format } from "date-fns";
import { FlatList, Pressable, Text, View } from "react-native";

const reviewsData = [
    {
        id: "1",
        createdAt: new Date(),
        title: "Great Food!!",
        content: "This was rea;;y tasty foood .,n",
        score: 4,
        user: {
            id: "1",
            createdAt: new Date(),
            name: "Martin"
        }
    }
];

export default function ReviewsScreen() {
    return (
        <FlatList
            data={reviewsData}
            keyExtractor={(review) => review.id}
            renderItem={({ item }) => (
                <Pressable>
                    <Text>{item.score}</Text>
                    <Text>{format(item.createdAt, "dd MMMM yyyy")}</Text>
                    <Text>{item.title}</Text>
                    <Text>{item.content}</Text>
                </Pressable>
            )}
        />
    );
}
