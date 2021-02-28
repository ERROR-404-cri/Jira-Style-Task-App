let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');
let input = document.getElementById('inp');
let addBtn = document.getElementById('addBtn');
let delBtn = document.getElementById('delBtn');
let toaster = document.getElementById('toaster');
let timer = null;
let allTaskForFirst = [];
let allTaskForSecond = [];
let allTaskForThird = [];
let allTaskForFourth = [];



addBtn.addEventListener('click', function () {
    addToFirstList(input.value);
    // input.value="";
});

delBtn.addEventListener("click", function () {
    emptyAllArr();
    addToList(allTaskForFirst, "first");
    addToList(allTaskForSecond, "second");
    addToList(allTaskForThird, "third");
    addToList(allTaskForFourth, "fourth", "delete");
});

function emptyAllArr() {
    allTaskForFirst = [];
    allTaskForSecond = [];
    allTaskForThird = [];
    allTaskForFourth = [];
};

first.addEventListener("click", function (e) {
    if (e.target.tagName === "DIV") {
        return
    };
    let data = e.target.textContent;
    index = allTaskForFirst.findIndex(x => x === data);
    allTaskForFirst = allTaskForFirst.filter((x, ind) => ind !== index);

    allTaskForSecond.push(data);
    addToList(allTaskForFirst, "first");
    addToList(allTaskForSecond, "second");

});

second.addEventListener("click", function (e) {
    if (e.target.tagName === "DIV") {
        return
    };
    let data = e.target.textContent;
    index = allTaskForSecond.findIndex(x => x === data);
    allTaskForSecond = allTaskForSecond.filter((x, ind) => ind !== index);
    allTaskForThird.push(data);
    addToList(allTaskForSecond, "second");
    addToList(allTaskForThird, "third");

});

third.addEventListener("click", function (e) {
    if (e.target.tagName === "DIV") {
        return
    };
    let data = e.target.textContent;
    index = allTaskForThird.findIndex(x => x === data);
    allTaskForThird = allTaskForThird.filter((x, ind) => ind !== index);
    allTaskForFourth.push(data);
    addToList(allTaskForThird, "third");
    addToList(allTaskForFourth, "fourth");

});

fourth.addEventListener("click", function (e) {
    if (e.target.tagName === "DIV") {
        return
    };
    let data = e.target.textContent;
    index = allTaskForFourth.findIndex(x => x === data);
    allTaskForFourth = allTaskForFourth.filter((x, ind) => ind !== index);
    addToList(allTaskForFourth, "fourth");

});


function addToFirstList(task) {
    if (!task || (/[^a-z\d\s*]/gi.test(task)) === true) {
        return
    };
    allTaskForFirst.push(task);
    addToList(allTaskForFirst, "first", "first");
};

function addToList(arr, divName, isdel = false) {

    // console.log(divName);
    let frag = document.createDocumentFragment();
    arr.forEach(x => {
        let p = document.createElement('p');
        p.textContent = x;
        frag.append(p);
    })
    if (divName === "first") {
        first.innerHTML = null;

        first.appendChild(frag);
    } else if (divName === "second") {
        second.innerHTML = null;

        second.appendChild(frag);
    } else if (divName === "third") {
        third.innerHTML = null;

        third.appendChild(frag);
    } else if (divName === "fourth") {
        fourth.innerHTML = null;

        fourth.appendChild(frag);
    }
    toasterFun(isdel);

};

function toasterFun(isdel) {
    if(!isdel){
        return;
    }
    if (isdel === "first") {
        toaster.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>Task added to list`;
    } else if (isdel === "delete") {
        toaster.innerHTML = `<i class="fa fa-trash-o" aria-hidden="true"></i>All tasks are deleted`;
    }
    toaster.style.display = "block";
    clearTimeout(timer);
    timer = setTimeout(() => {
        toaster.style.display = "none";
        console.log("inn");
    }, 2000);
}