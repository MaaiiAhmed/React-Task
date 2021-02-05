import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound from './components/notFound'
import Home from './containers/home'
import StudentDetails from './containers/studentDetails'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers'
import promiseMW from 'redux-promise';

const createStoreWithMW = applyMiddleware(promiseMW)(createStore)
const App = () => {
    return (
        <Provider store={createStoreWithMW(reducers)}>
            <BrowserRouter>
                <div className="conatainer">

                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/students/:id" component={StudentDetails} />
                            <Route path="*" component={NotFound} />
                        </Switch>

                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    )
}
export default App
