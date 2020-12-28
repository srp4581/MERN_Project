export const defaultState = { // object that defines everything needed to make the app unique from one user to another
    user:[{
        id:"U1",
        name: "User1"
    },{
        id:"U2",
        name: "User2"
    }],
    groups: [{ // tasks belong in groups
        name: "To Do",
        id: "G1",
        owner:"U1"
    }, {
        name: "Doing",
        id: "G2",
        owner:"U1"
    }, { 
        name: "Done",
        id: "G3",
        owner:"U1"
    }],
    tasks: [{
        name: "Do tests",
        id: "T1",
        group: "G3",
        owner: "U1",
        isComplete: true
    }, {
        name: "Refactor tests",
        id: "T2",
        group: "G1",
        owner: "U1",
        isComplete: false
    },{
        name: "Fix code",
        id: "T3",
        group: "G2",
        owner: "U1",
        isComplete: false
    }],
    comments: [{
        owner: "U1",
        id: "C1",
        task: "T1",
        content: "Great work!!!"
    }, {
        owner: "U1",
        id: "C2",
        task: "T3",
        content: "Line 42 has a syntax error."
    }]

}