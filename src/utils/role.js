module.exports = {
    getRole: () => {
        return localStorage.getItem('role')
    },
    setRole: (role) => {
        localStorage.setItem('role', role)
    }
}