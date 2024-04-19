export const checkPassword = (pass) => {
    const res = [true, true, true]
    if (pass.length() < 8){
        res[0] = false;
    }
    if (!/(?=.*[A-Za-z])/.test(pass)){
        res[1] = false;
    }
    if (!/(?=.*[0-9])/.test(pass)){
        res[2] = false;
    }
    return res;
}