function Validation(values) {
    let error = {};


    if(values.name==="")
    {
        error.name="Name should not be empty"
    }
    else{
        error.name=""
    }
    // Email validation regex
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!values.email) {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Invalid email format";
    }

    // Password validation regex
    const password_pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!values.password) {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password must have at least 6 characters, one uppercase letter, one number, and one special character";
    }

    return error;
}

export default Validation;