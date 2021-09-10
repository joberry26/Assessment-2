/*
    For this section of the assessment you will be putting together a cheat sheet for 
    common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let git =  'is a software that tracks changes in any set of files. It helps actively track any changes in 
'code and create repositories for personal use and collaborative use.';

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = 'GitHub is a central hub for software development files. It stores repositories and creates
'a link for users to push local software onto the global net.';

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

let init = {
    description: 'the init command initializes a repository.',
    code: 'git init',
};

//CODE HERE

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

let add = {
    description: 'the add command adds the files to the repository created from the specified file.',
    code: 'git add .',
};

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

let commit = {
    description: 'the commit command adds a message to go with the added code from the files.',
    code: 'git commit -m "message here".',
};


//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

let push = {
    description: 'the push command pushed the file from the local net to the global net (GitHub).',
    code: 'git push',
};