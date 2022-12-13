import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast, Flip } from 'react-toastify';

import Grid from '@components/Grid';
import Text from '@components/Text';
import Input from '@components/Input';
import Button from '@components/Button';

import welcomeImage from '@assets/undraw_joyride_hnno.fae6b95e.svg';

import UserActions from '@redux/Users/UsersAction';

import { validateId } from '@lib';

import 'react-toastify/dist/ReactToastify.css';

const SignUp = ({ onClickModal }) => {
    const [id, setId] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const dispatch = useDispatch();

    const idRef = useRef();
    const passwordRef = useRef();

    const onChangeEmail = (e) => {
        setId(e.target.value);
    };

    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangePasswordCheck = (e) => {
        setPasswordCheck(e.target.value);
    };

    const onClickSignUp = () => {
        if (!validateId(id)) {
            toast.error('아이디 형식은 영문과 숫자만 가능합니다.', {
                autoClose: 2000,
                position: toast.POSITION.TOP_RIGHT,
                theme: 'colored',
                transition: Flip,
            });

            setId('');
            idRef.current.focus();

            return;
        }

        if (password !== passwordCheck) {
            toast.error('비밀번호가 일치하지 않습니다.', {
                autoClose: 2000,
                position: toast.POSITION.TOP_RIGHT,
                theme: 'colored',
                transition: Flip,
            });

            setPassword('');
            setPasswordCheck('');
            passwordRef.current.focus();

            return;
        }

        if (!id || !userName || !password || !passwordCheck) {
            toast.error('빈 칸을 입력해주세요.', {
                autoClose: 2000,
                position: toast.POSITION.TOP_RIGHT,
                theme: 'colored',
                transition: Flip,
            });

            return;
        }

        // dispatch(userActions.SignUpDB(id, password, userName));
        onClickModal();
    };

    return (
        <form onSubmit={onClickModal}>
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
                            회원가입
                        </Text>
                        <Text margin='5px 0px' size='14px' align='left'>
                            이메일 입력
                        </Text>
                        <Input
                            _ref={idRef}
                            padding='12px 0px'
                            margin='0px 12px 12px 0px'
                            value={id}
                            name='email'
                            placeholder='메일을 입력해주세요'
                            _onChange={onChangeEmail}
                            autofocus
                        />

                        <Text margin='5px 0px' size='14px' align='left'>
                            닉네임 입력
                        </Text>
                        <Input
                            padding='12px 0px'
                            margin='0px 12px 12px 0px'
                            value={userName}
                            name='username'
                            placeholder='닉네임을 입력해주세요'
                            _onChange={onChangeUserName}
                        />

                        <Text margin='5px 0px' size='14px' align='left'>
                            비밀번호 입력
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

                        <Text margin='5px 0px' size='14px' align='left'>
                            비밀번호 확인
                        </Text>
                        <Input
                            padding='12px 0px'
                            margin='0px 12px 12px 0px'
                            placeholder='비밀번호를 확인해주세요'
                            value={passwordCheck}
                            name='new-password'
                            type='password'
                            _onChange={onChangePasswordCheck}
                        />
                        <Button
                            bold
                            color='white'
                            size='15px'
                            padding='14px'
                            width='100%'
                            border='none'
                            _onClick={onClickSignUp}
                        >
                            회원가입
                        </Button>
                    </Grid>

                    <Grid flexEnd>
                        <Text margin='0px 50px'>계정이 이미 있으신가요?</Text>
                        <SignInButton onClick={onClickModal}>
                            로그인
                        </SignInButton>
                    </Grid>
                </Grid>
            </Grid>
            <ToastContainer />
        </form>
    );
};

const WelcomeImage = styled.img`
    width: 170px;
    display: flex;
    margin: 0px 0px 0px 30px;
`;

const SignInButton = styled.span`
    color: rgb(18, 184, 134);
    font-weight: bold;
    margin: 12px;
    font-size: 15px;
    cursor: pointer;
`;

export default SignUp;
