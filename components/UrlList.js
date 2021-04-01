import { memo } from 'react';
import { List, Paper } from '@material-ui/core';
import UrlListItem from './UrlListItem';
const UrlList = memo(props => (
  <>
    {props.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List style={{ overflow: 'scroll' }}>
          {props.items.map((link, idx) => (
            <UrlListItem
              text={link}
              key={`ListItem.${idx}`}
              divider={idx !== props.items.length - 1}
              onButtonClick={() => props.onItemRemove(idx)}
            />
          ))}
        </List>
      </Paper>
    )}
  </>
));
export default UrlList;
