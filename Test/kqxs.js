let a = Math.floor(Math.random()*(10000-10))+10;
function checkInput() {
    let number = document.getElementById('myInput').value;
    let result = document.getElementById('result').value;
    if(isNaN(number)){
        alert("Đây không phải là 1 số");
    }
    else{
        if(number<10 || number>9999){
            alert("Số dự đoán trong khoảng 10 - 9999 mời bạn nhập lại");
        }
        else{
            let b=0;
            if(document.getElementById('btn') == true){
                b += 1;
                if(b > 3){  
                    alert("Bạn không đoán nữa tối đa 3 lần");
                }
            }
            if(number != a){
                result = a;
                alert("Bạn đã dự đoán sai và kết quả đúng là: "+a);
            }
            else{
                result = a;
                alert("Bạn đã chọn chúng 1 tỷ đồng");
            }
        }
    }
}