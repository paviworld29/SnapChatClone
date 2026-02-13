import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Route from './src/navigation/Routes';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Route />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
