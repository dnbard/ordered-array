const { expect } = require('chai');

const OrderedArray = require('../index');

describe('Sorted Array', () => {
    describe('#add', () => {
        it('should add first value', () => {
            const array = new OrderedArray();
            array.insert(1);

            expect(array.length).to.be.equal(1);
            expect(array[0]).to.be.equal(1);
        });

        it('should add value before existing one', () => {
            const array = new OrderedArray();
            array.insert(1);
            array.insert(0);

            expect(array).to.be.deep.equal([0, 1]);
        });

        it('should add value after existing one', () => {
            const array = new OrderedArray();
            array.insert(1);

            array.setEquals((a, b) => b < a);
            array.insert(2);

            expect(array.length).to.be.equal(2);
            expect(array[0]).to.be.equal(1);
        });

        it('should add value into the center of existing array', () => {
            const array = new OrderedArray(1, 4, 2);

            array.insert(3);
            expect(array).to.be.deep.equal([1, 2, 3, 4]);
        });
    });

    it('should sort initial array', () => {
        const array = new OrderedArray(1, 4, 2);
        expect(array).to.be.deep.equal([1, 2, 4]);
    });

    describe('#remove', () => {
        it('should remove existing entity', () => {
            const array = new OrderedArray();
            array.insert(1);
            array.insert(2);

            array.remove(1);

            expect(array.length).to.be.equal(1);
            expect(array[0]).to.be.equal(2);
        });
    });

    describe('#resort', () => {
        it('should use selected equals handler to sort existing array', () => {
            const array = new OrderedArray(2, 1, 4);
            array.resort();
            expect(array).to.be.deep.equal([1 ,2 ,4]);
        });
    });
});
