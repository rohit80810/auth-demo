package com.rohitdev.authdemo.service;

import com.rohitdev.authdemo.io.ProfileRequest;
import com.rohitdev.authdemo.io.ProfileResponse;

public interface ProfileService {
    ProfileResponse createProfile(ProfileRequest request);
}
