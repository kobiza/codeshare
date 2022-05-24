const {findLowestCommonAncestor, findLowestCommonAncestorWithParent, findLowestCommonAncestorWithParent2,
    findLowestCommonAncestor2
} = require('./lowestCommonAncestor')

describe('findLowestCommonAncestor', () => {

    const treeExample = {
        id: 'A',
        children: [{
            id: 'B',
            children: [{
                id: 'D',
                children: []
            }, {
                id: 'E',
                children: [{
                    id: 'F',
                    children: []
                }, {
                    id: 'G',
                    children: []
                }]
            }]
        }, {
            id: 'C',
            children: []
        }]
    }


    test('case 1', () => {
        const result = findLowestCommonAncestor(treeExample, 'F', 'D')

        expect(result).toBe('B')
    });

    test('case 2', () => {
        const result = findLowestCommonAncestor(treeExample, 'B', 'E')

        expect(result).toBe('B')
    });

    test('case 3', () => {
        const result = findLowestCommonAncestor(treeExample, 'G', 'C')

        expect(result).toBe('A')
    });

    test('case 4', () => {
        const result = findLowestCommonAncestor(treeExample, 'A', 'C')

        expect(result).toBe('A')
    });
});

describe('findLowestCommonAncestor2', () => {
    const root = {
        id: 'A',
        left: {
            id: 'B',
            left: {
                id: 'D',
            },
            right: {
                id: 'E',
                left: {
                    id: 'F',
                },
                right: {
                    id: 'G',
                }
            }
        },
        right: {
            id: 'C'
        }
    }

    const A = root
    const B = A.left
    const C = A.right
    const D = B.left
    const E = B.right
    const F = E.left
    const G = E.right


    test('case 1', () => {
        const result = findLowestCommonAncestor2(root, F, D)

        expect(result).toBe(B)
    });

    test('case 2', () => {
        const result = findLowestCommonAncestor2(root, B, E)

        expect(result).toBe(B)
    });

    test('case 3', () => {
        const result = findLowestCommonAncestor2(root, G, C)

        expect(result).toBe(A)
    });

    test('case 4', () => {
        const result = findLowestCommonAncestor2(root, A, C)

        expect(result).toBe(A)
    });
});

describe('findLowestCommonAncestorWithParent', () => {

    const treeWithParentExample = {
        A: null,
        B: 'A',
        C: 'A',
        D: 'B',
        E: 'B',
        F: 'E',
        G: 'E'
    }

    test('case 1', () => {
        const result = findLowestCommonAncestorWithParent(treeWithParentExample, 'F', 'D')

        expect(result).toBe('B')
    });

    test('case 2', () => {
        const result = findLowestCommonAncestorWithParent(treeWithParentExample, 'B', 'E')

        expect(result).toBe('B')
    });

    test('case 3', () => {
        const result = findLowestCommonAncestorWithParent(treeWithParentExample, 'G', 'C')

        expect(result).toBe('A')
    });

    test('case 4', () => {
        const result = findLowestCommonAncestorWithParent(treeWithParentExample, 'A', 'C')

        expect(result).toBe('A')
    });
});

describe('findLowestCommonAncestorWithParent2', () => {
    const A = { parent: '' }
    const B = { parent: A}
    const C = { parent: A}
    const D = { parent: B}
    const E = { parent: B}
    const F = { parent: E}
    const G = { parent: E}

    test('case 1', () => {
        const result = findLowestCommonAncestorWithParent2(F, D)

        expect(result).toBe(B)
    });

    test('case 2', () => {
        const result = findLowestCommonAncestorWithParent2(B, E)

        expect(result).toBe(B)
    });

    test('case 3', () => {
        const result = findLowestCommonAncestorWithParent2(G, C)

        expect(result).toBe(A)
    });

    test('case 4', () => {
        const result = findLowestCommonAncestorWithParent2(A, C)

        expect(result).toBe(A)
    });
});
