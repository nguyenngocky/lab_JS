import Nav from "./nav";

const Header = {
    render() {
        return /* html */`
        <header class="max-w-5xl mx-auto">
            <div class="background bg-blue-900">
                <div class="logo py-4">
                    <a href="index.html"><img class="w-[170px] h-[60px] m-auto" src="https://phothongcaodang.fpt.edu.vn/wp-content/uploads/LOGO-PTC%C4%90-White-Transparency.png" width="150px" alt=""></a>
                </div>
            </div>
            <div class="bg-orange-500">
                ${Nav.render()}
            </div>
        </header>`;
    },
};
export default Header;