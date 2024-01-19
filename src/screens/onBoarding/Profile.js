import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../assets/constant/colors';
import {
  Img,
  camera,
  logo,
  profile,
  shieldUser,
  users,
} from '../../assets/icons/imgIndex';
import ProfileCard from '../../assets/components/ProfileCard';
import {SvgImg} from '../../assets/components/SvgImg';

export default function Profile() {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, backgroundColor: '#E5F2FF'}}>
      <StatusBar backgroundColor={'#E5F2FF'} barStyle={'dark-content'} />
      <ImageBackground
        style={{flex: 1}}
        source={require('./../../assets/icons/vector.png')}>
        <View style={{flex: 1}}>
          <View style={styles.subView}>
            <View>
              <Image source={Img} style={{height: 105, width: 105}} />
              <TouchableOpacity style={styles.cameraBtn}>
                <SvgImg iconName={camera} size={20} />
              </TouchableOpacity>
            </View>
            <Text style={styles.mainText}>Miriam de Jesús</Text>
            <Text style={styles.subText}>h.mariano@gmail.com</Text>
          </View>

          <View style={{marginTop: 20}}>
            <ProfileCard iconName={profile} title="Account information" />
            <ProfileCard
              iconName={shieldUser}
              title="Google Business Profile"
            />
            <ProfileCard iconName={users} title="Team members" />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  subView: {
    marginTop: 50,
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    color: colors.themeColor,
    marginVertical: 8,
    fontWeight: '600',
  },
  subText: {
    fontSize: 14,
    color: colors.secondaryColor,
  },
  cameraBtn: {
    padding: 8,
    position: 'absolute',
    backgroundColor: colors.themeColor,
    borderRadius: 50,
    bottom: 0,
    right: 0,
  },
});
