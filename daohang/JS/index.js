const cen = document.querySelector('.cen');
const ys =document.querySelector('.cen');
let idx = 0;
const zm = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
let has = { 'x': 'qq.com' }
//使用 JSON.parse() 方法将数据转换为 JavaScript 对象
let key = JSON.parse(localStorage.getItem('keyss') || 'null');
if (key) {
    has = key;
}
while (idx < 26) {
    const div = document.createElement('div');
    const span = document.createElement('span');
    const img = document.createElement('img');
    const buttons = document.createElement('button');
    div.className = 'ys';
    buttons.textContent = '编辑';
    if (has[zm[idx].toLowerCase().toString()]) {
        img.src = `http://${has[zm[idx].toLowerCase().toString()]}/favicon.ico`;
    } else {
        img.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png';
    }
    // 加载错误显示
    img.onerror = (e) => {
        e.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png';
    }
    span.innerText = zm[idx];
    cen.appendChild(div);
    div.appendChild(span);
    div.appendChild(img);
    div.appendChild(buttons);
    buttons.onclick = (e) => {
        let key = e['target']['id'].toLowerCase();
        let x = prompt('请输入一个网址');
        has[key] = x;
        img.src = `http://${x}/favicon.ico`;
        localStorage.setItem('keyss', JSON.stringify(has));        
    }
    buttons.id = zm[idx];
    idx++;
}

window.onkeydown = (e) => {
    console.log(e['key']);
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        let keys = e['key'];
        console.log(keys);
        let web = has[keys];
        console.log(has);
        console.log(web);
        window.open("https://"+web, '_blank');
    }
}
