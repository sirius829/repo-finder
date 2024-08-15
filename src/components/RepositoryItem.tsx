import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Repository {
    name: string;
    description: string;
    stargazers_count: number;
    html_url: string;
}

const RepositoryItem: React.FC<Repository> = ({ name, description, stargazers_count }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.starsContainer}>
                    <Text style={styles.stars}>{stargazers_count}</Text>
                    <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} testID="star-icon" />
                </View>
            </View>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        padding: 10,
        paddingLeft: 20,
        backgroundColor: '#e9e9ef',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginTop: 10,
        marginLeft: 20,
        borderRadius: 5,
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
    },
    starsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    stars: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    starIcon: {
        marginLeft: 5,
    },
});

export default React.memo(RepositoryItem);
