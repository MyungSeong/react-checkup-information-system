import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast, Flip } from 'react-toastify';

import Grid from '@components/Grid';
import Text from '@components/Text';
import Input from '@components/Input';
import Button from '@components/Button';

import welcomeImage from '@assets/undraw_joyride_hnno.fae6b95e.svg';

import { setSession } from '@lib';

import { history } from '@reduxConfig';
import UserActions from '@redux/Users/UsersAction';

import 'react-toastify/dist/ReactToastify.css';

const SignIn = ({ onClickModal }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();

    const idRef = useRef();
    const passwordRef = useRef();

    const onChangeID = (e) => {
        setId(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onClickSignIn = () => {
        if (!id || !password) {
            toast.error('이메일 또는 비밀번호를 입력해주세요.', {
                autoClose: 2000,
                position: toast.POSITION.TOP_RIGHT,
                theme: 'colored',
                transition: Flip,
            });

            idRef.current.focus();

            return;
        }

        try {
            dispatch(UserActions.signInUser({ id, password }));
        } catch (error) {
            toast.error('이메일 또는 비밀번호를 확인해주세요.', {
                autoClose: 2000,
                position: toast.POSITION.TOP_RIGHT,
                theme: 'colored',
                transition: Flip,
            });

            idRef.current.focus();
        }
    };

    const showPasswordToggle = () => {
        setShowPassword(!showPassword);

        passwordRef.current.type = showPassword ? 'password' : 'text';
    };

    return (
        <>
            <Grid mainFlex width='100%'>
                <Grid
                    width='60%'
                    bg='#f1f3f5'
                    margin='0px 20px 0px 0px'
                    padding='170px 0px 150px 10px'
                >
                    <WelcomeImage src={welcomeImage} />
                    <Text size='28px' color='#495057' bold align='center'>
                        환영합니다
                    </Text>
                </Grid>

                <Grid width='90%' margin='0px 0px 0px 10px'>
                    <Grid padding='0px 30px 0px 0px'>
                        <Text bold size='21px'>
                            로그인
                        </Text>
                        <Text margin='5px 0px' size='14px' align='left'>
                            이메일
                        </Text>
                        <Input
                            _ref={idRef}
                            padding='12px 0px'
                            margin='0px 12px 12px 0px'
                            value={id}
                            name='email'
                            placeholder='메일을 입력해주세요'
                            _onChange={onChangeID}
                            autofocus
                        />
                        <Text margin='5px 0px' size='14px' align='left'>
                            비밀번호
                        </Text>
                        <Input
                            _ref={passwordRef}
                            padding='12px 0px'
                            margin='0px 12px 12px 0px'
                            placeholder='비밀번호를 입력해주세요'
                            value={password}
                            name='current-password'
                            type='password'
                            _onChange={onChangePassword}
                        />
                        {showPassword ? (
                            <FontAwesomeIcon
                                style={showPasswordStyle}
                                icon={faEye}
                                onClick={showPasswordToggle}
                            />
                        ) : (
                            <FontAwesomeIcon
                                style={showPasswordStyle}
                                icon={faEyeSlash}
                                onClick={showPasswordToggle}
                            />
                        )}
                        <Button
                            bold
                            color='white'
                            size='15px'
                            padding='14px'
                            width='100%'
                            border='none'
                            _onClick={onClickSignIn}
                        >
                            로그인
                        </Button>
                    </Grid>

                    <Grid flexEnd>
                        <Text margin='0px 40px'>아직 회원이 아니신가요?</Text>
                        <SignUpButton onClick={onClickModal}>
                            회원가입
                        </SignUpButton>
                    </Grid>
                </Grid>
            </Grid>
            <ToastContainer />
        </>
    );
};

const WelcomeImage = styled.img`
    width: 170px;
    display: flex;
    margin: 0px 0px 0px 30px;
`;

const SignUpButton = styled.span`
    color: rgb(18, 184, 134);
    font-weight: bold;
    margin: 12px;
    font-size: 15px;
    cursor: pointer;
`;

const showPasswordStyle = {
    position: 'relative',
    left: '310px',
    bottom: '45px',
    cursor: 'pointer',
};

export default SignIn;
