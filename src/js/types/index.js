export const INPUT = 'INPUT'
export const ADD = 'ADD';
export const COMPLETE = 'COMPLETE';
export const DELETES = 'DELETES';
export const OPTION = 'OPTION'
export const MOUSEOVER = 'MOUSEOVER'
export const MOUSEOUT = 'MOUSEOUT'

export function input(str) {
    return {
        type: INPUT,
        content: str
    }
}

export function add() {
    return {
        type: ADD,
        
    }
}

export function complete(key) {
    return {
        type: COMPLETE,
        index: key
    }
}

export function deletes(key) {
    return {
        type: DELETES,
        index: key
    }
}

export function option(str) {
    return {
        type: OPTION,
        optionType: str,
    }
}

export function mouseOver(index) {
    return {
        type: MOUSEOVER,
        target: index
    }
}

export function mouseOut(index) {
    return {
        type: MOUSEOUT,
        target: index
    }
}