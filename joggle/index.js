import loginRoute from './login'
import homeRoute from './home'

const routes = [
    loginRoute,
    homeRoute
]

export function registerRoutes(app) {
    routes.forEach(route => app.use(route))
}
