import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react'
import { Entypo } from '@expo/vector-icons';

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, 'X', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '=']
  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setlastNumber] = useState("")

  function calculator(){
    const splitNumbers = currentNumber.split(' ')
    const firstNumber = parseFloat(splitNumbers[0])
    const lastNumber = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]

    switch(operator) {
      case "+":
       setCurrentNumber((firstNumber + lastNumber).toString())
       return
    
      case "-":
       setCurrentNumber((firstNumber - lastNumber).toString())
       return

      case "X":
       setCurrentNumber((firstNumber * lastNumber).toString())
       return

      case "/":
       setCurrentNumber((firstNumber / lastNumber).toString())
       return
    }
  }

  function handleInput(buttonPressed) {
    console.log(buttonPressed)
    if(buttonPressed === "+" | buttonPressed === "-" | buttonPressed === "X" | buttonPressed === "/"){
      setCurrentNumber(currentNumber + " " + buttonPressed + " ")
      return
    }
    switch(buttonPressed){
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length -1)))
        return
      case 'AC':
        setCurrentNumber("")
        setlastNumber("")
        return
      case '=':
        setlastNumber(currentNumber +  " = ")
        calculator()
        return
      case '+/-':
    }
    setCurrentNumber(currentNumber + buttonPressed)
  }

  const styles = StyleSheet.create({
    results: {
      backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
      width:'100%',
      minHeight: 300,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    resultText: {
      color: darkMode ? '#f5f5f5' : "#282f38",
      margin: 10,
      fontSize: 40
    },
    historyText: {
      color: darkMode ? '#b5b7bb' : "#7c7c7c",
      fontSize: 20,
      alignSelf: 'flex-end',
      margin: 3
    },
    themeButton: {
      alignSelf: 'flex-start',
      bottom: 120,
      margin: 15,
      top: -61,
      backgroundColor: darkMode ? "#7b8084" : "#e5e5e5",
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      minHeight: 105,
      backgroundColor: darkMode ? '#282f3b' : "#f5f5f5",
    },
    button: {
      backgroundColor: darkMode ? '#3f4d5b' : "#e5e5e5",
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
      marginBottom: -1,
      minWidth: 85,
      minHeight: 95,
      flex: 2,
      borderRadius: 100
    },
    textButton: {
      color: darkMode ? "#B5b7db" : '#7c7c7c',
      fontSize: 20
    }
  });


return (
  <View>
    <View style={styles.results}>
      <TouchableOpacity style={styles.themeButton}>
          <Entypo name={darkMode ? "light-up" : 'moon'} size={24} color={darkMode ? "white" : 'black'} onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)} />
      </TouchableOpacity>
      <Text style={styles.historyText}>{lastNumber}</Text> 
      <Text style={styles.resultText}>{currentNumber}</Text>
    </View>

    <View style={styles.buttons}>

      {buttons.map((button) =>
        button === '=' ?
        <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, {backgroundColor: darkMode === true ? '#E77005' : '#2478e8'} ]}>
          <Text style={[styles.textButton, {color: "white", fontSize: 28}]}>{button}</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, 
        {backgroundColor: typeof(button) === 'number' ? darkMode ===  true ? '#303946' : '#fff' : darkMode === true ? '#414853' : '#ededed'}]}>
          <Text style={styles.textButton}>{button}</Text>
        </TouchableOpacity>
      )}

    </View>

  </View>
);
}