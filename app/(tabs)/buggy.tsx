import { useCallback, useState } from 'react';
import { Button, Text, View } from 'react-native';
import Animated, { runOnJS, useAnimatedScrollHandler } from 'react-native-reanimated';

export default function BugScreen() {
  const [scrollEvts, setScrollEvts] = useState<number[]>([]);
  const [key, setKey] = useState(0);

  const addEvt = useCallback((evt: number) => setScrollEvts(prev => [...prev, evt]), []);

  const handler = useAnimatedScrollHandler({
    onScroll: (evt) => {
      runOnJS(addEvt)(evt.contentOffset.y);
    }
  })

  return (
    <>
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1, height: 200, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center' }}>This one is the same, but without Reanimated</Text>
      </View>
      <Animated.ScrollView key={key} contentOffset={{ x: 0, y: -200 }} style={{ paddingTop: 200 }} onScroll={handler}>
        <View style={{ height: 10000 }}>
          <Text>onScroll events:</Text>
          {scrollEvts.map((evt, i) => <Text key={i}>{evt}</Text>)}
        </View>
      </Animated.ScrollView>
      <Button onPress={() => {
        setScrollEvts([])
        setTimeout(() => setKey(key + 1), 100)
      }} title="Reset" />
    </>
  );
}
