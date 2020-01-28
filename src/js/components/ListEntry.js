/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { complete } from '../types'
import { deletes } from '../types'

class ListEntry extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            
            <tr className='entry'>
                <td style={this.props.style}>{this.props.content}</td>
                <td className='actions'>
                    <button onClick={() => this.props.removeEntry(this.props.index)}>-</button>
                    <button onClick={() => this.props.changeStyle(this.props.index)}>O</button>
                </td>
            </tr>
            
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         style: state.style
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        changeStyle: (index) => dispatch(complete(index)),
        removeEntry: (index) => dispatch(deletes(index))
    }
}

ListEntry = connect(null, mapDispatchToProps)(ListEntry)

export default ListEntry;
// 버튼을 눌렀을 때
// state의 스타일에 변화를 준다

