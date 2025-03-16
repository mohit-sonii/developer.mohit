package main.developer.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import main.developer.entity.User;
import java.util.Optional;
import org.bson.types.ObjectId;

public interface UserRepo  extends MongoRepository<User,ObjectId>{
    // Optional<User> findByemail(String email);
    // Optional<User> findBycontactNumber(String number);
    Optional<User> findByEmailOrContactNumber(String email, String number);
}