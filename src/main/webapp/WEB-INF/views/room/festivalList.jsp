<%@page import="javax.naming.Context" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>apiTest.jsp</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          type="text/css">
    <link rel="stylesheet" type="text/css"
          href="<%=request.getContextPath()%>/resources/include/css/room/apiTest.css">
    <link rel="stylesheet" type="text/css"
          href="<%=request.getContextPath()%>/resources/include/css/room/bundle.css">
    <link rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossorigin="anonymous">
    <script>
        var path = "<c:url value='/'/>"
    </script>
    <script src="<%=request.getContextPath()%>/resources/include/js/room/festivalList.js"></script>
</head>
<body>
<div class="sub-container" id="sub-container-type1">
    <div class="container-inner">
        <p class="location-lst">
            <span>하이라이트</span>
            <span class="active">축제&amp;행사</span>

        </p>
        <ul class="lst-type-card  active">
        </ul>
<%--
        <!-- paging -->
        <div class="paging-lst"><a href="#" onclick="return false;" class="icon prev"><i class="ion-chevron-left"></i><i
                class="ion-chevron-left"></i><span class="hd-element">처음 페이지</span></a><a href="#"
                                                                                          onclick="return false;"
                                                                                          class="icon prev"><i
                class="ion-chevron-left"></i><span class="hd-element">이전 페이지</span></a><a href="?curPage=1"
                                                                                          class="on">1</a><a
                href="?curPage=2">2</a><a href="#" onclick="return false;" class="icon next"><i
                class="ion-chevron-right"></i><span class="hd-element">다음 페이지</span></a><a href="?curPage=2"
                                                                                           class="icon next"><i
                class="ion-chevron-right"></i><i class="ion-chevron-right"></i><span
                class="hd-element">마지막 페이지</span></a>
        </div>
        <!-- //paging -->--%>
    </div>
</div><%--
<div class="sub-detail-contents" id="sub-container">
    <div class="sub-detail-inner">
    </div>
</div>--%>
</body>
</html>
