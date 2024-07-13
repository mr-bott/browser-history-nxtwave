import {Component} from 'react'
import './index.css'

class SearchItem extends Component {
  Delete = id => {
    const {deleteItem} = this.props
    deleteItem(id)
  }

  render() {
    const {details, deleteItem} = this.props
    const {id, timeAccessed, logoUrl, title, domainUrl} = details
    return (
      <li className="li">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="img" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
        <button type="button" data-testid="delete"  onClick={() => this.Delete(id)} className="del">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
           
          />
        </button>
      </li>
    )
  }
}
export default SearchItem
