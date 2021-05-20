import { Component } from 'react'
import Search from './search'
import Main from './main'

export default class App extends Component {
    state = {
        searchName: ''
    }
    setSearchName = (searchName) => {
        alert(searchName)
        alert(typeof(searchName))
        this.setState({
            searchName:`${searchName}`
        })
        alert(this.state.searchName)
    }
    render() {
        return (
            <div>
                <Search setSearchName={this.setSearchName} />
                <Main searchName={this.state.searchName} />
            </div>
        )
    }
}