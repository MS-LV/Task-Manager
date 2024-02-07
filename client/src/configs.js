export const rootConfigs = {
    API_URL: 'http://localhost:8000',
    get signUP() {
        return this.API_URL + '/signup';
    },
    get signIn() {
        return this.API_URL + '/signin';
    },
    get verifyUser() {
        return this.API_URL + '/verify';
    },
    get refreshUser() {
        return this.API_URL + '/refresh';
    },
    get logoutUser() {
        return this.API_URL + '/logout';
    }
}