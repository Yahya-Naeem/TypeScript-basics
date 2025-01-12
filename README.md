# TypeScript-basics
This repository contians basics to learn and implement typescript , I gathered it from a course so anyone looking out to implement and learn basocs of TS or getting started with it they can do it in an hour or two ! 
Prerequisites : 
Javascript and bit of types knowledge !

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