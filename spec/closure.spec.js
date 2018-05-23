describe('closure', function () {
    it('example', function () {
        var name = 'John';

        function greet(name) {
            return (function () {
                return name
            })
        }

        var sayHello = greet(name);
        name = 'SAM';
        expect(sayHello()).toEqual('John');
    });

    it('example 2', function () {
        var a = 'global';

        function outer() {
            var b = 'outer';
            return function () {
                return {
                    a,
                    b,
                    c: 'inner'
                }
            }
        }

        var innerFunction = outer();
        expect(innerFunction()).toEqual({a: 'global', b: 'outer', c: 'inner'});

        a=a.toUpperCase();
        expect(innerFunction().a).toEqual('GLOBAL');
    })
});