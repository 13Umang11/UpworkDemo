import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  apple,
  faceBook,
  google,
  logo,
  mailbox,
  lock,
  user,
} from '../../assets/icons/imgIndex';
import {colors} from '../../assets/constant/colors';
import CTtextInput from '../../assets/components/CTtextInput';
import {CheckBox} from '../../assets/components/CheckBox';
import {SvgImg} from '../../assets/components/SvgImg';
import {registerApi} from '../../services/AuthApis';
import {checkEmail, checkPassoword} from '../../assets/validation';
import LottieView from 'lottie-react-native';

export default function SignUp({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    email: '',
    password: '',
    name: '',
  });
  const validate = () => {
    let isValid = true;
    let temp = {...error};

    if (!name) {
      temp.name = 'Please enter a valid Name!';
      isValid = false;
    }
    if (!checkEmail(email)) {
      temp.email = 'Please enter a valid Email Address!';
      isValid = false;
    }
    if (!checkPassoword(password)) {
      temp.password = 'Please enter valid password!';
      isValid = false;
    }

    if (isValid & check & check1) {
      setError({email: '', password: '', mobileNo: ''});
      register();
    } else {
      setError(temp);
    }
  };

  const register = () => {
    setLoading(false);
    let params = {
      name: name,
      email: email,
      password: password,
    };
    registerApi(params).then(async response => {
      if (response?.success) {
        setLoading(false);
        navigation.goBack();
      } else {
        alert(response?.message);
      }
    });
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,.5)',
          }}>
          <LottieView
            source={require('../../assets/icons/loder.json')}
            style={styles.loder}
            autoPlay
          />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <View style={styles.subView}>
            <Image source={logo} />
            <Text style={styles.mainText}>Create an account</Text>
            <Text style={styles.subText}>
              You don’t have account let’s create account
            </Text>
          </View>

          {/* TextInput section style */}
          <View>
            <CTtextInput
              viewStyle={{marginTop: 44}}
              iconName={user}
              size={25}
              value={name}
              onChangeText={setName}
              placeholder="Name"
              error={error?.name}
            />
            <CTtextInput
              viewStyle={{marginTop: 24}}
              iconName={mailbox}
              size={25}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
              error={error?.email}
            />
            <CTtextInput
              size={22}
              viewStyle={{marginTop: 24}}
              iconName={lock}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              placeholder="Create Password"
              maxLength={6}
              error={error?.password}
            />
          </View>

          {/* checkbox style */}
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 30,
            }}>
            <CheckBox
              title={'I agree with terms & conditions'}
              check={check}
              setCheck={setCheck}
              titleStyle={{fontWeight: '500'}}
            />
          </View>
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 10,
            }}>
            <CheckBox
              title={'Allow Notifications'}
              check={check}
              setCheck={setCheck}
              titleStyle={{fontWeight: '500'}}
            />
          </View>

          {/* proceed Btn style */}
          <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 30}}>
            <TouchableOpacity
              onPress={validate}
              style={{
                marginHorizontal: 20,
                padding: 20,
                backgroundColor: colors.themeColor,
                marginTop: 30,
                borderRadius: 50,
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 16, fontWeight: '500', color: colors.white}}>
                Proceed
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  subView: {
    marginTop: 20,
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    color: colors.themeColor,
    marginVertical: 10,
    fontWeight: '600',
  },
  subText: {
    fontSize: 14,
    color: colors.secondaryColor,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: colors.secondaryColor,
    height: '50%',
    flex: 1,
  },
  orLine: {
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 30,
  },
  loginBtns: {
    width: 50,
    height: 50,
    elevation: 5,
    borderRadius: 50,
    alignItems: 'center',
    marginHorizontal: 12,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  loder: {
    height: 100,
    width: 100,
  },
});
