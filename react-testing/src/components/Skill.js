import React from "react";

export default function Skills({Skills}) {
    return (
        <div>
            <ul>
                {Skills.map(skill => (
                    <li key={skill.id}>{skill.name}</li>
                    
                ))}
            </ul>
        </div>
    )
}