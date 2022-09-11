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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 6,
        borderRadius: 33,
    },
});

export const inicStyles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 45,
    }
});

const borderDevStyle = '#f0f6fc1a';

export const devStyles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: '#161b22',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        borderRadius: 33,
    },
    topContainer: {
        paddingBottom: 10, paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    image: {
        width: 65,
        height: 65,
        borderColor: borderDevStyle, borderWidth: 2,
        borderRadius: 100,
    },
    emoji: {
        position: 'absolute',
        backgroundColor: '#0d1117',
        borderRadius: 100,
        width: 15,
        height: 15,
        right: 2,
        bottom: 2,
    },
    title: {
        color: '#c9d1d9',
        fontSize: 24,
        maxWidth: 259,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Inter_700Bold',
    },
    text: {
        color: '#8b949e',
        maxWidth: 286,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Inter_400Regular',
    },
    buttonContainer: {
        alignItems: 'center',
        width: '100%',
        marginBottom: 10, marginTop: 5,
    },
    button: {
        backgroundColor: '#21262d',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        borderRadius: 6,
        borderColor: borderDevStyle,
        borderWidth: 2,
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
    },
});