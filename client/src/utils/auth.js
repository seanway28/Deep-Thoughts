import decode from 'jwt-decode';

class AuthService {
    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        const token = this.getToken();

        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpress(token) {
        try {
            const decode = decode(token);
            if (decode.exp < Date.now() / 1000) {
                return true;
            } else {
                return false;
            }
            } catch (err) {
                return false;
            }
        }
    }

    getToken() {
        return localStorage.getItem('id_token')
    }
