import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


class App extends React.Component {
  constructor(props) {
    super(props);
   //  letss list = [];

    this.state = {
      list: [1,2,3,4,5,6,7,8,9,10],
      selectedIndex: null,
    }

  }

  onSelected(item) {
    this.setState({ selectedIndex: item });
  }
  isSelected(item) {
    return this.state.selectedIndex === item;
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
             BasicList
          </Typography>
            <div style={{ flex: '1 1 0px' }} />
          </Toolbar>
        </AppBar>
        {this.state.list.length < 1 && 
          this.getEmptyComponent()
        }
        <List className="list" component="nav">
          {
            this.state.list.map((item, i) => {
              return (
                <ListItem key={'item_' + i} button className={this.isSelected(i) ? 'selected' : null} onClick={() => this.onSelected(i)}>
                  <ListItemText primary='item' ></ListItemText>
                  <ListItemText className="side" secondary={item}></ListItemText>
                </ListItem>
              )
            })
          }
        </List>   
      </div>
    );
  }
}  
export default App; 