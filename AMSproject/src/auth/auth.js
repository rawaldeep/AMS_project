import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';

export const facebookLogin = {
    async logIn() {
        try {
            await Facebook.initializeAsync('480576342865028');
            const {
                type,
                token,
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });
            await Facebook.setAutoInitEnabledAsync(true);
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            } else {
                type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }
};

export const googleLogin = {
    async signInWithGoogleAsync() {
        try {
            const result = await Google.logInAsync({
                iosClientId: '430651409692-fg9hb7lvuhp2e73dg1ami28g7mpgsh1n.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });
            if (result.type === 'success') {
                this.props.navigation.navigate('Map');
                return result.accessToken;
            } else {
                this.props.navigation.navigate('Login');
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }
};