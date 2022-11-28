import * as UsersAPI from '@api/UsersAPI';
import Types from '../../ActionConstants';

const UsersAction = {
    signInUser: (userInfo) => async (dispatch) => {
        dispatch({ type: Types.SIGNIN_USER });

        try {
            const result = await UsersAPI.signInUser(userInfo);

            if (!result) throw new Error(`User login failed: ${result}`);

            dispatch({
                type: Types.SIGNIN_USER_SUCCESS,
                payload: result,
            });
        } catch (error) {
            dispatch({
                type: Types.SIGNIN_USER_FAILURE,
                payload: error,
            });
        }
    },
};
