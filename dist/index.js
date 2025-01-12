"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strings_1 = require("./strings");
const objectLiteral_1 = require("./objectLiteral");
const functions_1 = require("./functions");
const any_1 = require("./any");
const tuples_1 = require("./tuples");
const interface_1 = require("./interface");
const typeAliases_1 = require("./typeAliases");
const unionTypes_1 = require("./unionTypes");
/*type inference : the type of variable is known by its assigned value . E.g : assigned value is a number the ts will infer it and deal it as a number .*/
let age = 30;
console.log(age);
/**Explicit type assignments */
let firstName = 'TypeScript';
let isDone = false;
console.log(`My ${firstName} course ${isDone}`);
/**Configuring for TS file structure */
/**
 * 1 - tsc (typescript compiler) is used to compile the file code e.g : tsc filename.ts .
 *     -  use 'node filename.js' to execute compiled js file .
 * 2 - But to make it more automated we use ts.config file , we can set it uo like this .
 *      - write 'tsc --init' and it will amke a ts.config.js file with commented configurations which we can disable to set up.
 * 3 - TS.config configuration:In ts.config
 *      - In module block check for rootdir variable that takes a string path (there si another that takes an array , just ignore that for now )
 *      - In Now as the rootdir is setup , the tsc will look for the filder specified in apth for file to run , in our case it is src folder
 *      - Same as it is specify path for compiled output js files as './dist'
 *      - Now as both are specified , we need to only run this 'tsc --watch' which will observe any changes in files src
 *      - Now as we change src it will automatically compile it to .dist directory
 *      - Run in new terminal 'node watch src/index.js' it will output the changes that were compiled automatically
 */
strings_1.names.forEach(name => {
    console.log('Printing string array :', name);
});
for (const key in objectLiteral_1.User) {
    if (objectLiteral_1.User.hasOwnProperty(key)) {
        console.log(`${key}: ${objectLiteral_1.User[key]}`);
    }
}
/** Functions */
console.log((0, functions_1.addtwoNumbers)(1, 2));
console.log((0, functions_1.subtractTwoNumber)(2, 3));
/**Any type */
console.log('Any type', (0, any_1.assignValue)(1));
console.log('Any type', (0, any_1.assignValue)('Typescript'));
/**Tuples and Named tuple*/
/**It is liek an array but diffrent values inside it  */
console.log('Tuple:', tuples_1.hsla);
/**Interface */
const author = {
    name: "Jane Doe",
    avatar: "https://example.com/avatar.jpg"
};
const newPost = (0, interface_1.setNewPost)("My First Blog Post", author, new Date(), ["typescript", "interfaces", "coding"]);
console.log('Post data:', newPost);
/**Type aliases */
console.log((0, typeAliases_1.greetUser)("JohnDoe"));
/**Union types */
console.log('Setting number in someId first', (0, unionTypes_1.setSomeId)(20));
console.log('Setting string in someId second', (0, unionTypes_1.setSomeId)('002'));
/**Type guards */
/**
 * it uses typeof property to check types for union types and type for interfaces .
 */ 
