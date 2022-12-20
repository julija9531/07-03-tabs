const tabs = document.getElementById('tabs1');

//Проверяем какая вкладка является активной:
let num1 = 0;
for (let i1 = 0; i1<(tabs.children[0].children.length); i1++) {
    if (tabs.children[0].children[i1].className == "tab tab_active") {num1 = i1}
}

//Функция активации/деактивации:
function activateMenu (num2){
    tabs.children[0].children[num1].className = "tab";
    tabs.children[1].children[num1].className = "tab__content";
    num1 = num2;
    tabs.children[0].children[num1].className = "tab tab_active";
    tabs.children[1].children[num1].className = "tab__content tab__content_active";
}

for (let i1 = 0; i1<(tabs.children[0].children.length); i1++) {
    tabs.children[0].children[i1].onclick = function(event) {activateMenu(i1)}
}

console.log(tabs.children[1].children[0].className);