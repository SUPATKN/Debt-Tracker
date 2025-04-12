package com.supatkon.Debt_Tracker_backend.services;

import com.supatkon.Debt_Tracker_backend.entity.User;

import java.util.List;

public interface UserService {
    User save(User user);
    List<User> getUsers();
}
