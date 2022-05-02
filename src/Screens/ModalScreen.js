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
      <View style={renderView}>
        <Text style={styles.txtName}>{item.name}</Text>
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
      style={styles.ModalView}
      animationType="slide"
      isVisible={props.modal}
      autoFocus={false}>
      <View style={styles.ViewinModal}>
        <View style={styles.subView}>
          <View style={styles.PView}>
            <TouchableOpacity
              onPress={() => {
                props.setModal(!props.modal);
              }}
              activeOpacity={0.9}
              style={styles.TchViewleft}>
              <Image
                resizeMode="contain"
                style={styles.leftimg}
                source={require('../assests/Images/leftarrow.png')}
              />
            </TouchableOpacity>
            <TextInput
              placeholderTextColor={'white'}
              style={styles.txtInput}
              placeholder="Search"
              color={'white'}
            />
          </View>
          <View style={styles.Viewlctn}>
            <Text style={styles.txtPop}>Popular Locations</Text>
            <FlatList
              style={styles.fltaView}
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

const styles = StyleSheet.create({
  fltaView: {paddingVertical: 12},
  txtPop: {color: 'white', fontWeight: 'bold'},
  Viewlctn: {padding: 10},
  txtInput: {
    width: width / 1.2,
    paddingHorizontal: 15,
  },
  leftimg: {height: '100%', width: '100%'},
  TchViewleft: {height: height / 20, width: width / 13},
  PView: {
    height: height / 14,
    backgroundColor: '#272727',
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  subView: {
    flex: 1,
    backgroundColor: '#272727',
  },
  ViewinModal: {flex: 1, backgroundColor: 'red'},
  ModalView: {width: '100%', alignSelf: 'center'},
  txtName: {color: 'white'},
  renderView: {
    borderWidth: 1,
    padding: 7,
    borderRadius: 18,
    marginRight: '10%',
    marginVertical: 4,
    borderColor: 'grey',
  },
});
