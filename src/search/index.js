import {Component} from 'react'
import SearchItem from '../searchItem'
import './index.css'

class Search extends Component {
  state = {
    search: '',
    list: this.props.list,
  }
  deleteItem = id => {
    const {list} = this.state
    const val = list.filter(each => each.id !== id)
    this.setState({list: val})
  }
  change = event => {
    const {search, list} = this.state
    this.setState({search: event.target.value})
  }
  render() {
    const {search, list} = this.state
    const val = list.filter(each =>
      each.title.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <div>
        <div className="nav">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo"
          />

          <div className="search-card">
            <div className="logo-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png "
                alt="search"
                className="search"
              />
            </div>
            <input
              type="search"
              className="input"
              placeholder="Search history"
              value={search}
              onChange={this.change}
            />
          </div>
        </div>
        <div className="holder">
          <ul className="ul">
            {val.length <= 0 ? (
              <p>There is no history to show</p>
            ) : (
              val.map(each => (
                <SearchItem
                  details={each}
                  key={each.id}
                  deleteItem={this.deleteItem}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default Search
