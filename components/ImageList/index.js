import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

const index = ({images = []}) => {
  if (!images.length) return null;

  const width = useWindowDimensions().width;
  const height = 300;

  const [active, setActive] = useState(0);

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={change}
        showHorizontalScrollIndicator={false}
        style={{width, height}}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{uri: image}}
            style={{width, height, resizeMode: 'cover'}}
            onPress
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.length === 2 &&
          images.map((i, k) => (
            <Text key={k} style={k == active ? styles.activeDot : styles.dot}>
              •
            </Text>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center',
  },
  dot: {
    color: '#888',
    fontSize: 50,
  },
  activeDot: {
    color: '#FFF',
    fontSize: 50,
  },
});

export default index;
