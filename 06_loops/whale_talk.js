const input = 'Wynne Zong sedang dirumah'
const vowels = ['a', 'e', 'i', 'o', 'u']
var resultArray = []

for (let i = 0; i < input.length; i++) {
  //console.log(`input index = ${input[i]}`)
  for (let vowel = 0; vowel < vowels.length; vowel++) {
    if (input[i] === vowels[vowel]) {
      resultArray.push(input[i])
    }
  }
}
