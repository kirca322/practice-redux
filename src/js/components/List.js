import React, { Component } from 'react'
import ListEntry from './ListEntry'
import { connect } from 'react-redux'

class List extends Component {
    render() {
        return (
            <div className='table-box'>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>Todos</td>
                            <td className='actions'>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.todoList.map((x) => (
                            <ListEntry key={this.props.todoList.indexOf(x)} index={this.props.todoList.indexOf(x)} content={x[0]} style={x[1]} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    if (state.option === 'All') {
        return {
            todoList: state.listAll
        }
    } else if (state.option === 'Completed') {
        return {
            todoList: state.listCompleted
        }
    } else if (state.option === 'Active') {
        return {
            todoList: state.listActive
        }
    }
    
}

List = connect(mapStateToProps)(List)

export default List
