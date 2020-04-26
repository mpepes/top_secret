import {
    getData,
    getSearchQuery,
    getDataByType,
} from '../selectors';

describe('Data selectors', () => {
    let state;

    beforeEach(() => {
        state = {
            data: {
                searchQuery: 'test search query',
                data: {
                    giphy: {
                        items: [1, 2, 3, 4],
                    },
                },
            },
        };
    });

    describe('getData', () => {
        it('should return result value', () => {
            const result = { giphy: { items: [1, 2, 3, 4] } };
            expect(getData(state)).toEqual(result);
        });
    });

    describe('getSearchQuery', () => {
        it('should return result value', () => {
            const result = 'test search query';
            expect(getSearchQuery(state)).toEqual(result);
        });
    });

    describe('getDataByType', () => {
        it('should return result value', () => {
            const result = { items: [1, 2, 3, 4] };
            expect(getDataByType(state, 'giphy')).toEqual(result);
        });
    });
});
