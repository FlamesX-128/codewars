import { assertEquals } from 'std/testing/asserts.ts'

import { decrypt, encrypt } from './main.ts'

Deno.test('Simple Encryption #1 - Alternating Split - 001', () => {
    const encrypted = encrypt('This is a test!', 1)
    assertEquals(encrypted, 'hsi  etTi sats!')

    const decrypted = decrypt(encrypted, 1)
    assertEquals(decrypted, 'This is a test!')
})

Deno.test('Simple Encryption #1 - Alternating Split - 002', () => {
    const encrypted = encrypt('This is a test!', 2)
    assertEquals(encrypted, 's eT ashi tist!')

    const decrypted = decrypt(encrypted, 2)
    assertEquals(decrypted, 'This is a test!')
})

Deno.test('Simple Encryption #1 - Alternating Split - 003', () => {
    const encrypted = encrypt('This is a test!', 3)
    assertEquals(encrypted, ' Tah itse sits!')

    const decrypted = decrypt(encrypted, 3)
    assertEquals(decrypted, 'This is a test!')
})
