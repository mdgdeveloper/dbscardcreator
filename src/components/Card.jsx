import React from "react";
import Skill from "./skills/Skill";
import SkillJoin from "./skills/SkillJoin";

const Card = ({ cardName, 
    effect='rays', 
    color='yellow', 
    energy, combo, power, trait, skills, 
    character='vegeta',
    background ='space' }) => {
  let comboStyle;
  let cardNameStyle;

  const CHARACTER = {
      vegeta: 'cardCharacter',
      goku: 'cardCharacterGoku',
      goku2: 'cardCharacterGoku2',
      goku3: 'cardCharacterGoku3',
      goku4: 'cardCharacterGoku4',
      beerus: 'cardCharacterBeerus',
      beerus2: 'cardCharacterBeerus2',
      gokuVegeta: 'cardCharacterGokuVegeta',
      yamcha: 'cardCharacterYamcha',
      yamcha2: 'cardCharacterYamcha2',
      frieza: 'cardCharacterFrieza',
      frieza2: 'cardCharacterFrieza2',
      cell: 'cardCharacterCell',
      cell2: 'cardCharacterCell2'

  }

  const COLOR = {
      yellow: 'card',
      green: 'cardGreen',
      blue: 'cardBlue',
      red: 'cardRed',
      black: 'cardBlack'
  }

  const SKILLSCOLOR = {
      yellow: 'cardSkills',
      green: 'cardSkillsGreen',
      blue: 'cardSkillsBlue',
      black: 'cardSkillsBlack',
      red: 'cardSkillsRed'
  }

  const EFFECTS = {
      rays: 'cardEffect',
      ondas: 'cardEffectOndas',
      explosion: 'cardEffectExplosion',
      waves: 'cardEffectWaves',
      greenLines: 'cardEffectGreenLines',
      red: 'cardEffectRed',
  }

  const BACKGROUNDS = {
      space: 'cardBackground',
      nebula: 'cardBackgroundNebula',
      redSpace: 'cardBackgroundRedSpace',
      blackSpace: 'cardBackgroundBlackSpace',
      greenSpace: 'cardBackgroundGreenSpace'
  }

  if(cardName.length > 10) cardNameStyle = 'cardTitleLong';
  else cardNameStyle = 'cardTitle';

  const powerLess = power.length < 3 ? power : power.substr(power.length - 3);
  const powerTopFun = () => {
    if (power.length <= 3) {
      return "";
    }
    if (power.length <= 4) {
      return power.substr(0, 1);
    }
    return power.substr(0, 2);
  };

  const powerTop = powerTopFun();

  if (parseInt(combo) >= 10000) {
    comboStyle = "combo10k";
  } else {
    comboStyle = "combo";
  }

  return (
    <div className="container">
      <div className={BACKGROUNDS[background]}>
        <div className={EFFECTS[effect]}>
          <div className={CHARACTER[character]}>
            <div className={COLOR[color]}>
              <div className="header">
                <div className="energy">{energy}</div>
                <div className={cardNameStyle}>{cardName}</div>
                <div className="leftTitle">.</div>
              </div>
              <div className="cardBody">
                <div className="comboArea">
                  <div className={comboStyle}>{combo}</div>
                </div>
                { skills && Object.keys(skills).length > 0 ? <div className={SKILLSCOLOR[color]}>
                    {skills.permanent ? (<Skill color='purple' valor='Permanent' texto={skills.permanent} />):(<></>)}
                  {skills.ultimate ? (
                    <Skill color="red" valor="Ultimate" />
                  ) : (
                    <></>
                  )}
                  {skills.unique ? <SkillJoin valor={skills.unique} /> : <></>}
                  {skills.auto ? <Skill color='blue' valor='Auto' texto={skills.auto} /> : <></>}
                  {skills.auto2 ? <Skill color='blue' valor='Auto' texto={skills.auto2} /> : <></>}
                  {skills.activateMain ? <Skill color='orange' valor='Activate:main' texto={skills.activateMain} /> : <></>}
                </div> : <></> }
              </div>
              <div className="footer">
                <div className="power">
                  <span className="highNumber">{powerTop}</span>
                  {powerLess}
                </div>
                <div className="traits">
                  <div className="character">{trait.character}</div>
                  <div className="specialTrait">{trait.specialTrait}</div>
                  <div className="era">{trait.era}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
