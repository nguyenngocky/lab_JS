const Nav = {
    render() {
        return /* html */`
        <div class="flex justify-around justify-items-center menu bg-lime-600 py-4">
          <div class="nav">
            <nav>
              <ul class="flex text-white text-base">
                <li><a class="lg:inline-flex lg:w-auto px-2 hover:text-slate-300" href="#">Trang chủ</a></li>
                <li><a class="lg:inline-flex lg:w-auto px-2 hover:text-slate-300" href="#">Tuyển sinh</a></li>
                <li><a class="lg:inline-flex lg:w-auto px-2 hover:text-slate-300" href="#">Góc sinh viên</a></li>
                <li><a class="lg:inline-flex lg:w-auto px-2 hover:text-slate-300" href="#">Tuyển dụng</a></li>
              </ul>
            </nav>
          </div>
          <div class="search">
            <input class="py-1" type="text">
            <button class="bg-blue-900 hover:bg-orange-400 px-2 text-base py-1 text-white">Tìm kiếm</button>
          </div>
          <div>
            <ul class="flex text-white text-base">
              <li><a class="lg:inline-flex lg:w-auto px-3 hover:text-slate-300" href="/signup">Đăng ký</a></li>
              <li><a class="lg:inline-flex lg:w-auto px-3 hover:text-slate-300" href="/sign">Đăng nhập</a></li>
              <li><a class="lg:inline-flex lg:w-auto px-3 hover:text-slate-300" href="/admin/dashboard">Admin</a></li>
            </ul>
          </div>
        </div>`;
    },
};
export default Nav;