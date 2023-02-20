const fish = {
    name: 'noob',
    add: 'discord',
    color: 'black',
    phone: '659074587645',
    price: '400'
}

const {name}= fish;
console.log(name);

function getNames() {
    return ['alim', 'dalim']
}

const [baba, chaca] = getNames();
console.log(chaca, baba);