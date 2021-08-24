let menuList = [];
let piecesList = [];
let menu;
let pieces;
let total;
let mobile;
$(document).ready(function(){
    $('#cafeLatte').click(function() {
        clear();
        $('#menuName').val("카페라떼");
        menu = "카페라떼";
    })
    $('#espresso').click(function() {
        clear();
        $('#menuName').val("에스프레소");
        menu = "에스프레소";
    })
    $('#americano').click(function() {
        clear();
        $('#menuName').val("아메리카노");
        menu = "아메리카노";
    })
    $('#cappucchino').click(function() {
        clear();
        $('#menuName').val("카푸치노");
        menu = "카푸치노";
    })
    $('#milkTea').click(function() {
        clear();
        $('#menuName').val("밀크티"); 
        menu = "밀크티";
    })
    $('#smoothie').click(function() {
        clear();
        $('#menuName').val("스무디");
        menu = "스무디";
    })

    $('#pieces').blur(function() {
        if($('#pieces').val() === "") {
            alert("수량을 입력해주세요.");
        } else if($('#menu').val() === null) {
            alert("메뉴를 선택해주세요.");
        } else {
            $('#total').val($('#pieces').val()*parseInt($('#menu').val()));
        }
    })

    $('#add').click(function() {
        if($('#pieces').val() === "") {
            alert("수량을 입력해주세요.");
        } else if($('#menu').val() === null) {
            alert("메뉴를 선택해주세요.");
        } else {
            pieces = $('#pieces').val();
            total = $('#total').val();
            menuList.push(menu);
            piecesList.push(pieces);
            $('#orderList').append(`<tr><td>${menu}  ${pieces}잔  ${total}원</td></tr>`);
        }
    })

    $('#delete').click(function() {
        if(confirm('주문 메뉴를 삭제할까요?')){
            $('#orderList tr:last').remove();
            clear();
        }
    })

    let a = 0;
    $('#order').click(function() {
        if($('#pieces').val() === "") {
            alert("수량을 입력해주세요.");
        } else if($('#menu').val() === null) {
            alert("메뉴를 선택해주세요.");
        } else {
            mobile = prompt("모바일 번호를 입력해주세요.");
            for(i = a; i < menuList.length; i++) {
                $('#sell').append(`<tr><td>${mobile}  ${menuList[i]}  ${piecesList[i]}잔</td></tr>`);
            }
            a = menuList.length;
            $('#orderList tr').remove();
            clear();
        }
    })

    function clear() {
        $('#menuName').val("");
        $('#pieces').val("");
        $('#total').val("");
    }
})
