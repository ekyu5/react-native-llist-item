import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

interface MainAccountItemProps {
  image: string[];
  imageType?: 'avatar' | 'icon';
  description: string;
  mainValue: number;
  subValue?: number;
  btnText?: string;
  btnType?: 'default' | 'primary';
  onPress?: () => void;
}

export default class MainAccountItem extends React.Component<MainAccountItemProps> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ position: 'relative', width: 50, height: 50, marginRight: 10 }}>
        {this.props.image.length === 1 && 
          <Image source={{uri: this.props.image[0]}} style={this.props.imageType === 'avatar' ? styles.avatar : styles.icon} />
        }
        {this.props.image.length > 1 && 
          <View style={{ position: 'static', width: 50, height: 50 }}>
            <Image 
              source={{uri: this.props.image[this.props.image.length - 1]}} 
              style={[this.props.imageType === 'avatar' ? styles.avatar : styles.icon, { position: 'absolute', bottom: -3, left: 4, width: 50 * 0.9, height: 50 * 0.9 }]} 
            />
            <Image 
              source={{uri: this.props.image[0]}} 
              style={[this.props.imageType === 'avatar' ? styles.avatar : styles.icon, { position: 'absolute', top: -3, left: 0, width: 50 * 0.9, height: 50 * 0.9 }]} 
            />
          </View>
        }
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textDescription}>{this.props.description}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.textMain, { marginRight: 10 }]}>{this.props.mainValue.toLocaleString() + '원'}</Text>
            {this.props.subValue && (
              <Text style={{ color: this.props.mainValue > 0 ? 'red' : 'blue' }}>{this.props.subValue > 0 ? '+' : '-'}{this.props.subValue * 100 + '%'}</Text>
            )}
          </View>
        </View>
        {this.props.btnText && (
          <TouchableOpacity style={[this.props.btnType === 'default' ? styles.buttonDefault : styles.buttonPrimary]} onPress={this.props.onPress}>
            <Text style={this.props.btnType === 'default' ? styles.buttonTextDefault : styles.buttonTextPrimary}>{this.props.btnText}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    // padding: 10,
  },
  textContainer: {
    flex: 1,
    textAlign: 'left',
    flexDirection: 'column',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
    textDescription: {
    flex: 1,
    textAlign: 'left',
    color: '#A0A0A0',
  },
  textMain: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  buttonDefault: {
    backgroundColor: '#F0F0F0',
    marginRight: 0,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: 'lightblue',
    opacity: 0.5,
    marginRight: 0,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonTextDefault: {
    color: '#808080',
    fontSize: 13,
    fontWeight: 'bold',
  },
  buttonTextPrimary: {
    color: '#4166DC',
    fontSize: 13,
    fontWeight: 'bold',
  },
});