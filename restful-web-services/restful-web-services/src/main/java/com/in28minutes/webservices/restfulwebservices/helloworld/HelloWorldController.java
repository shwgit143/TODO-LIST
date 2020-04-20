package com.in28minutes.webservices.restfulwebservices.helloworld;

//import javax.management.RuntimeErrorException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.in28minutes.webservices.restfulwebservices.helloworld.HelloWorldBean;

//controller
@CrossOrigin(origins ="http://localhost:4200")
@RestController
public class HelloWorldController {
	
	//GET //URI - hello-world//method - "hello World"
	// @RequestMapping(method=RequestMethod.GET,path="/hello-world")
	@GetMapping(path="/hello-world")
	public String helloWorld()
	{
		return "Hello World";		
	}	
	
	//hello-world-bean
//	@GetMapping(path="/hello-world-bean")
//	public HelloWorldBean helloWorldBean()
//	{
//		
//		return new HelloWorldBean("Hello World")		
//	}
	@GetMapping(path ="/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
	//	throw new RuntimeException("Some error has Happened ! Contact Support at ***-*** " );
		return new HelloWorldBean("Hello World-changed");
	}
	
	//hello-world/path-variable/in28minutes
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		
	  return new HelloWorldBean(String.format("Hello World ,%s",name));
	}
}

