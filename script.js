const messageParts = {
    animal: ['goat', 'cat', 'dog', 'cow', 'sheep', 'bat', 'horse', 'fox', 'squirrel', 'buffalo', 'mouse', 'pigeon', 'lion', 'monkey'],
    habitat: ['wetlands', 'tundra', 'savanna', 'tropical rainforest', 'desert', 'arctic', 'coral reef', 'grasslands'],
    sound: ['screech', 'growl', 'buzz', 'chirp', 'meow', 'bark', 'moo', 'quack', 'squeak', 'neigh', 'roar', 'sing']
}

const randNumber = array => Math.floor(Math.random() * array.length)

const createMessage = obj =>{
    let randomAnimal = obj.animal[randNumber(obj.animal)]
    let randomHabitat = obj.habitat[randNumber(obj.habitat)]
    let randomSound = obj.sound[randNumber(obj.sound)]

    let message = `I am a ${randomAnimal} of the ${randomHabitat} habitat. Hear me ${randomSound}!. Disclaimer: this program is not factually correct. Believe at your own discretion.`

    return message
}

console.log(createMessage(messageParts))