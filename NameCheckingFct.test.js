const NameCheckingFct = require('./NameCheckingFct')

test("Checks if the function name is relevent", () =>{

    expect(NameCheckingFct("Sommerville")).toBe(true);
    expect(NameCheckingFct("Thisis'maliciouscode'")).toBe(false);
    expect(NameCheckingFct("Thisisalongstringwithmorethen40charactersfrombeginningtoend")).toBe(false);
    expect(NameCheckingFct("-Sommerville")).toBe(false);
    expect(NameCheckingFct("'Reilly")).toBe(false);
    expect(NameCheckingFct("Washington-Wilson")).toBe(true);
    expect(NameCheckingFct("S")).toBe(false);
    expect(NameCheckingFct("C-3PO")).toBe(false);
    expect(NameCheckingFct("--badcode")).toBe(false);
    expect(NameCheckingFct("Sommer_ville")).toBe(false);
    expect(NameCheckingFct("O'Reilly")).toBe(true);
    expect(NameCheckingFct("Washington Wilson")).toBe(false);
    expect(NameCheckingFct("Sx")).toBe(true);
    expect(NameCheckingFct("O Reilly")).toBe(false);



    
})