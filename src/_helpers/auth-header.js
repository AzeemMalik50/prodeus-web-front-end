export function authHeader(isHeader) {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));
    let header = {'Authorization': 'Bearer ' + user.accessToken}
    if(isHeader){
        header = Object.assign(header, isHeader);
    }
    if (user && user.accessToken) {
        return header;
    } else {
        return {};
    }
}