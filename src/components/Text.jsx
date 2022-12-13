import styled from 'styled-components';

const Text = (props) => {
    const { bold, color, size, children, margin, align } = props;

    const styles = { bold: bold, color: color, size: size, margin, align };
    return <TextWrapper {...styles}>{children}</TextWrapper>;
};

Text.defaultProps = {
    children: null,
    bold: false,
    color: '#222831',
    size: '14px',
    margin: '',
    align: '',
};

const TextWrapper = styled.p`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold ? '600' : '400')};
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
    ${(props) => (props.align ? `text-align:${props.align};` : '')};
`;

export default Text;
