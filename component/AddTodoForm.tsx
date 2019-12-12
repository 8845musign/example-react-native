import React, { memo } from 'react';
import { Item, Icon, Input } from 'native-base';

interface Iprops {
  inputValue: string,
  onIconPress: (e?: any) => any
  changeInput: (e?: any) => any
}

const AddTodoList: React.FC<Iprops> = memo(props => {
  const { inputValue, changeInput, onIconPress } = props;

  return (
    <Item success>
      <Input
        placeholder="Input todo..."
        value={inputValue}
        onChange={changeInput}
      />
      <Icon type="Feather" name="plus" onPress={onIconPress} />
    </Item>
  )
})

export default AddTodoList