import { Box, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';

import FlexBox from 'components/FlexBox';
import { H1, Paragraph } from 'components/Typography';

import ErrorImage from '@assets/error-page.svg';

const ErrorPage = () => {
    return (
        <FlexBox
            p={4}
            height='100%'
            alignItems='center'
            flexDirection='column'
            justifyContent='center'
        >
            <Box maxWidth={350}>
                <img src={ErrorImage} width='100%' alt='Error 404' />
            </Box>
            <H1 fontSize={64} fontWeight={700} color='primary.main' mt={3}>
                404 Not Found!
            </H1>
            <Paragraph color='text.disabled' fontWeight='500'>
                페이지를 찾을 수 없습니다.
            </Paragraph>
        </FlexBox>
    );
};

export default ErrorPage;
