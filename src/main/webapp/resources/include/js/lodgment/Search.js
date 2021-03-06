// LodgmentSearch javascript

$(document).ready(function() {
	gradeCal();
	
	$("#lodgType li a").click(
			function() {
				$("#dropdownMenu1:first-child").html(
						$(this).text() + ' <span class="caret"></span>');
			});
	$("#loc li a").click(
			function() {
				$("#dropdownMenu2:first-child").html(
						$(this).text() + ' <span class="caret"></span>');
	});
	
	/*$('input[name="daterange"]').daterangepicker(
			{
				opens : 'left'
			},
			function(start, end, label) {
				 start.format('YYYY-MM-DD');
				console.log("A new date selection was made: "
						+ start.format('YYYY-MM-DD') + ' to '
						+ end.format('YYYY-MM-DD'));
			}
	);*/
	
	 $.datepicker.setDefaults({
         dateFormat: 'yy-mm-dd' //Input Display Format 변경
         ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
         ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
         ,changeYear: true //콤보박스에서 년 선택 가능
         ,changeMonth: true //콤보박스에서 월 선택 가능                
         ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
        /* ,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로*/
		/*,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함*/
         ,buttonText: "선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트
         ,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
         ,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
         ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
         ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
         ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
/*         ,minDate: "-1M" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
         ,maxDate: "+1M" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)                    */
     
	 });
	 
     $("#datepicker").datepicker({
		 minDate:0,
         onClose: function( selectedDate ) {
             // 시작일(fromDate) datepicker가 닫힐때
             // 종료일(toDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
             $("#datepicker2").datepicker( "option", "minDate", selectedDate );

/*             var date = $(this).datepicker('getDate');

             date.setDate(date.getDate() + 7); // Add 7 days
             $('#datepicker2').datepicker("option", "minDate", date);*/
         }
	 });
     $("#datepicker2").datepicker({
         onClose: function( selectedDate ) {
             // 시작일(fromDate) datepicker가 닫힐때
             // 종료일(toDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
             $("#datepicker").datepicker( "option", "maxDate", selectedDate );
         }
	 });
     
     //From의 초기값을 오늘 날짜로 설정

     $('#datepicker').datepicker('setDate', $('#datepicker').attr('value')); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
     //To의 초기값을 내일로 설정
     $('#datepicker2').datepicker('setDate', $('#datepicker2').attr('value')); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
});

function gradeCal() {

	var length = $('.score-rap').length;

	for (var i = 0; i < length; i++) {

		var grade = $('.score-rap').eq(i).attr('data-grade');
		var star = $('.score-rap').eq(i).children("i");
		
		gradeScope(star, grade);
		star.addClass('starColor');
	}
}

function gradeScope(star, grade) {
	var i;
	var integer = Math.floor(grade);
	var decimal = (grade%1.0).toFixed(1);		
	
	for(i=0;i<integer;i++){
		star.eq(i).attr('class', 'fa fa-star');
	}
	
	if(decimal >= 0.5){
		star.eq(i).attr('class', 'fa fa-star-half-o')
		i++;
	}
	
	for(; i<5; i++){
		star.eq(i).attr('class', 'fa fa-star-o');
	}
}