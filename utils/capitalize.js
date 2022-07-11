import { capitalize } from "@mui/material";

export const Capitalize = (string) => {
    if(!string) return '';
    string = string.toString()
    return capitalize(string)
}

export const CapitalizeV2 = (string) => {

    if(string === undefined || string === null) return '';
    if(typeof string === 'object') return '';
    // string = string.replace(/-/, ' ')

    string = string.toString()
    const words = string.split(" ");
    
    let finalString = '';

    words.map( (word, i) => {
        if(i !== 0 && i!==(words.length)){ finalString += ' ' }
        if(word.includes(".") || word.includes("/")){
            finalString += word.toUpperCase();
        }
        else{
            finalString += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }
        return false;
    })

    return finalString;

};
