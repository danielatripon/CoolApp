import { StatusBar } from "expo-status-bar";

import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Card, Button, Icon } from "@rneui/themed";

type CardsComponentsProps = {};
const About: React.FunctionComponent<CardsComponentsProps> = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>About us</Text>
          <Card>
            <Card.Title style={styles.cardTitle}>Daniela</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={{
                uri: "https://media.istockphoto.com/vectors/working-at-home-vector-flat-style-illustration-online-career-space-vector-id1241710244?k=20&m=1241710244&s=612x612&w=0&h=RqGpgs6pK0cC7C-P70rgtf0iPFaQLTfa0X3eNJiYRCs=",
              }}
            />
            <Text style={{ marginBottom: 10 }}>
              Daniela loves coding and exploring new challenges. Enjoys React
              Native and making this app very much. 'React Native Elements are
              sooo cool' - says Daniela
            </Text>
            <Button
              icon={
                <Icon
                  name="code"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: "#4cbb17",
              }}
              title="VIEW NOW"
            />
          </Card>
          <Card>
            <Card.Title style={styles.cardTitle}>
              Location, Location, Location
            </Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={{
                uri: "https://all.accor.com/magazine/imagerie/bloc-1-4fc1.jpg",
              }}
            />
            <Text style={{ marginBottom: 10 }}>
              Daniela is based in London, in beautiful Hampstead Heath, but she
              loves exploring the city.
            </Text>
            <Button
              icon={
                <Icon
                  name="code"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: "#4cbb17",
              }}
              title="VIEW NOW"
            />
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFFBEE",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "#0EE310",
  },

  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },

  title: {
    color: "#74C5A1",
    fontWeight: "bold",
    fontSize: 30,
    paddingTop: 30,
    textAlign: "center",
  },
});

export default About;
