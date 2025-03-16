package main.developer.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.*;
import org.bson.types.ObjectId;

@Document(collection = "users")
@NonNull
@Data
@Builder
public class User {
    @Id
    
    private ObjectId id;

    private String name;

    @Indexed(unique = true)
    private String contactNumber;
    
    private String service;
    
    @Indexed(unique = true)
    private String email;
}
