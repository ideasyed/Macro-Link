import { memo } from 'react';
import {
  ListItem,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
const UrlListItem = memo(props => (
  <ListItem divider={props.divider}>
    <ListItemText primary={props.text} />
    <ListItemSecondaryAction>
      <IconButton onClick={props.onButtonClick}>
        <DeleteOutlined />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
));
export default UrlListItem;
