import {
    EDUCATION_LIST_REQUEST,
    EDUCATION_LIST_SUCCESS,
    EDUCATION_LIST_FAIL,

    EDUCATION_DETAILS_REQUEST,
    EDUCATION_DETAILS_SUCCESS,
    EDUCATION_DETAILS_FAIL,

    EDUCATION_CREATE_REVIEW_REQUEST,
    EDUCATION_CREATE_REVIEW_SUCCESS,
    EDUCATION_CREATE_REVIEW_FAIL,
    EDUCATION_CREATE_REVIEW_RESET,

    
} from '../constants/education-constants'

export const EDUCATIONListReducer = (state = {EDUCATIONs:[] }, action) => {
    switch(action.type) {

        case EDUCATION_LIST_REQUEST:
            return {loading: true, EDUCATIONs: [] }

        case EDUCATION_LIST_SUCCESS:
            return {loading: false, EDUCATIONs: action.payload}

        case EDUCATION_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const EDUCATIONDetailsReducer = (state = {EDUCATION: {reviews:[]} }, action) => {
    switch(action.type) {

        case EDUCATION_DETAILS_REQUEST:
            return {loading: true, ...state }

        case EDUCATION_DETAILS_SUCCESS:
            return {loading: false, EDUCATION: action.payload}

        case EDUCATION_DETAILS_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

 

//le reducer permet d'update la partie produit de l'etat
// on utilise des appels de fichiers differents pour les appels de nos etats
//Produce reducer d'occupe de dire si l'on charge une erreur si besoin, etc
// ce fichier entre autre retiens plusieurs "reducer"
/*
import { 
    EDUCATION_LIST_REQUEST,
    EDUCATION_LIST_SUCCESS,
    EDUCATION_LIST_FAIL
 } from '../constants/education-constants'


//action (type d'action)est un objet
export const EDUCATIONListReducers = (state = {EDUCATIONs:[] }, action) => {
    switch(action.type){

//si le produit et chargé, object renvoyé en etat, la chaine de produit est vide car on charge des données
        case EDUCATION_LIST_REQUEST:
            return {loading: true, EDUCATIONs: []}

//quand l'api revoi des données, loading est mis en false, on recupere le payload de l'api avec la liste de produit et on actualise la donnée
        case EDUCATION_LIST_SUCCESS:
            return {loading: false, EDUCATIONs: action.payload}

// si on a un probleme (mauvaise donnée, etc) loading est sur false car on a deja load la donnée, on met erreur  
        case EDUCATION_LIST_FAIL:
            return {loading: false, error: action.payload}

// si un de nos switch case ne marche pas, on revient à un etat initial
        default:
            return state
    }
}
*/