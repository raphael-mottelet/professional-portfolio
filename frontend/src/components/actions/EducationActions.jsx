import axios from 'axios'
import {
    EUDUCATION_LIST_REQUEST,
    EUDUCATION_LIST_SUCCESS,
    EUDUCATION_LIST_FAIL,

    EUDUCATION_DETAILS_REQUEST,
    EUDUCATION_DETAILS_SUCCESS,
    EUDUCATION_DETAILS_FAIL,

    EUDUCATION_CREATE_REVIEW_REQUEST,
    EUDUCATION_CREATE_REVIEW_SUCCESS,
    EUDUCATION_CREATE_REVIEW_FAIL,
    EUDUCATION_CREATE_REVIEW_RESET,
} from '../constants/education-constants'

export const listEUDUCATION = () => async (dispatch) => {
    try {
        dispatch({type: EUDUCATION_LIST_REQUEST})

        const { data } = await axios.get(`/education/`)

        dispatch({
            type:EUDUCATION_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EUDUCATION_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}

export const listEUDUCATIONsDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: EUDUCATION_DETAILS_REQUEST})

        const { data } = await axios.get(`/education/${id}`)

        dispatch({
            type:EUDUCATION_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EUDUCATION_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }

}

export const createEUDUCATIONReview = (EUDUCATIONId, review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EUDUCATION_CREATE_REVIEW_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `/education/${EUDUCATIONId}/create/`,
            review,
            config
        )
        dispatch({
            type: EUDUCATION_CREATE_REVIEW_SUCCESS,
            payload: data,
        })



    } catch (error) {
        dispatch({
            type: EUDUCATION_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
