
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppColors } from '../AppStyles';

type ListSeparatorProps = {

};

function ListSeparator(props: ListSeparatorProps) {
    return (
        <View style={styles.separator} />
    );
}

const styles = StyleSheet.create({
    separator: { alignSelf: "center", width: "90%", marginVertical: 10, height: 1, backgroundColor: AppColors.light }
})

export default ListSeparator;