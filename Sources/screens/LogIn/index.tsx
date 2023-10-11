import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { View, Button, StatusBar,  } from 'react-native';

import { styles } from './styles';
WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/e2ab8ffbefc5b983f71b',
};

export default function Login() {

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: 'e2ab8ffbefc5b983f71b',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'devGarden',
        preferLocalhost: true
      }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      console.log(code);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Button title='Enter with Github' onPress={() => promptAsync()} />
      <StatusBar />
    </View>
  );
}