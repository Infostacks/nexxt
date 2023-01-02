import { PortfolioProjectsProps } from "../../components/Global Components/PortfolioProjects";
import bgBooking from "../../assets/images/portfolio/BgBookingAA.png"
import bgCrewmama from "../../assets/images/portfolio/bGCrewmama.png"
import bgSeviin from "../../assets/images/portfolio/BgSeviinAA.png"
import bgDitto from "../../assets/images/portfolio/BgShopDittoAA.png"
import bgKanopy from "../../assets/images/portfolio/bGKanopy.png"
import BookingMockup from "../../assets/images/portfolio/BookingMockUp.png"
import CrewmamaMockup from "../../assets/images/portfolio/CrewmamaMockup.png"
import SeviinAiMockup from "../../assets/images/portfolio/SeviinAIMockup.png"
import KanopyMockup from "../../assets/images/portfolio/KanopyMockup.png"
import SdittoMockup from "../../assets/images/portfolio/SdittoMockup.png"
export const portfoliosprops: PortfolioProjectsProps = {
    portfoliosprops: [
        {
            projectTitle: "Booking.com",
            projectDescription: "Choose Booking.com if you enjoy traveling but worry about finding a decent place to stay and are sick of looking for websites that can ease your suffering of finding a decent hotel as well as other needs. This website offers simple bookings to make your life easier and also gives you the option to become a client or vendor.",
            projectBgImgLink: bgBooking,
            projectLink: "#",
            projectMockupImg: BookingMockup

        },
        {
            projectTitle: "Crewmama.com",
            projectDescription: "For freelancers to post their gigs on their website, CrewMama offers a platform.There is no need to browse several websites looking for photographers if one wishes to hire a photographer. With the assistance of a website, you can hire a crew and complete the task quickly without any hustle.",
            projectBgImgLink: bgCrewmama,
            projectLink: "#",
            projectMockupImg: CrewmamaMockup
        },
        {
            projectTitle: "Seviin.ai",
            projectDescription: "SeVIIn's services combine data from many enterprise systems to provide scalable, reliable, intelligent, and customized interactions. Customers may share their personal information with your company with the utmost simplicity, trust, and value due to SeVIIn's Web 3.0 and blockchain services and technologies.",
            projectBgImgLink: bgSeviin,
            projectLink: "#",
            projectMockupImg: SeviinAiMockup
        },
        {
            projectTitle: "Kanopy.com",
            projectDescription: "The best video streaming service for high-quality, thoughtful entertainment is Kanopy. Find inspiring, educational, and entertaining movies, documentaries, international films, classic films, independent films, and educational videos.You can watch ad-free movies and TV shows on your TV, smartphone, tablet, and online due to a partnership between Kanopy and public libraries and institutions.",
            projectBgImgLink: bgKanopy,
            projectLink: "#",
            projectMockupImg: KanopyMockup
        },
        {
            projectTitle: "ShopDitto.com",
            projectDescription: "Brands occasionally have excess stock that they want to sell. Ditto assists brands in offloading excess stock so that you can save money. Ditto gets discounts by obtaining extra inventory from brands. I agree that it's wonderful that you can rely on them to find you the greatest bargain! You can discover the greatest prices on extra products with Ditto.",
            projectBgImgLink: bgDitto,
            projectLink: "#",
            projectMockupImg: SdittoMockup
        }
    ]

}