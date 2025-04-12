package com.supatkon.Debt_Tracker_backend.services;

import com.supatkon.Debt_Tracker_backend.entity.User;
import com.supatkon.Debt_Tracker_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class UserServiceAction implements UserService{
    private UserRepository userRepository;

    @Autowired
    public UserServiceAction(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User save(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public List<User> getUsers() {
        return this.userRepository.findAll();
    }


}
