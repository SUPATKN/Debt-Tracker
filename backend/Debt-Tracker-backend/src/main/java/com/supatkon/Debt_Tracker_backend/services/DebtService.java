package com.supatkon.Debt_Tracker_backend.services;

import com.supatkon.Debt_Tracker_backend.entity.Debt;

import java.util.List;
import java.util.Optional;

public interface DebtService {
    Debt addDebt(Debt data);
    List<Debt> getDebts();
    Optional<Debt> findById(int id);
}
