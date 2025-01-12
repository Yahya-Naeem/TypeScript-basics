type someId = string | number;
let id : someId ;
export function setSomeId(val: someId):someId{
    id = val ;
    return id;
}