const dashboard = {
    render() {
        return /* html */`
        <div class="max-w-5xl mx-auto flex">
        <aside class="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div class="p-6">
            <a href="index.html" class="text-red text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
        </div>
        <nav class="text-red text-base font-semibold pt-3">
            <a href="/" class="flex items-center active-nav-link text-red py-4 pl-6 nav-item">
                <i class="fas fa-tachometer-alt mr-3"></i>
                Dashboard
            </a>
            <a href="/admin/news" class="flex items-center text-red opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i class="fas fa-sticky-note mr-3"></i>
                Quản lí bài viết
            </a>
            <a href="#" class="flex items-center text-red opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i class="fas fa-table mr-3"></i>
                Tables
            </a>
            <a href="#" class="flex items-center text-red opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i class="fas fa-align-left mr-3"></i>
                Forms
            </a>
            <a href="#" class="flex items-center text-red opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i class="fas fa-tablet-alt mr-3"></i>
                Tabbed Content
            </a>
            <a href="#" class="flex items-center text-red opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i class="fas fa-calendar mr-3"></i>
                Calendar
            </a>
        </nav>

    </aside>
    
        </div>`;
    },

};
export default dashboard;