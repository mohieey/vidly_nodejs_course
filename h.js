const bcrypt = require('bcrypt')

bcrypt.genSalt(16).then(c => {
    console.log(c)
    return bcrypt.hash('1234', c)
}).then(h => console.log(h))

// async function u() {
//     let y = await bcrypt.genSalt(16)
//     let b = await bcrypt.hash('1234', y)
//     console.log(y)
//     console.log(b)
// }

// u()