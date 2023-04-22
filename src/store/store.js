import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducer } from './root-reducer'
import logger from 'redux-logger'
// const curryFunc = (a) => (b,c) => {
//     a + b - c
// }
// const with3 = curryFunc(3)
// const with10 = curryFunc(10)
// with10(9, 2)//10 + 9 - 2
// with3(2,4)//3 + 2 - 5

// root-reducer
// const loggerMiddleware = (store) => (next) => (action) => {
//     if (!action.type) {
//         return next(action)
//     };
//     console.log('type: ', action.type)
//     console.log('payload: ', action.payload)
//     console.log('currentState:', store.getState())
//     next(action)
//     console.log('next state: ', store.getState())
// }


const middleWares = [logger]

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers)
