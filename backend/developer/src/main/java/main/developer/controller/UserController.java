package main.developer.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import main.developer.entity.User;
import main.developer.repository.UserRepo;
import main.developer.service.UserService;

// here routes will be defined 


@RestController
@RequestMapping("/contact")
public class UserController {
   @Autowired
   private UserRepo userRepo; 

   @Autowired
   private UserService userService;

   @GetMapping
   public ResponseEntity<String> check(){
    return new ResponseEntity<>("Working well",HttpStatus.OK);
   }

    @PostMapping
    public ResponseEntity<?> result(@RequestBody User user){
        try{
            Optional<User> already = userRepo.findByEmailOrContactNumber(user.getEmail(),user.getContactNumber());
            if(already.isPresent()){
                return new ResponseEntity<>("User already Exists",HttpStatus.FORBIDDEN);
            }
            userService.addUser(user);
        }catch(Exception e){
            System.out.println(e);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
