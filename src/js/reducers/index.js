import {
    INPUT,
    ADD,
    COMPLETE,
    DELETES,
    OPTION,
    MOUSEOVER,
    MOUSEOUT
} from '../types'

const initialState = {
    listAll: [],
    listCompleted: [],
    listActive: [],
    option: 'All',
    content: '',
    optionList: [{fontWeight: null, cursor: null}, {fontWeight: null, cursor: null}, {fontWeight: null, cursor: null}]
    
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case INPUT:
            return Object.assign({}, state, {
                content: action.content
            })
        case ADD:
            let temp = state.listAll.slice()
            temp.push([state.content, {textDecoration: 'none'}])
            return Object.assign({}, state, {
                listAll: temp,
                content: ''
            })
        case COMPLETE:
            
            let temp2 = state.listAll.slice()
            let tempContent = temp2[action.index][0]
            temp2.splice(action.index, 1, [tempContent, {textDecoration: 'line-through'}])

            
            return Object.assign({}, state, {
                listAll: temp2
                
            })
        case DELETES:
            let temp3 = state.listAll.slice()
            temp3.splice(action.index, 1)
            return Object.assign({}, state, {
                listAll: temp3
            })
        case OPTION:
            let temp4 = state.listAll.slice()
            let tempCompleted = []
            let tempActive = []
            if(action.optionType === 'Completed') {
                tempCompleted = temp4.filter(function(x) {
                    return x[1].textDecoration === 'line-through'
                })
            } else if (action.optionType === 'Active') {
                tempActive = temp4.filter(function(x) {
                    return x[1].textDecoration === 'none'
                })
            }
            
            return Object.assign({}, state, {
                option: action.optionType,
                listCompleted: tempCompleted,
                listActive: tempActive
            })
        case MOUSEOVER:
            let tempArr = state.optionList.slice()
            tempArr[action.target] = {fontWeight: 'bold', cursor: 'pointer'}
            console.log(tempArr)
            return Object.assign({}, state, {
                optionList: tempArr
            })
        case MOUSEOUT:
            let tempArr2 = state.optionList.slice()
            tempArr2[action.target] = {fontWeight: null, cursor: null}
            return Object.assign({}, state, {
                optionList: tempArr2
            })
        default:
            return state
    }
}

export default reducer;



// let forCompleted = temp2.splice(action.index, 1, [tempContent, {textDecoration: 'line-through'}])
            // console.log(forCompleted)
            // let tempActive = state.listActive.slice()
            // console.log(tempActive)
            // let tempCompleted = state.listCompleted.slice()
            // tempCompleted.push(forCompleted)

            // tempActive.splice(tempActive.indexOf(forCompleted), 1)
            // console.log(tempActive)
            // tempCompleted.push(tempActive.splice(action.index, 1))


            // listActive: tempActive,
                // listCompleted: tempCompleted