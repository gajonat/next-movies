import ContentHeader from "./ContentHeader"
import ContentGrid from "./ContentGrid"


const PageContent = ({moviesData, readMoreClickedOnItem}) => {
    return (
        <div className="page-content">
            <ContentHeader />
            <ContentGrid moviesData={moviesData} readMoreClickedOnItem={readMoreClickedOnItem} />
            {moviesData.length === 0 && (
                <div className="no-items-message">No movies found...</div>
            )}
        </div>
    )
}

export default PageContent
