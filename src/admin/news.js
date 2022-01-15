import data from "../data";

const news = {
    render() {
        return /* html */`
        <div class="max-w-5xl mx-auto">
        <a href="/admin/dashboard" class="flex items-center text-red opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                Quay lại
            </a>
        <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Desc
                    </th>
                    <th class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="/admin/add" class="text-indigo-600 hover:text-indigo-900">Add</a>
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <a href="/admin/edit" class="text-indigo-600 hover:text-indigo-900"><span class="sr-only">Edit</span></a>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                ${data.map((post) => `
                
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            ${post.title}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-wrap">
                      <div class="text-sm text-gray-900">${post.desc}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="/admin/edit/${post.id}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                  </tr>

                `).join("")}
      
                  <!-- More people... -->

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        </div>`;
    },

};
export default news;