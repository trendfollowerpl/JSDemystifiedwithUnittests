describe('variable hoisting', function(){
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

describe('function hoisting', function () {


    it('example 1', function () {
        expect(sayHello()).toEqual('HI');

        function sayHello () {
            function hello () {
                return 'Hello!';
            }

            return hello(); //!!!

            function hello () {
                return 'HI';
            }
        }


    });

    it('example 2', function () {
        expect(sayHello()).toEqual('Hello!');
        function sayHello () {
            function hello () {
                return 'Hello!';
            }

            return hello(); //!!!

            var hello = function() {
                return 'HI';
            };
        }
    });

    it('function expressions are not hoisted', function () {
        expect(()=>sayHello()).toThrow(); //TypeError: sayHello is not a function

        var sayHello = function() {
            function hello () {
                return 'Hello!';
            }

            return hello(); //!!!

            function hello () {
                return 'HI';
            }
        };
    });
});``