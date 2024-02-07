import axios from 'axios'
import {
    EXPERIENCE_LIST_REQUEST,
    EXPERIENCE_LIST_SUCCESS,
    EXPERIENCE_LIST_FAIL,

    EXPERIENCE_DETAILS_REQUEST,
    EXPERIENCE_DETAILS_SUCCESS,
    EXPERIENCE_DETAILS_FAIL,

    EXPERIENCE_CREATE_REVIEW_REQUEST,
    EXPERIENCE_CREATE_REVIEW_SUCCESS,
    EXPERIENCE_CREATE_REVIEW_FAIL,
    EXPERIENCE_CREATE_REVIEW_RESET,
} from '../constants/experience-constants'

export const listEXPERIENCE = () => async (dispatch) => {
    try {
        dispatch({type: EXPERIENCE_LIST_REQUEST})

        const { data } = await axios.get(`/experience/`)

        dispatch({
            type:EXPERIENCE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EXPERIENCE_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}

export const listEXPERIENCEsDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: EXPERIENCE_DETAILS_REQUEST})

        const { data } = await axios.get(`/experience/${id}`)

        dispatch({
            type:EXPERIENCE_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EXPERIENCE_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }

}

export const createEXPERIENCEReview = (EXPERIENCEId, review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EXPERIENCE_CREATE_REVIEW_REQUEST
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
            `/experience/${EXPERIENCEId}/create/`,
            review,
            config
        )
        dispatch({
            type: EXPERIENCE_CREATE_REVIEW_SUCCESS,
            payload: data,
        })



    } catch (error) {
        dispatch({
            type: EXPERIENCE_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
