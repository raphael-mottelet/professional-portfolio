import {
    SOCIAL_LINK_LIST_REQUEST,
    SOCIAL_LINK_LIST_SUCCESS,
    SOCIAL_LINK_LIST_FAIL,

    SOCIAL_LINK_DETAILS_REQUEST,
    SOCIAL_LINK_DETAILS_SUCCESS,
    SOCIAL_LINK_DETAILS_FAIL,

    SOCIAL_LINK_CREATE_REVIEW_REQUEST,
    SOCIAL_LINK_CREATE_REVIEW_SUCCESS,
    SOCIAL_LINK_CREATE_REVIEW_FAIL,
    SOCIAL_LINK_CREATE_REVIEW_RESET,

    
} from '../constants/social-link-constants'

export const SOCIAL_LINKListReducer = (state = {SOCIAL_LINKs:[] }, action) => {
    switch(action.type) {

        case SOCIAL_LINK_LIST_REQUEST:
            return {loading: true, SOCIAL_LINKs: [] }

        case SOCIAL_LINK_LIST_SUCCESS:
            return {loading: false, SOCIAL_LINKs: action.payload}

        case SOCIAL_LINK_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const SOCIAL_LINKDetailsReducer = (state = {SOCIAL_LINK: {reviews:[]} }, action) => {
    switch(action.type) {

        case SOCIAL_LINK_DETAILS_REQUEST:
            return {loading: true, ...state }

        case SOCIAL_LINK_DETAILS_SUCCESS:
            return {loading: false, SOCIAL_LINK: action.payload}

        case SOCIAL_LINK_DETAILS_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}
