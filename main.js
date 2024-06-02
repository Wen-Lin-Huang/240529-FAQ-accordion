//下拉式Q&A設定
let items = document.querySelectorAll('.item'); //返回Node集合,用forEach()遍歷

    //變歷每個items元素,分別增加監聽事件
items.forEach((value,index) => {
    let img = document.getElementById(`img${index+1}`); //js模板字串要用``,不能跟'' "" 一起
    let content = document.getElementById(`content${index+1}`);
    value.addEventListener('click',function() {
        content.classList.toggle('show');  //toggle() classList的方法,用於添加或移除指定的class
        if(content.classList.contains('show')) {       //contains() classList的方法,用於確認是否有指定的class
            img.src = "meterials/icon-minus.svg";
        } else {
            img.src="meterials/icon-plus.svg";
        }
    });
});

