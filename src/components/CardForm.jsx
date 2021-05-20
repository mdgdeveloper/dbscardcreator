import React from "react";
import { useState } from "react";
import { Flex, Box, Input, Select, Checkbox, Textarea } from "@chakra-ui/react";

const CardForm = ({
  setEffect,
  setEnergy,
  setBackground,
  skills,
  setPersonaje,
  setNombre,
  setPower,
  setCombo,
  setColor,
  trait,
  setTrait,
  setSkills,
}) => {
  const [activate, setActivate] = useState(true);
  const [auto, setAuto] = useState(true);
  const [permanent, setPermanent] = useState(true);

  const handleChangeCharacter = (event) => {
    const newTrait = { ...trait };
    newTrait.character = event.target.value;
    setTrait(newTrait);
  };

  const handleChangeSpecial = (event) => {
    const newTrait = { ...trait };
    newTrait.specialTrait = event.target.value;
    setTrait(newTrait);
  };

  const handleChangeEra = (event) => {
    const newTrait = { ...trait };
    newTrait.era = event.target.value;
    setTrait(newTrait);
  };

  const handleSkill = (event, value) => {
    const newSkills = { ...skills };
    if (event.target.checked) {
      if (newSkills.unique) {
        newSkills.unique.push(value);
      } else {
        newSkills.unique = [value];
      }
    } else {
      const updatedUnique = newSkills.unique.filter((skill) => skill !== value);
      newSkills.unique = updatedUnique;
      if (!updatedUnique.length) {
        delete newSkills.unique;
      }
    }
    setSkills(newSkills);
  };

  const handleUltimate = (event) => {
    const newSkills = { ...skills };

    if (event.target.checked) {
      newSkills.ultimate = true;
    } else {
      delete newSkills.ultimate;
    }

    setSkills(newSkills);
  };

  const handleAuto = (event) => {
    if (event.target.checked) {
      setAuto(false);
    } else {
      const newSkills = { ...skills };
      delete newSkills.auto;
      setAuto(true);
      setSkills(newSkills);
    }
  };

  const handleActivate = (event) => {
    if (event.target.checked) {
      setActivate(false);
    } else {
      const newSkills = { ...skills };
      delete newSkills.activateMain;
      setActivate(true);
      setSkills(newSkills);
    }
  };

  const handlePermanent = (event) => {
    if (event.target.checked) {
      setPermanent(false);
    } else {
      const newSkills = { ...skills };
      delete newSkills.permanent;
      setPermanent(true);
      setSkills(newSkills);
    }
  };

  const handleAutoChange = (event) => {
    if (!auto) {
      const newSkills = { ...skills };
      newSkills.auto = event.target.value;
      setSkills(newSkills);
    }
  };

  const handleActivateChange = (event) => {
    if (!activate) {
      const newSkills = { ...skills };
      newSkills.activateMain = event.target.value;
      setSkills(newSkills);
    }
  };

  const handlePermanentChange = (event) => {
    if (!permanent) {
      const newSkills = { ...skills };
      newSkills.permanent = event.target.value;
      setSkills(newSkills);
    }
  };

  const optionsEnergy = () => {
    let result = [];
    for (var i = 0; i < 10; i++) {
      result.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return result;
  };

  return (
    <Box mt={5}>
      <Flex>
        <Box>
          <Box className="inputForm">Elige el color</Box>
          <Select onChange={(event) => setColor(event.target.value)}>
            <option key="yellow" value="yellow">
              Amarillo
            </option>
            <option key="red" value="red">
              Rojo
            </option>
            <option key="green" value="green">
              Verde
            </option>
            <option key="blue" value="blue">
              Azul
            </option>
            <option key="black" value="black">
              Negro
            </option>
          </Select>
        </Box>
        <Box ml={5}>
          <Box className="inputForm">Elige las energias.</Box>
          <Select onChange={(event) => setEnergy(event.target.value)}>
            {optionsEnergy()}
          </Select>
        </Box>
      </Flex>
      <Box>
        <Box className="inputForm">Elige el personaje</Box>
        <Select onChange={(event) => setPersonaje(event.target.value)}>
          <option key="vegeta" value="vegeta">
            Vegeta
          </option>
          <option key="goku" value="goku">
            Son Goku
          </option>
          <option key="goku2" value="goku2">
            Son Goku 2
          </option>
          <option key="goku3" value="goku3">
            Son Goku 3
          </option>
          <option key="goku4" value="goku4">
            Son Goku 4
          </option>
          <option key="frieza" value="frieza">
            Frieza
          </option>
          <option key="frieza2" value="frieza2">
            Frieza 2
          </option>
          <option key="cell" value="cell">
            Celula
          </option>
          <option key="cell2" value="cell2">
            Celula 2
          </option>
          <option key="beerus" value="beerus">
            Beerus
          </option>
          <option key="beerus2" value="beerus2">
            Beerus 2
          </option>
          <option key="yamcha" value="yamcha">
            Yamcha
          </option>
          <option key="yamcha2" value="yamcha2">
            Yamcha 2
          </option>
          <option key="gokuVegeta" value="gokuVegeta">
            Goku & Vegeta
          </option>
        </Select>
      </Box>
      <Flex>
        <Box>
          <Box className="inputForm">Elige el fondo</Box>
          <Select onChange={(event) => setBackground(event.target.value)}>
            <option key="space" value="space">
              Espacio
            </option>
            <option key="nebula" value="nebula">
              Nebula
            </option>
            <option key="redSpace" value="redSpace">
              Espacio Rojo
            </option>
            <option key="greenSpace" value="greenSpace">
              Espacio 
            </option>
            <option key="blackSpace" value="blackSpace">
              Espacio Oscuro
            </option>
          </Select>
        </Box>
        <Box
            ml={5}
        >
          <Box className="inputForm">Elige el effecto</Box>
          <Select onChange={(event) => setEffect(event.target.value)}>
            <option key="rays" value="rays">
              Rayos
            </option>
            <option key="ondas" value="ondas">
              Esquina
            </option>
            <option key='explosion' value='explosion'>
                Explosion
            </option>
            <option key='waves' value='waves'>
                Ondas
            </option>
            <option key='greenLines' value='greenLines'>
                Lineas Verdes
            </option>
            <option key='red' value='red'>
                Lineas rojas
            </option>
          </Select>
        </Box>
      </Flex>
      <Box className="inputForm">Nombre de la carta</Box>
      <Input
        maxLength="30"
        onChange={(event) => setNombre(event.target.value)}
      />

      <Box className="inputForm">Poder de la Carta</Box>
      <Input maxLength="5" onChange={(event) => setPower(event.target.value)} />
      <Box className="inputForm">Combo de la Carta</Box>
      <Input maxLength="5" onChange={(event) => setCombo(event.target.value)} />
      <Box>
        <Box className="inputForm">Skills de la carta</Box>
        <Checkbox mr={3} onChange={(e) => handleSkill(e, "Double Strike")}>
          <span className="redInputSkill">Double Strike</span>
        </Checkbox>
        <Checkbox mr={3} onChange={(e) => handleSkill(e, "Dual Attack")}>
          <span className="redInputSkill">Dual Attack</span>
        </Checkbox>
        <Checkbox mr={3} onChange={(e) => handleSkill(e, "Critical")}>
          <span className="redInputSkill">Critical</span>
        </Checkbox>
        <Checkbox mr={3} onChange={(e) => handleSkill(e, "Unique")}>
          <span className="redInputSkill">Unique</span>
        </Checkbox>
      </Box>
      <Box>
        <Checkbox onChange={handleUltimate}>
          <span className="redInputSkill">Ultimate</span>
        </Checkbox>
      </Box>
      <Box>
        <Checkbox onChange={handleAuto}>
          <span className="blueInputSkill">Auto</span>
        </Checkbox>
        <Textarea hidden={auto} onChange={handleAutoChange} />
      </Box>
      <Box>
        <Checkbox onChange={handleActivate}>
          <span className="orangeInputSkill">Activate Main</span>
        </Checkbox>
        <Textarea onChange={handleActivateChange} hidden={activate} />
      </Box>
      <Box>
        <Checkbox onChange={handlePermanent}>
          <span className="purpleInputSkill">Permanent</span>
        </Checkbox>
        <Textarea onChange={handlePermanentChange} hidden={permanent} />
      </Box>

      <Box mr={3}>
        <Box className="inputForm">Character</Box>
        <Input maxLength="22" onChange={handleChangeCharacter} />
      </Box>
      <Box mr={3}>
        <Box className="inputForm">Special Trait</Box>
        <Input maxLength="22" onChange={handleChangeSpecial} />
      </Box>
      <Box mr={3}>
        <Box className="inputForm">Era</Box>
        <Input maxLength="22" onChange={handleChangeEra} />
      </Box>
    </Box>
  );
};

export default CardForm;
