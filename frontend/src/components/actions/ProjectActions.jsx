import axios from 'axios'
import {
    PROJECT_LIST_REQUEST,
    PROJECT_LIST_SUCCESS,
    PROJECT_LIST_FAIL,

    PROJECT_DETAILS_REQUEST,
    PROJECT_DETAILS_SUCCESS,
    PROJECT_DETAILS_FAIL,

    PROJECT_CREATE_REVIEW_REQUEST,
    PROJECT_CREATE_REVIEW_SUCCESS,
    PROJECT_CREATE_REVIEW_FAIL,
    PROJECT_CREATE_REVIEW_RESET,
} from '../constants/project-constants'

export const listPROJECT = () => async (dispatch) => {
    try {
        dispatch({type: PROJECT_LIST_REQUEST})

        const { data } = await axios.get(`/project/`)

        dispatch({
            type:PROJECT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PROJECT_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}

export const listPROJECTsDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: PROJECT_DETAILS_REQUEST})

        const { data } = await axios.get(`/project/${id}`)

        dispatch({
            type:PROJECT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PROJECT_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }

}

export const createPROJECTReview = (PROJECTId, review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PROJECT_CREATE_REVIEW_REQUEST
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
            `/project/${PROJECTId}/create/`,
            review,
            config
        )
        dispatch({
            type: PROJECT_CREATE_REVIEW_SUCCESS,
            payload: data,
        })



    } catch (error) {
        dispatch({
            type: PROJECT_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
