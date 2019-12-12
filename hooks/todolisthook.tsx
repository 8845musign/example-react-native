import { useState } from 'react'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

interface todo {
  todoText: string,
  checked: boolean
}

type todos = todo[]

export const useInputValue = (initialValue = '') => {
  const [inputValue, setInputValue] = useState(initialValue)

  return {
    inputValue,
    changeInput: (event:NativeSyntheticEvent<TextInputChangeEventData>) => {
      setInputValue(event.nativeEvent.text)
    },
    clearInput: () => setInputValue('')
  }
}

export const useTodos = (initialValue:todos = []) => {
  const [todos, setTodods] = useState(initialValue)

  return {
    todos,
    addTodo: todoText=> {
      if (todoText !== '') {
        setTodods(todos.concat({ todoText, checked: false }))
      }
    },
    checkTodo: checkIndex => {
      setTodods(
        todos.map((todo, index) => {
          if (checkIndex === index) {
            todo.checked = !todo.checked;
            return todo;
          }
        })
      )
    },
    removeTodo: removeIndex => {
      setTodods(todos.filter((todo, index) => removeIndex !== index))
    }
  }
}
