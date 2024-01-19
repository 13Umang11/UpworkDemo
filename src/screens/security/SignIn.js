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
} from '../../assets/icons/imgIndex';
import {colors} from '../../assets/constant/colors';
import CTtextInput from '../../assets/components/CTtextInput';
import {CheckBox} from '../../assets/components/CheckBox';
import {SvgImg} from '../../assets/components/SvgImg';
import {loginApi} from '../../services/AuthApis';
import {saveUser} from '../../redux/actions/userActions';
import {useDispatch} from 'react-redux';
import {checkEmail, checkPassoword} from '../../assets/validation';
import LottieView from 'lottie-react-native';

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const validate = () => {
    let isValid = true;
    let temp = {...error};

    if (!checkEmail(email)) {
      temp.email = 'Please enter a valid Email Address!';
      isValid = false;
    }
    if (!checkPassoword(password)) {
      temp.password = 'Please enter valid password!';
      isValid = false;
    }

    if (isValid) {
      setError({email: '', password: '', mobileNo: ''});
      loginHandler();
    } else {
      setError(temp);
    }
  };

  const loginHandler = () => {
    setLoading(false);
    let params = {
      email: email,
      password: password,
    };
    loginApi(params).then(async response => {
      if (response?.success) {
        setLoading(false);
        console.log('response?.data :>> ', response?.data);
        dispatch(saveUser(response?.data));
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
            <Text style={styles.mainText}>Sign in</Text>
            <Text style={styles.subText}>
              You don’t have account let’s create account
            </Text>
          </View>

          {/* TextInput section style */}
          <View>
            <CTtextInput
              viewStyle={{marginTop: 44}}
              iconName={mailbox}
              size={25}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder="Email"
              error={error?.email}
            />
            <CTtextInput
              size={22}
              viewStyle={{marginTop: 24}}
              iconName={lock}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              placeholder="Password"
              maxLength={6}
              error={error?.password}
            />
          </View>

          {/* checkbox style */}
          <View
            style={{
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <CheckBox title={'Remember Me'} check={check} setCheck={setCheck} />
            <Text style={{fontSize: 14, color: colors.themeColor}}>
              Forgot password?
            </Text>
          </View>

          {/* LoginBtn Section style */}
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 80,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity style={styles.loginBtns}>
              <SvgImg iconName={faceBook} size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtns}>
              <SvgImg iconName={apple} size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtns}>
              <SvgImg iconName={google} size={24} />
            </TouchableOpacity>
          </View>

          {/* Or style */}
          <View style={styles.orLine}>
            <View style={styles.border} />
            <Text style={{marginHorizontal: 5, color: colors.themeColor}}>
              Or
            </Text>
            <View style={styles.border} />
          </View>

          {/* Sign Up style */}
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text>Don’t have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={{color: colors.themeColor}}> Sign Up</Text>
            </TouchableOpacity>
          </View>

          {/* proceed Btn style */}
          <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 30}}>
            <TouchableOpacity
              style={{
                marginHorizontal: 20,
                padding: 20,
                backgroundColor: colors.themeColor,
                marginTop: 30,
                borderRadius: 50,
                alignItems: 'center',
              }}
              onPress={validate}>
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
