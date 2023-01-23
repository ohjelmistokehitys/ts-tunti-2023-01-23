// merkkijonot eli 'string'
let language = 'TypeScript';

// 'number' käsittää sekä kokonais- että liukuluvut
let wholeNumber = 2023;
let decimalNumber = 3.14;

// taulukot voidaan määritellä joko `tyyppi[]` tai `Array<tyyppi>`
let positive: number[] = [];
let negative = [-1, -2, -3, -4];

positive.push(0);

let bagOfData = [1, 2, 3, 'hello', 'world', false];

function ping(): void {
    console.log('pong');
}


function logUnknown(thing: unknown) {
    // jos merkkijono, logita korkeintaan 20 merkkiä alusta
    if (typeof thing === 'string') {
        console.log(new Date(), thing.substring(0, 20));
    } else {
        console.log(new Date(), thing);
    }
}

logUnknown('Edellä esitetyistä tyypeistä any on siinä mielessä riskialttiimpi, että sen kautta tehtävien operaatioiden osalta TS ei tee tarkastuksia:')
logUnknown(false);
logUnknown({ a: 1 });

let faces = ['😀', '🙁'];          // string[]
let numbers = [7, 100, 42];         // number[]

let all = [...faces, '👋', ...numbers];
console.log(all);

for (let item of all) {
    if (typeof item === 'string') {
        console.log(`(${item})`);
    } else {
        break;
    }
}

all.forEach((item) => {
    if (typeof item === 'string') {
        console.log(`(${item})`);
    } else {
        console.log(item * 2);
    }
});


let nimet = ['Matti', 'Teppo'];

let nimi = nimet[10]!;
console.log(nimi?.toUpperCase());
