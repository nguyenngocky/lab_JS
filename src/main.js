import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import NewsDetail from "./pages/newsDetail";
import SignPage from "./pages/sign";
import SignupPage from "./pages/signup";
import dashboard from "./admin/dashboard";
import news from "./admin/news";
import add from "./admin/add";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(NewsDetail.render(id));
    },
    "/sign": () => {
        print(SignPage.render());
    },
    "/signup": () => {
        print(SignupPage.render());
    },
    "/admin/dashboard": () => {
        print(dashboard.render());
    },
    "/admin/news": () => {
        print(news.render());
    },
    "/admin/add": () => {
        print(add.render());
    },
});

router.resolve();