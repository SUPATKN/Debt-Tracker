package com.supatkon.Debt_Tracker_backend.controllers;

import com.supatkon.Debt_Tracker_backend.entity.User;
import com.supatkon.Debt_Tracker_backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/users")
    public User addUser(@RequestBody User user){
        user.setId(0);
        return userService.save(user);
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("/users/{id}")
    public User getUsersById(@PathVariable Integer id){
        return userService.findById(id);
    }

    @DeleteMapping("/users/{id}")
    public User deleteUser(@PathVariable Integer id){
        return this.userService.delete(id);
    }


    @PatchMapping("/users/{id}")
    public User editUser(@PathVariable Integer id , @RequestBody User user)
}
