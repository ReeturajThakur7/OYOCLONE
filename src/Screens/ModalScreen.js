import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import location from '../consts/locations';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Modal from 'react-native-modal';

const {height, width} = Dimensions.get('screen');

const status = getStatusBarHeight();

const ModalScreen = props => {
  const onRender = ({item}) => {
    return (
      <View
        style={{
          borderWidth: 1,
          padding: 7,
          borderRadius: 18,

          marginRight: '10%',
          marginVertical: 4,
          borderColor: 'grey',
        }}>
        <Text style={{color: 'white'}}>{item.name}</Text>
      </View>
    );
  };
  return (
    <Modal
      backdropColor="red"
      backdropOpacity={1}
      onRequestClose={() => {
        props.setModal(!props.modal);
      }}
      style={{width: '100%', alignSelf: 'center'}}
      animationType="slide"
      isVisible={props.modal}
      autoFocus={false}>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <View
          style={{
            flex: 1,
            marginTop: status,
            backgroundColor: '#272727',
          }}>
          <View
            style={{
              height: height / 14,
              backgroundColor: '#272727',
              padding: 10,
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: 'grey',
            }}>
            <TouchableOpacity
              onPress={() => {
                props.setModal(!props.modal);
              }}
              activeOpacity={0.9}
              style={{height: height / 20, width: width / 13}}>
              <Image
                resizeMode="contain"
                style={{height: '100%', width: '100%'}}
                source={require('../assests/Images/leftarrow.png')}
              />
            </TouchableOpacity>
            <TextInput
              placeholderTextColor={'white'}
              style={{
                width: width / 1.2,
                paddingHorizontal: 15,
              }}
              placeholder="Search"
              color={'white'}
            />
          </View>
          <View style={{padding: 10}}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Popular Locations
            </Text>
            <FlatList
              style={{paddingVertical: 12}}
              numColumns={3}
              data={location}
              renderItem={onRender}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({});
