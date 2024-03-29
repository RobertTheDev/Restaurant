import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Haptics from "expo-haptics";
import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import allergies from "../../data/allergies";

export default function AddAllergiesScreen() {
    const { goBack } = useNavigation();

    const [userAllergies, setUserAllergies] = useState<string[]>([]);

    const handleToggleItem = (newItem: string) => {
        if (userAllergies.includes(newItem)) {
            setUserAllergies((prevAllergies) =>
                prevAllergies.filter((item) => item !== newItem)
            );
        } else {
            setUserAllergies((prevAllergies) => [...prevAllergies, newItem]);
        }
    };

    return (
        <View style={{ flex: 1, width: "100%" }}>
            {/* <View
                style={{
                    height: 60,
                    width: "100%",
                    backgroundColor: "white",
                    paddingHorizontal: 16,
                    alignItems: "center",
                    flexDirection: "row",
                    position: "absolute",
                    top: 0,
                    marginBottom: 24
                }}
            >
                <Pressable onPress={goBack}>
                    <MaterialCommunityIcons name="chevron-left" size={32} />
                </Pressable>
                <Text>Add Allergies</Text>
            </View> */}
            <FlatList
                contentContainerStyle={{
                    backgroundColor: "red",
                    borderRadius: 16,
                    overflow: "hidden",
                    width: "90%",
                    maxHeight: 480
                }}
                // ListHeaderComponent={() => {
                //     return (
                //         <View
                //             style={{
                //                 height: 60,
                //                 width: "100%",
                //                 backgroundColor: "white",
                //                 paddingHorizontal: 16,
                //                 alignItems: "center",
                //                 flexDirection: "row"
                //             }}
                //         >
                //             <Pressable onPress={goBack}>
                //                 <MaterialCommunityIcons
                //                     name="chevron-left"
                //                     size={32}
                //                 />
                //             </Pressable>
                //             <Text>Add Allergies</Text>
                //         </View>
                //     );
                // }}
                // stickyHeaderIndices={[0]}
                data={allergies}
                keyExtractor={(_allergy, index) => index.toString()}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => {
                            Haptics.impactAsync();
                            handleToggleItem(item.value);
                        }}
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "white",
                            gap: 16,
                            paddingHorizontal: 24,
                            paddingVertical: 8
                        }}
                    >
                        <View
                            style={{
                                height: 16,
                                width: 16,
                                borderRadius: 99,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "white",
                                borderColor: "lightgray",
                                borderWidth: 1
                            }}
                        >
                            <View
                                style={{
                                    height: 10,
                                    width: 10,
                                    borderRadius: 99,
                                    backgroundColor: userAllergies.find(
                                        (p) => p === item.value
                                    )
                                        ? "royalblue"
                                        : "white"
                                }}
                            />
                        </View>
                        <Text style={{ fontSize: 24 }}>{item.icon}</Text>
                        <Text
                            style={{
                                fontSize: 16
                            }}
                        >
                            {item.value}
                        </Text>
                    </Pressable>
                )}
            />
        </View>
    );
}
