import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Fab from '@mui/material/Fab';
import Slide from '@mui/material/Slide';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Wrapper = styled.div`
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 3rem;
    height: 3rem;
`;

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <Wrapper>
            <Slide direction='up' in={isVisible} mountOnEnter unmountOnExit>
                <Fab
                    style={{ background: '#1dc4e9', color: 'white' }}
                    size='small'
                    aria-label='scroll back to top'
                    onClick={scrollToTop}
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </Slide>
        </Wrapper>
    );
};

export default ScrollToTop;
