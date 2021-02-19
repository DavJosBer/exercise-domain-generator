let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let ext = ['.com', '.io', '.us', '.net'];
let arr = [];

function domGenerator() {
    let auxPron = '';
    let auxAdj = '';
    let auxNoun = '';
    let auxExt = '';
        for (let i = 0; i < 2; i++) {
            for (let a = 0; a < 2; a++) {
                for (let b = 0; b < 2; b++) {
                    for (let c = 0; c < 4; c++) {
                        auxPron = pronoun[i];
                        auxAdj = adj[a];
                        auxNoun = noun[b];
                        auxExt = ext[c];
                        arr.push(`${auxPron}${auxAdj}${auxNoun}${auxExt}`)
                    }
                }
            }
        }

function display() {
    for (let i in arr) {
        console.log(arr[i])
    }
}
    return display()
}
    console.log(domGenerator())