export const SETTOKEN = 'SETTOKEN';

export const setToken = token => dispatch => {
    dispatch({
        type: SETTOKEN,
        payload: token,
    });
};

//https://www.youtube.com/watch?v=BtJoy4G3N8U