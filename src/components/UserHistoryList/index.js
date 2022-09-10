/* eslint-disable react/no-unknown-property */
import './index.css'

const UserHistoryList = props => {
  const {historyListDetails, onDeleteHistoryItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyListDetails

  const onDeleteHistory = () => {
    onDeleteHistoryItem(id)
  }

  return (
    <li className="history-list-items">
      <div className="time-container">
        <p className="time">{timeAccessed}</p>
        <div className="history-content-container">
          <div className="content-card">
            <img src={logoUrl} alt="domain logo" className="logo-image" />
            <p className="app-title">{title}</p>
            <p className="app-domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div className="history-delete-container">
        <button
          type="button"
          className="del-button"
          onClick={onDeleteHistory}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="browser-delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default UserHistoryList
