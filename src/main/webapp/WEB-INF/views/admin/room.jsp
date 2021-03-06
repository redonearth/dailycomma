<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="my" tagdir="/WEB-INF/tags" %>
<script src="<c:url value="/webjars/jquery/3.3.1/dist/jquery.min.js"/>"></script>
<!-- popper.js -->
<script src="<c:url value="/webjars/popper.js/1.14.3/umd/popper.min.js"/>"></script>
<!-- Bootstrap 4.1.3 -->
<script src="<c:url value="/webjars/bootstrap/4.1.3/js/bootstrap.min.js"/>"></script>
<link href="<c:url value="/webjars/bootstrap/4.1.3/css/bootstrap.min.css"/>" rel="stylesheet" type="text/css" />
<script src="<c:url value="/resources/include/js/admin/room.js" />"></script>

<form name="roomPagingForm" id="roomPagingForm">
	<input type="hidden" name="page" value="1">
	<input type="hidden" name="sort" value="room_no">
	<input type="hidden" name="lodgmentNo" value="${list[0].lodgmentNo}">
</form>
<!-- 숙소 관리 경로 표시 -->
<div class="row">
	<div class="col-md-12">
		<ul class="breadcrumb" id="lodgmentNav">
			<li class="breadcrumb-item">/ ${list[0].company}</li>
		</ul>
	</div>
</div>
<!-- 숙소 관리 - 객실 관리 -->
<div class="row">
	<div class="col-md-12">
		<table class="table table-hover table-sm">
			<thead class="thead-light">
				<tr class="text-center">
					<th scope="col">
						<label class="custom-control custom-checkbox">
							<input type="checkbox" name="_selected_all_" class="custom-control-input">
							<span class="custom-control-indicator"></span>
						</label>
					</th>
					<th scope="col">객실 번호</th>
					<th scope="col">객실 이름</th>
					<th scope="col">객실 수</th>
					<th scope="col">가격(1박)</th>
					<th scope="col">최대 인원(1객실)</th>
				</tr>
			</thead>
			<tbody id="roomTbody">
				<c:forEach items="${list}" var="room">
				<tr class="text-center">
					<td scope="row">
						<label class="custom-control custom-checkbox">
							<input type="checkbox" name="_selected_" value="${room.roomNo}" class="custom-control-input">
							<span class="custom-control-indicator"></span>
						</label>
					</td>
					<td>${room.roomNo}</td>
					<td>${room.roomName}</td>
					<td>${room.roomQuantity}</td>
					<td><fmt:formatNumber value="${room.roomPrice}" pattern="###,###" /></td>
					<td>${room.roomCapa}</td>
		
				</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
</div>
<div class="row">
	<div class="col-md-12 d-flex flex-row justify-content-end mb-4">
	</div>
</div>
<div id="roomPaging">
	<my:paging paging="${paging}" jsFunc="go_page"/> 
</div>
<!-- 페이징 버튼 -->
<%-- <my:paging paging="${paging}" /> --%>
