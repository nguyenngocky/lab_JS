import data from "../data";

const NewsDetail = {
    render(id) {
        const found = data.find((element) => element.id === id);

        return `<div class="max-w-5xl mx-auto text-center">
            <h1 class="font-semibold text-[20px] py-[15px]">${found.title}</h1>
            <div><img class="w-[506px] m-auto py-[15px]" src="${found.img}" /></div>
            <p class="text-left">${found.desc}</p>
        </div>`;
    },
};
export default NewsDetail;