const emailValidation = (email) => {
    const regex = "^[\\w\\-\\.]+@([\\w-]+\\.)+[\\w-]{2,}$";
    return email.match(regex);
}

export default emailValidation;