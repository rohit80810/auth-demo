package com.rohitdev.authdemo.io;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProfileRequest {
     @NotBlank(message = "Name should not be empty")
     private String name;
     @NotNull(message = "Email should not be empty")
     @Email(message = "Enter valid email")
     private String email;
     @Size(min = 6,message="Password must be 6 digits")
     private String password;
}
