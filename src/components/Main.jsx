import React from "react";
import {useState} from 'react';
import Card from './Card';
import CardForm from './CardForm';
import Header from './Header';
import { Box, Flex } from '@chakra-ui/react';

const Main = () => {
    const [nombre, setNombre ] = useState('');
    const [power, setPower ] = useState('0');
    const [combo, setCombo] = useState('0');
    const [color, setColor] = useState('yellow');
    const [trait, setTrait] = useState({
        character: '',
        specialTrait: '',
        era: ''
    })
    const [personaje, setPersonaje] = useState('vegeta')
    const [skills, setSkills] = useState('');
    const [background, setBackground] = useState('space');
    const [effect, setEffect] = useState('rays');
    const [energy, setEnergy] = useState('0');
   


  return (
      <Box
      className='global'
      pt={10}
      pb={150}
      >
          <Header />
      <Flex
        pt={10}
        justifyContent='center'
        flexDirection={['column', 'column', 'row','row']}
        bgColor='rgba(255,255,255,1)'
        w='80%'
        mr='auto'
        ml='auto'
        borderWidth={4}
        borderColor='rgb(255,115,0)'
        borderRadius={10}
        pb={10}
      >
      <Box ml={5}>
   <Card
        cardName={nombre}
        energy={energy}
        combo={combo}
        power={power}
        color={color}
        trait={trait}
        skills={skills}
        character={personaje}
        effect={effect}
        background={background}
   
   
   />
   </Box>
   <Box ml={10}
   w={350}>
       <CardForm
        setNombre={setNombre}
        setPower={setPower} 
        setCombo={setCombo}
        setColor={setColor}
        trait={trait}
        setTrait={setTrait}
        setPersonaje={setPersonaje}
        skills={skills}
        setSkills={setSkills}
        setBackground={setBackground}
        setEnergy={setEnergy}
        setEffect={setEffect}
       />
   </Box>
   </Flex>
   </Box>
  );
};

export default Main;
