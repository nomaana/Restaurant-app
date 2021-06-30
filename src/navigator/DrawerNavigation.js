import {createDrawerNavigator} from '@react-navigation/drawer';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="SignupScreen" component={SignupScreen} />
      <Drawer.Screen name="Signin" component={SigninScreen} />
    </Drawer.Navigator>
  );
}
