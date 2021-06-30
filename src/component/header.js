import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useLinkProps} from '@react-navigation/native';
import IconEntypo from 'react-native-vector-icons/Entypo';

export default function Header({title}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        width: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#333',
            letterSpacing: 1,
            alignSelf: 'center',
          }}>
          {title}
        </Text>
        {/* <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../asserts/Cart.png')}
            style={{width: 35, height: 35}}
          />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

// export default function MenuLogo() {
//   return (
//     <IconEntypo.Button
//       name="menu"
//       size={25}
//       backgroundColor="rgba(0,0,0,0.1)"
//       // onPress={() => navigation.openDrawer()}
//     />
//   );
// }
