import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './routes/index';
import {DefaultLayout} from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            {routes.publicRoutes.map((route, index) => {
              const Layout = route.layout || DefaultLayout;
              const Page = route.component
              return <Route key = {index} path = {route.path} 
              element = {<Layout>
                          <Page/>
                        </Layout>}/>
            })}
          </Routes>
      </div>
    </Router>
  );
}

export default App;
