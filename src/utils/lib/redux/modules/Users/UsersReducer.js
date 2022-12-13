import Types from '../../ActionConstants';

const initialState = {
    userInfo: {
        // userName: '',
    },
    isLogin: false,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.SIGNIN_USER:
            return {
                ...state,
                userInfo: payload,
                isLogin: true,
            };

        default:
            return state;
    }
};

export default reducer;
