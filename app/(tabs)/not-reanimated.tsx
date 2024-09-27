import { useCallback, useState } from 'react';
import { Button, NativeScrollEvent, NativeSyntheticEvent, ScrollView, Text, View } from 'react-native';

export default function BugScreen() {
  const [scrollEvts, setScrollEvts] = useState<number[]>([]);
  const [key, setKey] = useState(0);

  return (
    <>
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1, height: 200, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center' }}>*absolutely positioned header goes here*</Text>
      </View>
      <ScrollView key={key} contentOffset={{ x: 0, y: -200 }} style={{ paddingTop: 200 }} onScroll={evt => {
        const y = evt.nativeEvent.contentOffset.y;
        setScrollEvts(scrollEvts => [...scrollEvts, y]);
      }}>
        <View style={{ height: 10000 }}>
          <Text>onScroll events:</Text>
          {scrollEvts.map((evt, i) => <Text key={i}>{evt}</Text>)}
        </View>
      </ScrollView>
      <Button onPress={() => {
        setScrollEvts([])
        setTimeout(() => setKey(key + 1), 100)
      }} title="Reset" />
    </>
  );
}
