import React from 'react'
import { connect } from 'react-redux'
import BB from '../components/BB.js'

const mapStateToProps = (state) => {
    debugger;
    return {
        c: state.todo.c
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: id => {
            dispatch()
        }
    }
}

const DD = connect(
    mapStateToProps, // 负责输入逻辑，即将state映射到 UI 组件的参数（props）
    mapDispatchToProps // 负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
)(BB)

export default DD