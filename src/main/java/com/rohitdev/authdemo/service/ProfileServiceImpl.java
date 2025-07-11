package com.rohitdev.authdemo.service;

import com.rohitdev.authdemo.io.ProfileRequest;
import com.rohitdev.authdemo.io.ProfileResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProfileServiceImpl implements ProfileService{
    @Override
    public ProfileResponse createProfile(ProfileRequest request) {
        return null;
    }
}
