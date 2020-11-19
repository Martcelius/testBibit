/*
# Expected Outputs
['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
[
    ["kita", "atik", "tika"],
    ["aku", "kua"],
    ["makan"],
    ["kia"]
 ]
*/

function anagram(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == '') continue

        let tmp = []
        tmp.push(arr[i])

        const element1 = arr[i].toLowerCase().split('').sort().join('')

        for (let j = i+1 ; j < arr.length; j++) {
            const element2 = arr[j].toLowerCase().split('').sort().join('')

            if (element1.length === element2.length) {
                let isMatch = element1 === element2

                if (isMatch) {
                    tmp.push(arr[j])
                    arr[j] = ''
                }
            } else {
                continue
            }
        }
        result.push(tmp)
    }

    return result
}

let groupAnagram = anagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'])
console.log(groupAnagram)