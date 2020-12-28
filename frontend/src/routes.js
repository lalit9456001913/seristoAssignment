import { BrowserRouter as Router , Route, Link, Switch ,Redirect} from 'react-router-dom';
import App from './App.js'

const routes = [
  {
    path: '/',
    exact: true,
    component:App
  },
   {
    path: '*',
    render: () => <Redirect to="/" />
  }
];
export default class Index extends React.Component {
  constructor(props){
    super(props)
    this.state={
      loginIn:false
    }
    
  }

  render(){
  
      return (
        <div >
       <Router>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route}  />
            ))}
          </Switch>
       </Router>
        </div>
        );
  }
  
}