
import footerLogo from '../assets/images/next-movies-footer-logo.png';
import socialNetworkIcons from '../assets/images/footer-social-networks-grid.png';


const PageFooter = () => {
    return (
        <div className="page-footer">
            <div className="page-footer-content">
                <div className="footer-icon">
                    <img src={footerLogo} alt="logo" />
                </div>
                <div className="footer-contact-us-line">Contact us</div>
                <div className="footer-contact-contact-details">support@nextmovies.com</div>
                <div className="footer-contact-contact-details">Mon - Fri | 6:00am - 5:00 pm PT</div>
                <div className="footer-contact-contact-social-icons">
                    <img src={socialNetworkIcons} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default PageFooter
