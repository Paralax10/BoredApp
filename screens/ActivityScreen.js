import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { fetchCatFact } from '../api/boredApi';  // Importing the cat facts API

const ActivityScreen = () => {
  const [fact, setFact] = useState('');

  const loadCatFact = async () => {
    const data = await fetchCatFact();
    if (data) setFact(data.fact);
  };

  useEffect(() => {
    loadCatFact();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Card>
        <Card.Content>
          <Text variant="titleLarge">Cat Fact:</Text>
          <Text variant="bodyLarge" style={{ marginVertical: 10 }}>
            {fact || 'Loading...'}
          </Text>
          <Button mode="contained" onPress={loadCatFact}>
            Get New Cat Fact
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ActivityScreen;
