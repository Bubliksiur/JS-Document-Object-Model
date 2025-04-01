const p = document.querySelector('p');
const select = document.querySelector('select');

const Tatry = {
    name: "Tatry",
    szczyt: "Rysy - 2499 m.n.p.m"
}
const Beskidy = {
    name: "Beskidy",
    szczyt: "Babia góra - 1725 m.n.p.m"
}
const Karkonosze = {
    name: "Karkonosze",
    szczyt: "Śnieżka - 1603 m.n.p.m"
}

select.addEventListener('input', (e) => {
    switch (select.value) {
        case 'tatry':
            p.textContent = `${Tatry.name}: ${Tatry.szczyt}`;
            break;
        case 'beskidy':
            p.textContent = `${Beskidy.name}: ${Beskidy.szczyt}`;
            break;
        case 'karkonosze':
            p.textContent = `${Karkonosze.name}: ${Karkonosze.szczyt}`;
            break;
        default:
            p.textContent = '';
    }
});