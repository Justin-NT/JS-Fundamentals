let friend = 'Bob';

switch (friend) {
    case 'Will':
        //code block
        console.log('Will, did you forget the squirly bois');
        break;
    case 'Daylonian':
        //code block
        console.log('Dylan, return on your shield or don\'t return at all');
        break;
    case 'Eric':
        //code block
        console.log("I don't know what to say, so heres something")
        break;
    default:
        //code block
        console.log(`I'm sorry Dave, I don't know who ${ friend } is`)
};

/*
Challenge:
Write a dessert menu;
If the dessert is pie, console.log 'Pie, pie, me oh my!'
If the dessert if cake, console.log 'Cake is great!'
If the dessert is ice cream, console.log 'I scream for ice cream!'
Otherwise, have your switch statement console.log 'Not on the menu.'
*/

dessert = 'banana';
switch (dessert) {
    case 'pie':
        console.log('Pie, pie, me oh my!');
        break;
    case 'cake':
        console.log('Cake is great!');
        break;
    case 'ice cream':
        console.log('I scream for ice cream!')
        break;
    default:
        console.log(`${dessert} is not on the menu`);
};
