import Aside from "./Layouts/Aside";
import Main from "./Layouts/Main";
import Overlay from "./Layouts/Overlay";

export default function Home() {

    // @ts-ignore
    return <>
        <Aside/>

        <Overlay/>

        <Main/>

        <button className="option-btn">
            <i className="lni lni-cog"></i>
        </button>
        <div className="option-overlay"></div>
        <div className="option-box">
            <div className="option-header">
                <div>
                    <h5>Theme Customizer</h5>
                    <p className="text-gray">Customize and Preview in Real time</p>
                </div>
                <button className="option-btn-close text-gray">
                    <i className="lni lni-close"></i>
                </button>
            </div>
            <h6 className="mb-10">Sidebar</h6>
            <ul className="mb-30">
                <li>
                    <button className="leftSidebarButton active">Left Sidebar</button>
                </li>
                <li>
                    <button className="rightSidebarButton">Right Sidebar</button>
                </li>
            </ul>

            <h6 className="mb-10">Theme</h6>
            <ul className="d-flex flex-wrap align-items-center">
                <li>
                    <button className="lightThemeButton active">
                        Light Theme + Sidebar 1
                    </button>
                </li>
                <li>
                    <button className="lightThemeButton2">Light Theme + Sidebar 2</button>
                </li>
                <li>
                    <button className="darkThemeButton">Dark Theme + Sidebar 1</button>
                </li>
                <li>
                    <button className="darkThemeButton2">Dark Theme + Sidebar 2</button>
                </li>
            </ul>

            <div className="promo-box">
                <h3>PlainAdmin Pro</h3>
                <p>Get All Dashboards and 300+ UI Elements</p>
                <a
                    href="https://plainadmin.com/pro"
                    target="_blank"
                    rel="nofollow"
                    className="main-btn primary-btn btn-hover"
                >
                    Purchase Now
                </a>
            </div>
        </div>
    </>
}
