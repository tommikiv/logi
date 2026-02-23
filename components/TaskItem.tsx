
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../theme/ThemeContext";

export default function TaskItem({ isEditing, onDelete }: { isEditing: boolean, onDelete: () => void }) {
    const { theme } = useTheme();

    return (
        <TouchableOpacity style={[styles.item, { backgroundColor: theme.primary }]}>
            <Text style={[styles.itemTitle, { color: theme.background }]}>Task Title</Text>
            <TouchableOpacity
                style={[styles.deleteButton, isEditing ? styles.deleteButtonVisible : styles.deleteButtonHidden]}
                onPress={onDelete}
            >
                <Ionicons name="trash-outline" size={24} color={theme.background} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginBottom: 12,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    deleteButton: {
        borderRadius: 4,
    },
    deleteButtonVisible: {
        display: "flex",
    },
    deleteButtonHidden: {
        display: "none",
    },
});

