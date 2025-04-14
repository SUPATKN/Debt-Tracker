package com.supatkon.Debt_Tracker_backend.repository;

import com.supatkon.Debt_Tracker_backend.entity.Debt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DebtRepository extends JpaRepository<Debt,Integer> {
}
