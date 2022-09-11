import {StyleSheet, Dimensions} from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

const { width, height } = Dimensions.get('window');
const ballColor = '#38D4DE40';

export const qrCodeStyles = StyleSheet.create({
    camera: {
      height: width - 50,
      width: width - 50,
    },
    box: {
      backgroundColor: 'black',
      width: width - 50,
      height: width - 50,
      borderRadius: 33,
    }
  });

export function loadFonts() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold
    });

    return fontsLoaded;
} 

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ballContainer: {
        position: 'absolute',
        left: 0,
        top: 0
    },
    ball1: {
        position: 'absolute',
        top: -10,
        left: -58,
        backgroundColor: ballColor,
        borderRadius: 100,
        width: 145,
        height: 140
    },
    ball2: {
        position: 'absolute',
        top: -58,
        left: 31,
        backgroundColor: ballColor,
        borderRadius: 100,
        width: 145,
        height: 140
    },
    backArrow: {
        position: 'absolute',
        width: 48,
        height: 48,
        top: 30,
        left: 10,
    },
    title: {
        fontSize: 24,
        maxWidth: 259,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Inter_700Bold',
    },
    text: {
        maxWidth: 286,
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 20,
        fontFamily: 'Inter_400Regular',
    },
    button: {
        backgroundColor: '#38D4DE',
        width: 286,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
    },
});

export const inicStyles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 45,
    }
});

export const ModalWebViewStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000cc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    webViewContainer: {
        backgroundColor: 'black',
        width: width-50,
        height: height-80,
        borderRadius: 33,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 15,
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
    },
    button: {
        backgroundColor: '#38D4DE',
        width: width/3,
        height: 40,
        borderRadius: 25,
        alignItems: 'center',
    }
});