import React from 'react';
import {Provider} from 'react-redux';
import store from './configureStore';
import {Root} from "native-base";
import AppNavigator from './AppNavigator';

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Root>
                    <AppNavigator/>
                </Root>
            </Provider>
        );
    }
}

export default App;
