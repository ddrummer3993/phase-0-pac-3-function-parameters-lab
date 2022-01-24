//function with parameter
function introduction(name) {
    return `Hi, my name is ${name}.`;
}
console.log(introduction("David"));

//function with 2 parameters
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguage("David", "Ruby"));

//function with optional parameter
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguage("David", ));
