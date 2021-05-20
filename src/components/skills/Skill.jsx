import React from "react";

const Skill = ({ color, valor, texto }) => {
    
    const SKILL_STYLES = {
        red: 'redSkill',
        orange: 'orangeSkill',
        purple: 'purpleSkill',
        blue: 'auto'
    }

  return (
    <div className="itemSkill">
      <span className={SKILL_STYLES[color]}>{valor}</span>{texto}
    </div>
  );
};

export default Skill;
