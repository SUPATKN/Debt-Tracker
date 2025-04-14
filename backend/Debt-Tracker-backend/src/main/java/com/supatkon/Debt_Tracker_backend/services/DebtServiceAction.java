package com.supatkon.Debt_Tracker_backend.services;

import com.supatkon.Debt_Tracker_backend.entity.Debt;
import com.supatkon.Debt_Tracker_backend.repository.DebtRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DebtServiceAction implements DebtService{
    private final DebtRepository debtRepository;

    @Autowired
    public DebtServiceAction(DebtRepository debtRepository) {
        this.debtRepository = debtRepository;
    }

    @Override
    public Debt addDebt(Debt data) {
        return this.debtRepository.save(data);
    }
}
