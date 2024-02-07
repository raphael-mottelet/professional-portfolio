import axios from 'axios'
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

export const listSOCIAL_LINK = () => async (dispatch) => {
    try {
        dispatch({type: SOCIAL_LINK_LIST_REQUEST})

        const { data } = await axios.get(`/social-link/`)

        dispatch({
            type:SOCIAL_LINK_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SOCIAL_LINK_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}

export const listSOCIAL_LINKsDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: SOCIAL_LINK_DETAILS_REQUEST})

        const { data } = await axios.get(`/social-link/${id}`)

        dispatch({
            type:SOCIAL_LINK_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SOCIAL_LINK_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }

}

export const createSOCIAL_LINKReview = (SOCIAL_LINKId, review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SOCIAL_LINK_CREATE_REVIEW_REQUEST
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
            `/social-link/${SOCIAL_LINKId}/create/`,
            review,
            config
        )
        dispatch({
            type: SOCIAL_LINK_CREATE_REVIEW_SUCCESS,
            payload: data,
        })



    } catch (error) {
        dispatch({
            type: SOCIAL_LINK_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

/*Code au cas ou ça ne marche pas

import { 
    SOCIAL_LINK_LIST_REQUEST,
    SOCIAL_LINK_LIST_SUCCESS,
    SOCIAL_LINK_LIST_FAIL
 } from '../constants/SOCIAL_LINKConstants'

export const listSOCIAL_LINKs = () => async (dispatch) => {
    try{
        dispatch({ type: SOCIAL_LINK_LIST_REQUEST })
        */
/*
 on recupere via l'url /SOCIAL_LINK qui nous permet de recuperer les données en JSON des produits
 on importe axios en recuperant la fonction permettant de faire un call de l'api pour la partie /SOCIAL_LINKs
*/
/*
    const { data } = await axios.get('/SOCIAL_LINKs/')

        dispatch({
            type: SOCIAL_LINK_LIST_SUCCESS,
            payload: data
        })
        */
/*
 on fait un try catch classique,
 si on a une erreur, avec dispatch on revoi le type d'erreur, et avec payload on renvoir une erreure calssique ou custom a l'utilisateur
si on a un message custom data.message renvoi le message
si pas de custom message, error.message renvoi le message par defaut
*/
/*
    } catch(error) {
            dispatch({
                type:SOCIAL_LINK_LIST_FAIL,
                payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })

    }
 }
 */