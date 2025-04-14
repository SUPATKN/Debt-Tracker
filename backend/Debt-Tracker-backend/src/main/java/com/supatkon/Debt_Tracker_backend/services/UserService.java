package com.supatkon.Debt_Tracker_backend.services;

import com.supatkon.Debt_Tracker_backend.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User save(User user);
    List<User> getUsers();
    Optional<User> findById(int id);
    Optional<User> delete(int id);
}
