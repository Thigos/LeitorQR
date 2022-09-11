import {View} from 'react-native';
import { globalStyles } from '../css/styles';

export const Balls = () => {
    return (
        <View style={globalStyles.ballContainer}>
            <View style={globalStyles.ball1}></View>
            <View style={globalStyles.ball2}></View>
        </View>
        
    )
}