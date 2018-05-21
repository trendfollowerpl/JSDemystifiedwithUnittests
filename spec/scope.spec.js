describe('scope', function () {
    it('example 1', function () {
        expect(greet).toBeUndefined();
        var greet = 'Hello!';

        function sayHi () {
            expect(greet).toBeUndefined();//!!!!
            var greet = 'Ciao!';
            expect(greet).toEqual('Ciao!');
        }

        expect(greet).toEqual('Hello!');
        sayHi();
        expect(greet).toEqual('Hello!');
    });
});