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

export const EXPERIENCEListReducer = (state = {EXPERIENCEs:[] }, action) => {
    switch(action.type) {

        case EXPERIENCE_LIST_REQUEST:
            return {loading: true, EXPERIENCEs: [] }

        case EXPERIENCE_LIST_SUCCESS:
            return {loading: false, EXPERIENCEs: action.payload}

        case EXPERIENCE_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const EXPERIENCEDetailsReducer = (state = {EXPERIENCE: {reviews:[]} }, action) => {
    switch(action.type) {

        case EXPERIENCE_DETAILS_REQUEST:
            return {loading: true, ...state }

        case EXPERIENCE_DETAILS_SUCCESS:
            return {loading: false, EXPERIENCE: action.payload}

        case EXPERIENCE_DETAILS_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}
