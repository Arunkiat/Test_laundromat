import React, { useState, useEffect } from 'react';
import MachineList from './MachineList';
import './App.css';

function App() {
  const [machines, setMachines] = useState([
    { id: 1, status: 'available', timeLeft: 0 },
    { id: 2, status: 'available', timeLeft: 0 },
    { id: 3, status: 'available', timeLeft: 0 },
    { id: 4, status: 'available', timeLeft: 0 },
    { id: 5, status: 'available', timeLeft: 0 },
    { id: 6, status: 'available', timeLeft: 0 },
    { id: 7, status: 'available', timeLeft: 0 },
    { id: 8, status: 'available', timeLeft: 0 },
    { id: 9, status: 'available', timeLeft: 0 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMachines(prevMachines =>
        prevMachines.map(machine =>
          machine.status === 'in use' && machine.timeLeft > 0
            ? { ...machine, timeLeft: machine.timeLeft - 1 }
            : machine
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [machines.timeLeft]);

  return (
    <div className="App">
      <header>
        <h1>ระบบจัดการร้านซักผ้า</h1>
      </header>
      <main>
        <MachineList machines={machines} />
      </main>
    </div>
  );
}

export default App;
