import React from "react";
import PropTypes from "prop-types";
import { View, Image, Text } from "react-native";
import { IconButton, Icon, Avatar } from "react-native-paper";

import style from "./style";

export default class AppHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const elements = {
      'return': (
        <IconButton
          key="return"
          icon="chevron-left"
          mode="contained"
          iconColor="white"
          size={40}
          onPress={() => this.props.goBackButton()}
          style={{
            width: 45,
            height: 40,
            backgroundColor: "#407BDC",
            fontSize: 15,
            borderRadius: 15,
          }}
        />
      ),
      'logo': (
        <Image
          key="logo"
          style={style.logo}
          source={require("../../../assets/logoTypePink.png")}
        />
      ),
      'local': (
        <View key="local" style={style.locWrapper}>
          <Icon source="map-marker" size={40} color="#407BDC" />
          <Text style={style.locText}>
            <Text style={{ fontFamily: "Montserrat-bold", fontSize: 17 }}>
              Região {this.props.userLoc?.regiao}
            </Text>
            {"\n"}
            {this.props.userLoc?.cidade + ", " + this.props.userLoc?.estado}
          </Text>
        </View>
      ),
      'image': (
        <Avatar.Image key='profPic' size={50} source={{uri: this.props.image || 'none'}} />
      ),
    };
    return (
      <View style={style.header}>
        {this.props.elementList.map((element) => {
          return elements[element];
        })}
      </View>
    );
  }
}

AppHeader.propTypes = {
  goBackButton: PropTypes.func,
  elementList: PropTypes.arrayOf(PropTypes.string),
  userLoc: PropTypes.object,
  image: PropTypes.string,
};
