export const isDataValid = (email,password) => {
    // const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
    // if(!isNameValid) return "Please enter a valid name";
    
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

    if(!isEmailValid) return "Please enter a valid email address";
    if(!isPasswordValid) return "Please enter a valid password";

    return null;

}