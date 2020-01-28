import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add } from '../types'

class Add extends Component {
    render() {
        return (
            <div>
                <button className='addButton' onClick={this.props.addToList}>Add Todo</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToList: () => dispatch(add())
        
    }
}

Add = connect(null, mapDispatchToProps)(Add)

export default Add