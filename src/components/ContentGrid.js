import ContentItem from "./ContentItem"

const ContentGrid = ({moviesData, readMoreClickedOnItem}) => {
    return (
        <div className="content-grid">
            {moviesData.map((item, index) => (
                <ContentItem className="xxx" key={index} data={item} 
                readMoreClicked={() => readMoreClickedOnItem(item.id)}/>
            ))}
        </div>
    )
}

export default ContentGrid
