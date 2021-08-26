import App from './components/App'
import { render } from 'react-dom'
import './index.scss'

let obj={
    name:"sanket"
}

console.log(obj)

render(<App/>,document.getElementById('root'))