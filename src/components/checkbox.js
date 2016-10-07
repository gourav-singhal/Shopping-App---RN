
import React, { Component } from 'react';

import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

class Checkbox extends Component{
  constructor(props)
  {
      super(props);
      this.state = {
          checked : false
      }
      this.onChange = this.onChange.bind(this);
  }

  render() {
    var source = require('../images/check_box_blank.png');

    if (this.props.checked) {
      source = require('../images/check_box_checked.png');
    }
    
    return (
      <TouchableHighlight onPress={this.onChange} underlayColor='white'>
        <View style={styles.container}>
        <Image
          style={styles.checkbox}
          source={source}/>
          <Text>{ this.props.label }</Text>
          <Text></Text> 
      </View>
      </TouchableHighlight>
    );
  }
  
  onChange()
  {
      this.setState({
         checked : !(this.state.checked) 
      });
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    
  },
  checkbox: {
    width: 20,
    height: 20,
    marginLeft : 10
  },
});

export default Checkbox;