import React, {ChangeEvent, useReducer} from 'react';
import s from '../styles/Form.module.scss'
import c from '../styles/common.module.scss'

type initStateType = typeof initState
const initState = {
    name:'',
    email:'',
    text:'',
    error:''
}
enum ACTIONS{
    CHANGE_NAME = "CHANGE_NAME",
    CHANGE_EMAIL = "CHANGE_EMAIL",
    CHANGE_TEXT = "CHANGE_TEXT",
    HAS_ERROR = "HAS_ERROR",
    CLEAR_ALL_FIELDS = "CLEAR_ALL_FIELDS",
}
type actionsType = changeNameT | changeEmailT |changeTextT | onErrorT | clearAllFieldsT
type changeNameT = {type:ACTIONS.CHANGE_NAME,payload:{name:string}}
type changeEmailT = {type:ACTIONS.CHANGE_EMAIL,payload:{email:string}}
type changeTextT = {type:ACTIONS.CHANGE_TEXT,payload:{text:string}}
type onErrorT = {type:ACTIONS.HAS_ERROR,payload:{error:string}}
type clearAllFieldsT = {type:ACTIONS.CLEAR_ALL_FIELDS,payload:{name:string,email:string,text:string}}
const Form = () => {
    const reducer = (state:initStateType,action:actionsType):initStateType=>{
        switch (action.type){
            case ACTIONS.CHANGE_NAME:
            case ACTIONS.CHANGE_EMAIL:
            case ACTIONS.CHANGE_TEXT:
            case ACTIONS.HAS_ERROR:
            case ACTIONS.CLEAR_ALL_FIELDS:
                return {...state, ...action.payload}
            default:return state
        }
    }
    const [state,dispatch] = useReducer(reducer,initState)

    const changeName = (name:string):changeNameT => ({type:ACTIONS.CHANGE_NAME,payload:{name}})
    const changeEmail = (email:string):changeEmailT => ({type:ACTIONS.CHANGE_EMAIL,payload:{email}})
    const changeText = (text:string):changeTextT => ({type:ACTIONS.CHANGE_TEXT,payload:{text}})
    const onError = (error:string):onErrorT => ({type:ACTIONS.HAS_ERROR,payload:{error}})
    const clearAllFields = ():clearAllFieldsT => ({type:ACTIONS.CLEAR_ALL_FIELDS,payload:{name:'',email:'',text:''}})

    const onChangeName = (e:ChangeEvent<HTMLInputElement>)=>{
        state.error && dispatch(onError(''))
        dispatch(changeName(e.currentTarget.value))
    }
    const onChangeEmail = (e:ChangeEvent<HTMLInputElement>)=>{
        state.error && dispatch(onError(''))
        dispatch(changeEmail(e.currentTarget.value))
    }
    const onChangeText = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        state.error && dispatch(onError(''))
        dispatch(changeText(e.currentTarget.value))
    }

    const onClickHandler = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if(!state.name || !state.text || !state.email){
            dispatch(onError('Please fill in all the fields'))
        } else {
            dispatch(clearAllFields())
        }
    }
    return (
        <div className={s.form} id='contacts'>
            <div className={s.formElem}/>
            <div className={`${c.container} ${s.form__body}`}>
                <h2 className={`${c.header}`}>Contact me</h2>
            <form>
                <input value={state.name} onChange={onChangeName} className={s.input} placeholder={'Your name...'} type="text"/>
                <input value={state.email} onChange={onChangeEmail} className={s.input} placeholder={'Your email...'} type="text"/>
                <textarea value={state.text} onChange={onChangeText} placeholder={'Any question...'} className={s.textarea}/>
                <button className={s.submit} onClick={onClickHandler}>Send</button>
                <div className={`${s.error_hidden} ${state.error && s.error_showed}`}>{state.error}</div>
            </form>
            </div>
        </div>
    );
};

export default Form;