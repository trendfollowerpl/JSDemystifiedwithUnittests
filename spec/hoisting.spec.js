describe('hoisting', function(){
    it('example 1', function () {
        expect(x).toBeUndefined();
        var x;
        expect(x).toBeUndefined();
        x=5;
        expect(x).toEqual(5);
    });

    it('initialisations are not hoisted', function () {
        expect(y).toBeUndefined();
        var y=10; //initialisations are not hoisted
        expect(y).toEqual(10);
    });
});