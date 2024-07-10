function sort(arr) {
    const frequencyMap = new Map();
    for (const num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    const freqArray = Array.from(frequencyMap.entries());
    freqArray.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });
    const result = [];
    for (const [num, freq] of freqArray) {
        for (let i = 0; i < freq; i++) {
            result.push(num);
        }
    }
    return result;
}
const input = [2, 3, 4, 4, 34, 6, 7, 2, 3, 7, 8, 8, 8, 7, 9, 10, 41, 8];
const output = sort(input);
console.log(output);





function findEmployeeInfo(employees, targetName) {
    const employee = employees.find(emp => emp.name === targetName);
    if (employee) {
        return `ชื่อ ${employee.name} ตำแหน่ง ${employee.position}`;
    } else {
        return `Employee with name ${targetName} not found.`;
    }
}
const employees = [
    { name: 'Arm', position: 'Front End' },
    { name: 'Game', position: 'Back End' }
];
console.log(findEmployeeInfo(employees, 'Janny')); 
console.log(findEmployeeInfo(employees, 'Game'));  
