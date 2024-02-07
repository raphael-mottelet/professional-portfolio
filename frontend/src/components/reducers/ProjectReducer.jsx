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

export const PROJECTListReducer = (state = {PROJECTs:[] }, action) => {
    switch(action.type) {

        case PROJECT_LIST_REQUEST:
            return {loading: true, PROJECTs: [] }

        case PROJECT_LIST_SUCCESS:
            return {loading: false, PROJECTs: action.payload}

        case PROJECT_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const PROJECTDetailsReducer = (state = {PROJECT: {reviews:[]} }, action) => {
    switch(action.type) {

        case PROJECT_DETAILS_REQUEST:
            return {loading: true, ...state }

        case PROJECT_DETAILS_SUCCESS:
            return {loading: false, PROJECT: action.payload}

        case PROJECT_DETAILS_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}
