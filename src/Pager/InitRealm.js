/* @flow */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Realm from 'realm';

class Histroy {}
Histroy.schema = {
    name: 'Histroy',
    properties: {
        id:'int',
        name: 'string',
    },
};

function InitRealm (){
  global.realm = new Realm({schema: [Histroy]});
}
module.exports={
  InitRealm
}
