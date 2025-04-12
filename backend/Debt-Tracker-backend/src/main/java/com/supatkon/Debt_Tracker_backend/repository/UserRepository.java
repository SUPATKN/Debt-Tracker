package com.supatkon.Debt_Tracker_backend.repository;

import com.supatkon.Debt_Tracker_backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {

}
