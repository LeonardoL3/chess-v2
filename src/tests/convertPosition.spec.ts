import { PiecePositions } from '@/helpers/types'
import { convertPosition } from '@/helpers/utils'
import { describe, it, expect } from 'vitest'

describe("Convert Position", () => {
    it('should convert position from chess notation to indexes', () => {
        const indexesResult = convertPosition(PiecePositions.a3)
        expect(indexesResult).toEqual([0, 2])

        const chessNotationResult = convertPosition([0, 2])
        expect(chessNotationResult).toEqual(PiecePositions.a3)
    })
})