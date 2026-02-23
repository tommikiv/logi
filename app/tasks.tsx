import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskItem from '../components/TaskItem';
import { useTheme } from '../theme/ThemeContext';

export default function Tasks() {
    const { theme } = useTheme();
    const [isEditing, setIsEditing] = useState(false);
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task 1' },
        { id: 2, title: 'Task 2' },
    ]);

    const onEditPress = () => {
        setIsEditing(!isEditing);
    }

    const onAddPress = () => {
        const newTask = { id: Date.now(), title: `Task ${tasks.length + 1}` };
        setTasks([...tasks, newTask]);
    }

    const onDelete = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <ScrollView style={styles.taskContainer}>
                {tasks.map(task => (
                    <TaskItem key={task.id} isEditing={isEditing} onDelete={() => onDelete(task.id)} />
                ))}
            </ScrollView>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, { backgroundColor: theme.primary }]} onPress={onEditPress}>
                    <Ionicons name="pencil-outline" size={24} color={theme.background} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: theme.primary }]} onPress={onAddPress}>
                    <Ionicons name="add-outline" size={24} color={theme.background} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    taskContainer: {
        flex: 1,
    },
    button: {
        padding: 16,
        borderRadius: 100,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
    },
});