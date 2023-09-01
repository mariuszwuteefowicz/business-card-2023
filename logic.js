console.log('logika w js')

if ('JavaScript' != 'Java') {
    console.log('javascript to nie java')
}

if ('JavaScript' == 'Java') {
    console.log('javascript to nie java')
}

if (4<5) {
    console.log('porownanie matematyczne')
}

if ('4'===4) {
    console.log('to jest prawda')
}

if (false) {
    console.log('nigdy sie nie pojawie :(')
}

if ('tekst') {
    console.log('jednak sie pojawie :)')
}

if (('2' !==2) && (2 === 2)) {
    console.log('to jest prawda')
}

if (('2' !==2) || (2 === 3)) {
    console.log('to jest prawda')
}

if (('2' !==2) && !(2 === 3)) {
    console.log('to jest prawda')
}


if ('2' ===2) {
    console.log('to jest prawda!')
} else {
console.log('to jest falsz!')
}

let myNumber = 8;
if (myNumber ===4) {
    console.log('my number to 4')
} else if (myNumber === 8) {
console.log('my number to 8')
} else {
    console.log('nie wiem ile wynosisz')
}

switch (myNumber) {
    case 4:
        console.log('my number to 4')
    break;
    case 8:
        console.log('my number to 8')
    break;
    default: 
    console.log('nie wiem ile wynosisz')
}

(myNumber > 4) ? console.log('wieksze niz 4') : console.log('mniejsze lub rowne 4')