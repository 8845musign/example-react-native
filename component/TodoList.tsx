import React, { memo } from 'react';
import { StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { Text, ListItem, Left, Icon ,Body, Right } from 'native-base';

interface IProps {
  items: { todoText: string, checked: boolean }[],
  onItemCheck,
  onItemRemove,
}

const TodoList: React.FC<IProps> = memo(props => {
  const {items, onItemCheck, onItemRemove} = props;

  return (
    <FlatList
      data={ items }
      contentContainerStyle={styles.listView}
      renderItem={({ item, index }) =>
        <ListItem icon>
          <Left>
            <Icon type="MaterialIcons"
              style={styles.checkbox}
              name={item.checked ? 'check-box' : 'check-box-outline-blank'}
              onPress={() => onItemCheck(index)}
            >

            </Icon>
          </Left>
          <Body>
            <Text>{item.todoText}</Text>
          </Body>
          <Right>
            <Icon type="FontAwesome" style={styles.icon} name="trash-o" onPress={() => onItemRemove(index)}  />
          </Right>
        </ListItem>
      }
    />
  )
})

const styles = StyleSheet.create({
  listView: {
    flex: 1
  },
  icon: {
    color: 'gray'
  },
  checkbox: {
    color: 'gray',
    fontSize: 20
  }
})

export default TodoList
