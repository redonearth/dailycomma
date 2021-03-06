/*
 * room.js
 */

$(function() {
	go_page(1);
	$("input[type=checkbox]").prop("checked",false);
});


$(document).ready(function(){
	$('#roomDeleteSelected').click(function(){
		var checkbox = [];
		$('input[name="_selected_"]:checked').each(function(){
			checkbox.push($(this).val());
		});
		
		var alldata = { "checkbox" : checkbox};
		
		if(checkbox.length == 0) {
			alert("선택 사항이 없습니다.");
			return;
		}
		
		if (confirm(checkbox.length +"건을 삭제하시겠습니까??") == false){
			return;
		}
		
	    $.ajax({
	        url:path+"deleteRooms.ajax",
	        data : JSON.stringify(checkbox),
	        contentType: 'application/json; charset=utf-8',
	        type: "DELETE",
	        dataType: "json",
			error: function(xhr, status, msg) {
				console.log('상태값 : ' + status + ', Http에러메시지 : ' + msg);
			},
			success: function(xhr) {
				if(xhr.result == true)	alert(checkbox.length+ '건이 삭제되었습니다.');
				else alert("해당 건수가 없습니다.");
				
				var p = $('input[name="page"]:hidden').val();
				go_page(p);
			}	   
	    
	    });
	    
	});
});



//페이징 처리
function go_page(p) {
	
	$('input[name="page"]:hidden').val(p);
	//var lodgmentNo = $('input[name="lodgmentNo"]:hidden').val();
    $.ajax({
        url: path+'room.ajax',
        data :$('#roomPagingForm').serialize(),
        type: "GET",
        dataType: "json",
        success: callbackRoom
   });
}
	
function sort(s) {
	document.roomPagingForm.sort.value = s;
	document.roomPagingForm.submit();
}

function callbackRoom(datas){
	console.log(datas);
	var list = datas.list;
	var paging = datas.paging;
	var html="";
	
	$.each(list,function(idx,data){
		html += ('<tr class="text-center">'+
				 '<td scope="row">'+
				 '<label class="custom-control custom-checkbox">'+
				 '<input type="checkbox" name="_selected_" value="'+data.roomNo+'" class="custom-control-input">'+
				 '<span class="custom-control-indicator"></span>'+
				 '</label>'+
				 '</td>'+
				 '<td>'+data.roomNo+'</td>'+
				 '<td>'+data.roomName+'</td>'+
				 '<td>'+data.roomQuantity+'</td>'+
				 '<td>'+data.roomPrice+'</td>'+
				 '<td>'+data.roomCapa+'</td>'+
				 '<td>'+
				 '<div class="btn-group">'+
				 '<button id="btnEdit" class="btn btn-outline-success btn-sm">수정</button>'+
				 '<button id="btnDelete" class="btn btn-outline-danger btn-sm">삭제</button>'+
				 '</div>'+
				 '</td>'+
				 '</tr>');
	});
	
	
	var temp;
	var page = "<ul class='pagination justify-content-center'>" +
				"<li class='page-item'>이전";
	
	for(var i=paging.startPage; i<=paging.endPage; i++){
		if(i != paging.page){
			temp = "<li class='page-item'><a class='page-link' href='#' onclick='go_page("+i+")'>"+i+"</a>"
		}
		else{
			temp = "<li class='page-item active'><a class='page-link' href='#' onclick='go_page("+i+")'>"+i+"</a>"
		}
		page += temp;
	}
	
	page += "<li class='page-item'>다음";
	page += "</ul>";
	
	$('#roomTbody').empty();
	$('#roomPaging').empty();
	
	$('#roomTbody').append(html);
	$('#roomPaging').append(page);
}

/*
 * 객실 삭제 이벤트
 */
$('body').off().on('click', '#btnDelete', function() {
	var roomNo = $(this).closest('tr').find($('input[type=checkbox]')).val();
	var confirmRoom = confirm(roomNo + ' 객실을 정말 삭제하겠습니까?');
	var p = $('input[name="page"]:hidden').val();
	if(confirmRoom) {
		$.ajax({
			url: path+'room/' + roomNo,
			type: 'DELETE',
			contentType: 'application/json; charset=utf-8',
			dataType: 'json',
			error: function(xhr, status, msg) {3
				console.log('상태값 : ' + status + ', Http에러메시지 : ' + msg);
			},
			success: function(xhr) {
				//var p = $('input[name="page"]:hidden').val(p);
				console.log(xhr.result);
				alert(roomNo + ' 객실이 삭제되었습니다.');
				go_page(p);
			}
		})
	}
})