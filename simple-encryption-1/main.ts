// Simple Encryption #1 - Alternating Split

function encrypt(s: string, n: number): string {
    if (!s?.length || n < 1) return s

    let right = '', left = ''

    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 0) right += s[i]
        else left += s[i]
    }

    return encrypt(left + right, n - 1)
}

function decrypt(s: string, n: number): string {
    if (!s?.length || n < 1) return s

    let str = ''

    for (let i = 0; i < ~~(s.length / 2); i++) {
        console.log(i + ~~(s.length / 2), i)
        str += s[i + ~~(s.length / 2)]
        str += s[i]
    }

    if (s.length % 2 != 0) str += s[s.length - 1]

    return decrypt(str, n - 1)
}

export { encrypt, decrypt }
