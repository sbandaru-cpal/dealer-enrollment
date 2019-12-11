package com.customer.controller;

import com.customer.api.User;
import com.customer.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RequestMapping(value= "/user", produces={MediaType.APPLICATION_JSON_VALUE})
@RestController
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public User createUser(@RequestBody User user) {
        return customerService.createUser(user);
    }

    @RequestMapping(method = RequestMethod.GET, value= "/by-userId/{userId}")
    @ResponseBody
    public  User getUserById(@PathVariable(value ="userId") String userId) {
        return customerService.getUserById(userId);
    }

    @RequestMapping(method = RequestMethod.GET, value= "/by-faceId/{faceId}")
    @ResponseBody
    public  User getUserByFaceId(@PathVariable(value ="faceId") String faceId) {
        return customerService.getUserByFaceId(faceId);
    }

}