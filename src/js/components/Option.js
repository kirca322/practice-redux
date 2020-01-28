import React, { Component } from 'react'
import { connect } from 'react-redux'
import { option } from '../types'
import { mouseOver } from '../types'
import { mouseOut } from '../types'

class Option extends Component {
    render() {
        return (
            <div className='option-box'>
                <span onMouseOver={() => this.props.mouseOver(0)} onMouseOut={() => this.props.mouseOut(0)} style={this.props.style[0]} onClick={() => this.props.changeOption('All')}>All</span>
                <span className='slash'>/</span>
                <span onMouseOver={() => this.props.mouseOver(1)} onMouseOut={() => this.props.mouseOut(1)} style={this.props.style[1]} onClick={() => this.props.changeOption('Completed')}>Completed</span>
                <span className='slash'>/</span>
                <span onMouseOver={() => this.props.mouseOver(2)} onMouseOut={() => this.props.mouseOut(2)} style={this.props.style[2]} onClick={() => this.props.changeOption('Active')}>Active</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        style: state.optionList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeOption: (str) => dispatch(option(str)),
        mouseOver: (index) => dispatch(mouseOver(index)),
        mouseOut: (index) => dispatch(mouseOut(index))
    }
}

Option = connect(mapStateToProps, mapDispatchToProps)(Option)

export default Option