import { FaStar, FaArrowRight } from 'react-icons/fa'

const ContentItem = ({data, readMoreClicked}) => {
    return (
        <div className="content-item">
            <div className="content-item-top">
                <img src={data.image} className="item-thumbnail" />
                <div className="item-title"><span dangerouslySetInnerHTML={{__html: data.title}}></span> ({data.released})</div>
            </div>
            <div className="content-item-bottom">
                <div className="item-rating"><FaStar className="item-icon"/>&nbsp;{data.rating? data.rating : '--'}</div>
                <div onClick={readMoreClicked} className="round-link item-read-more-link">Read More <FaArrowRight className="item-icon"/></div>
            </div>
            
        </div>
    )
}

export default ContentItem
