import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Grid from '@components/Grid';
import Button from '@components/Button';

import { ReactModalAdapter } from '@layout/index';

import logo from '@assets/top_logo(2020).png';

import SignIn from '@pages/user/SignIn';
import SignUp from '@pages/user/SignUp';

import { history } from '@reduxConfig';
import UserActions from '@redux/Users/UsersAction';

const Header = () => {
    const { isLogin } = useSelector((state) => state.UserInfo);

    const dispatch = useDispatch();

    const [signInMode, setSignInMode] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const onClickSignInModal = () => {
        setSignInMode(!signInMode);
    };

    const onClickSignOut = () => {
        dispatch(UserActions.signOutUser());
    };

    const onClickPost = () => {
        history.push('/post');
    };

    return (
        <>
            <Grid>
                <Grid isFlex padding='16px' maxWidth='1024px' margin='0 auto'>
                    <Logo
                        src={logo}
                        onClick={() => {
                            history.push('/notification');
                        }}
                    />

                    {isLogin ? (
                        <Grid width='220px' isFlex>
                            <Button
                                bold
                                size='16px'
                                border='1.5px solid rgb(52,58,64)'
                                color='rgb(52,58,64)'
                                backgroundColor='#fff'
                                padding='6px 18px'
                                borderRadius='20px'
                                _onClick={onClickPost}
                            >
                                새 글 작성
                            </Button>
                            <Button
                                bold
                                size='16px'
                                border='1.5px solid rgb(52,58,64)'
                                color='rgb(52,58,64)'
                                backgroundColor='#fff'
                                padding='6px 18px'
                                borderRadius='20px'
                                _onClick={onClickSignOut}
                            >
                                로그아웃
                            </Button>
                        </Grid>
                    ) : (
                        <Grid>
                            <Button
                                bold
                                size='16px'
                                color='#fff'
                                backgroundColor='rgb(52, 58, 64)'
                                padding='6px 18px'
                                border='none'
                                borderRadius='20px'
                                _onClick={toggleModal}
                            >
                                로그인
                            </Button>
                            <StyledModal
                                isOpen={modalOpen}
                                onRequestClose={toggleModal}
                                closeTimeoutMS={500}
                            >
                                {signInMode ? (
                                    <SignIn onClickModal={onClickSignInModal} />
                                ) : (
                                    <SignUp onClickModal={onClickSignInModal} />
                                )}

                                <FontAwesomeIcon
                                    icon={faTimes}
                                    size={'lg'}
                                    style={closeButtonStyle}
                                    onClick={closeModal}
                                />
                            </StyledModal>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </>
    );
};

const Logo = styled.img`
    width: 150px;
    height: 45px;
    cursor: pointer;
`;

const StyledModal = styled(ReactModalAdapter)`
    &__overlay {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(247, 247, 247, 0.8);
        transform: translateY(-50px);
        transition: all 500ms ease-in-out;

        &.ReactModal__Overlay--after-open {
            opacity: 1;
            transform: translateY(0px);
        }

        &.ReactModal__Overlay--before-close {
            opacity: 0;
            transform: translateY(-50px);
        }
    }

    &__content {
        width: 650px;
        height: 468px;
        margin: 0 auto;
        border: none;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        padding: 0px;
    }
`;

const closeButtonStyle = {
    position: 'relative',
    left: '615px',
    bottom: '450px',
    cursor: 'pointer',
};

export default Header;
