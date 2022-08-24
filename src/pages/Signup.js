import {
    StyledTextInput,
    StyledFormArea,
    StyledFormButton,
    StyledLabel,
    Avatar,
    StyledTitle,
    colors,
    ButtonGroup,
    ExtraText,
    TextLink,
    CopyrightText
} from './../components/Styles';

import Logo from './../assets/logo.png';

import Chessboard from './../components/Chessboard/Chessboard';

import {Formik, Form} from 'formik';
import {TextInput} from './../components/FormLib';
import * as Yup from 'yup';
import {ThreeDots, MutatingDots} from 'react-loader-spinner';

import {FiMail, FiLock, FiUser, FiCalendar} from 'react-icons/fi';

//auth and redux
import {connect} from 'react-redux';
import {signupUser} from './../auth/actions/userActions';
import {useNavigate} from 'react-router-dom';

const Signup = ({signupUser}) => {
    const navigate = useNavigate();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>
                    Player Signup
                </StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        repeatPassword: "",
                        dateOfBirth: "",
                        name: ""
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid email address").required("Required"),
                            password: Yup.string().min(8, "Password is too short").max(30, "Password is too long").required("Required"),
                            name: Yup.string().required("Required"),
                            dateOfBirth: Yup.date().required("Required"),
                            repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Passwords do not match")
                        })
                    }
                    onSubmit={(values, {setSubmitting, setFieldError}) => {
                        signupUser(values, navigate, setFieldError, setSubmitting)
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput 
                                name="name"
                                type="text"
                                label="Full Name"
                                placeholder="Full Name"
                                icon={<FiUser />}
                            />

                            <TextInput 
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="example@example.com"
                                icon={<FiMail />}
                            />

                            <TextInput 
                                name="dateOfBirth"
                                type="date"
                                label="Date of Birth"
                                icon={<FiCalendar />}
                            />

                            <TextInput 
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="*****"
                                icon={<FiLock />}
                            />

                            <TextInput 
                                name="repeatPassword"
                                type="password"
                                label="Repeat Password"
                                placeholder="*****"
                                icon={<FiLock />}
                            />


                            <ButtonGroup>
                                {!isSubmitting && <StyledFormButton type="submit">Signup</StyledFormButton>}


                                {isSubmitting && (
                                    <MutatingDots
                                        color={colors.theme}
                                        height={100}
                                        width={100}
                                    />
                                )}
                            </ButtonGroup>
                        </Form>
                    )
                    }
                </Formik>
                <ExtraText>
                    Already a registered player? <TextLink to='/login'>Login</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All rights reserved &copy;2022
            </CopyrightText>
        </div>
    )
}

export default connect(null, {signupUser})(Signup);