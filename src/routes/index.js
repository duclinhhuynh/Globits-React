import Home from "../pages/Home"
import Countries from "../pages/Countries"
const publicRoutes = [
    {path: '/', component:Home},
    {path: '/Countries', component:Countries},
]

const privateRoutes = []
const routes = { publicRoutes, privateRoutes };
export default routes;