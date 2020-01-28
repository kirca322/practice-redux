import React, { Component } from 'react'
import { input } from '../types';
import { connect } from 'react-redux'
import { add } from '../types' 


class Write extends Component {
    render() {
        return (
            <div>
                <input onKeyDown={this.props.addWithEnter} className='write-input' type="text" placeholder="add todo here" value={this.props.value} onChange={(e) => this.props.changeContent(e.target.value)}></input>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.content
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeContent: (str) => dispatch(input(str)),
        addWithEnter: () => {
            if (window.event.keyCode === 13) {
                return dispatch(add())
            }
        }
    }
}

Write = connect(mapStateToProps, mapDispatchToProps)(Write)

export default Write
