package com.rohitdev.authdemo.controller;

import com.rohitdev.authdemo.io.ProfileRequest;
import com.rohitdev.authdemo.io.ProfileResponse;
import com.rohitdev.authdemo.service.ProfileService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class ProfileController {

    private final ProfileService profileService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public ProfileResponse register(@Valid @RequestBody ProfileRequest request){
        return profileService.createProfile(request);

    }

    @GetMapping("/test")
    public String test(){
        return "Hello World";

    }


}
