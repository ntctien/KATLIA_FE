// VERIFY EMAIL FOR SIGN UP
export const SIGN_UP = '/auth/verifyEmailForSignUp'
export const getSignupBody = (email, name, password) => ({
  email: email,
  name: name,
  password: password
})

//SIGN UP BY EMAIL AND OTP
export const SIGN_UP_OTP = '/auth/signUpByEmailAndOTP'
export const getSignupOTPBody = (email, otp) => ({
  email: email,
  otp: otp
})

//SIGN IN WITH EMAIL AND PASSWORD
export const SIGN_IN = '/auth/signInWithEmailAndPassword'
export const getSigninBody = (email, password) => ({
  email: email,
  password: password
})

//GET PRODUCT BY GENDER
export const GET_PRODUCT_BY_GENDER = '/product/getProductByGender/{gender}'
export const getProductByGender = (gender) => ({
  gender: gender
})

//GET PRODUCT BY CATEGORY ID
export const GET_PRODUCT_BY_CATEGORY