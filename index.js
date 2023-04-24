const friends = ["Guadalupe", "Ollie", "Aki"]
let writeCardsNew = []

function writeCards(friends) {
    for (let i = 0; i < friends.length; i++) {
        writeCardsNew.push(`Thank you, ${friends[i]}, for the wonderful surprise gift!`)
    }
    return writeCardsNew;
}
writeCardsNew

let count = 10;

function countDown(count) {
    while (count > -1) {
        console.log(count--);
    }
    return count
}
countDown(count)
