import { FaStar, FaArrowLeft } from 'react-icons/fa'


const ContentItemBig = ({data, closeModalClicked}) => {
    return (
        <div class="content-item-big">
            <div class="content-item-big-image-panel">
                <img src={data.largeimage} className="item-thumbnail" />
            </div>
            <div className="content-item-big-details-panel">
                <div className="content-item-big-details-panel-top">
                    <div className="content-item-big-title">{data.title}</div>
                    <div className="content-item-big-runtime">{data.runtime.replace('h', 'h ').replace('m', 'min')}</div>
                    <div className="content-item-big-rating"><FaStar className="item-icon"/>&nbsp;{data.rating? data.rating : '--'}</div>
                    <div className="content-item-big-synopsis" dangerouslySetInnerHTML={{__html: data.synopsis}}></div>
                </div>
                <div className="content-item-big-details-panel-bottom">
                    <div onClick={closeModalClicked} className="round-link content-item-big-back-link"><FaArrowLeft className="item-icon"/>&nbsp;Back to list</div>
                </div>
                
            </div>
        </div>
    )
}

export default ContentItemBig
