import React from "react";

const SkillJoin = ({ valor }) => {
    
  return (
    <div className="itemSkill">
        { valor.length > 1 ? valor.map( (skill) => ( 
            
            <span className='redSkill'>{skill}</span> )
        ) : 

        <span className='redSkill'>{valor}</span>}
      
    </div>
  );
};

export default SkillJoin;
