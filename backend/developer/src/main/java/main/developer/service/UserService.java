package main.developer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import main.developer.entity.User;
import main.developer.repository.UserRepo;

// here the controller will defined meaning the logic of the routes. They call the methods from UserController.java and it will pass on to this to get executed.

@Controller
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public void addUser(User user){
        userRepo.save(user);
    }
}
