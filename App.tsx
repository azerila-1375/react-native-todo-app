import { GluestackUIProvider, Text } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme
import Home from "./src/View/Components/Home/Home"
import { Provider } from 'react-redux';
import { store } from './src/Redux/Store';

export default function App() {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>

        <Home></Home>

      </GluestackUIProvider>
    </Provider>

  )
}