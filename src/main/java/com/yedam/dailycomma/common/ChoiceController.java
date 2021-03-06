package com.yedam.dailycomma.common;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.yedam.dailycomma.member.MemberDTO;
import com.yedam.dailycomma.member.MemberService;


@Controller  //빈 등록, 서블릿이 호출하도록 설정
public class ChoiceController {
	
    @RequestMapping("/signupChoice.do")
    public String signupChoice() {
        return "common/signupChoice";
    }
    
    @RequestMapping("/loginChoice.do")
    public String loginChoice() {          	
    	return "common/loginChoice";
    }
    
    @RequestMapping(value="/needLogin.do")
    public ModelAndView needLogin() {
    	ModelAndView model = new ModelAndView("common/loginWarning");
    	model.addObject("msg","로그인 후 이용해주세요");    	
    	return model;
    }
}
