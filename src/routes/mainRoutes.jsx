import RolePicker from 'view/RolePicker/RolePicker'
import CurrentRole from 'view/CurrentRole/CurrentRole'
import Admin from 'view/Admin/Admin'

const mainRoutes = [
    {
        path: "/roles",
        name: "Role Picker",
        component: RolePicker
    },
    {
        path: "/current",
        name: "Current Role",
        component: CurrentRole
    },
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
        role: "admin"
    },
    { redirect: true, path: "/", to: "/roles", name: "Redirect" }
]

export default mainRoutes;