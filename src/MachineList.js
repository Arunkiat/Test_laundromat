import React from 'react';
import Machine from './Machine';
import './MachineList.css';

function MachineList({ machines }) {
  return (
    <div className="machine-list">
      {machines.map(machine => (
        <Machine key={machine.id} machine={machine} />
      ))}
      
    </div>
  );
}

export default MachineList;
