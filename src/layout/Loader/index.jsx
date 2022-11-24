import PropagateLoader from 'react-spinners/PropagateLoader';
import styled from 'styled-components';

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Loader = () => {
    return (
        <Flex>
            <PropagateLoader
                height='160'
                width='32'
                radius='8'
                color='#1dc4e9'
            />
        </Flex>
    );
};

export default Loader;
