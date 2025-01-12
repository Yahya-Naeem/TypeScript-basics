import {names} from './strings';
import {User} from './objectLiteral';
import { addtwoNumbers,subtractTwoNumber } from './functions';
import { assignValue } from './any';
import {hsla,course} from './tuples';
import { setNewPost, Author } from './interface';
import { greetUser } from './typeAliases';
import { setSomeId } from './unionTypes';


    /*type inference : the type of variable is known by its assigned value . E.g : assigned value is a number the ts will infer it and deal it as a number .*/
    let age = 30; 
    console.log(age);

    /**Explicit type assignments */
    let firstName: string = 'TypeScript';
    let isDone: boolean = false;
    console.log(`My ${firstName} course ${isDone}`);

    /**Object Literals */
    names.forEach(name=>
        {
            console.log('Printing string array :',name)
        })
    for(const key in User){
        if(User.hasOwnProperty(key)){
            console.log(`${key}: ${User[key as keyof typeof User]}`)
        }
    }


    /** Functions */
    console.log(addtwoNumbers(1,2));
    console.log(subtractTwoNumber(2,3));

    /**Any type */
    console.log('Any type',assignValue(1));
    console.log('Any type',assignValue('Typescript'));

    /**Tuples and Named tuple*/
    /**It is liek an array but diffrent values inside it  */
    console.log('Tuple:',hsla);

    /**Interface */
    const author: Author = {
        name: "Jane Doe",
        avatar: "https://example.com/avatar.jpg"
    };
    const newPost = setNewPost(
        "My First Blog Post",
        author,
        new Date(),
        ["typescript", "interfaces", "coding"]
    );
    console.log('Post data:',newPost);

    /**Type aliases */
    console.log(greetUser("JohnDoe"));


    /**Union types */
    console.log('Setting number in someId first',setSomeId(20));
    console.log('Setting string in someId second',setSomeId('002'));

    /**Type guards */
    /**
     * it uses typeof property to check types for union types and type for interfaces .
     */