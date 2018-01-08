import {
    StyleSheet,
} from 'react-native';

var styles = StyleSheet.create({
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    container: {
        flex: 1,
        alignItems: 'flex-start',
        height: 160,
    },
    mainContainerWithPadding: {
        flex: 1,
        justifyContent: 'space-around',
        marginTop: 150,
        margin :30,

    },
    iconContainer: {
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 1,
        justifyContent: 'center',
        height: 50,
        width: 50,
    },
    overlay: {
        opacity: 0.8,
        alignSelf: 'flex-end',
        margin: 15,
        // backgroundColor: '#000000'
    },
    logo: {
        backgroundColor: 'rgba(0,0,0,0)',
        width: 60,
        height: 60,
        alignSelf: 'flex-end',
    },
    backdrop: {
        flex: 1,
        flexDirection: 'column'
    },
    headlineContainer: {
        marginBottom: 40,
        marginLeft: 20,
        alignContent: 'flex-start'
    },
    headline: {
        fontSize: 24,
        fontWeight: '400',
        textAlign: 'left',
        color: 'white',
        backgroundColor: 'transparent'
    },
    title: {
        fontSize: 18,
        fontWeight: '200',
        textAlign: 'left',
        color: 'white',
        backgroundColor: 'transparent'
    },
    lightInput: {
        //fontcolor: '#ffffff',
        color: '#ffffff'
    }
});

export default styles