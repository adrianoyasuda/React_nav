/*
  * Install: npm install --save react-navigation
  * Install: npm install --save react-native-phone-call
*/

import { createStackNavigator } from 'react-navigation';

import ListaContatos from './src/screens/ListaContatos';
import Contato from './src/screens/Contato';
import UpperCase from './src/util/UpperCase';

export default createStackNavigator(
  {
    'Main' : {
        screen : ListaContatos
    },
    'Contato' : {
      screen : Contato,
      navigationOptions : ( {navigation} ) => {
        const nome = UpperCase(navigation.state.params.pessoa.name.first);

        return ({ 
          title : nome 
        });
      }
    }
  },
  {
    navigationOptions : {
      title : 'Contatos',
      headerTintColor : 'white',
      headerStyle : {
        backgroundColor : '#000000',
        textAlign: 'middle',
      },
      headerTitleStyle : {
        fontSize : 26,
        color : 'white',
      }
    }
  }
);
