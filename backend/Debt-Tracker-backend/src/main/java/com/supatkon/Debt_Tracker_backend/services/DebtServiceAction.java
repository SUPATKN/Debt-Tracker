package com.supatkon.Debt_Tracker_backend.services;

import com.supatkon.Debt_Tracker_backend.entity.Debt;
import com.supatkon.Debt_Tracker_backend.repository.DebtRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class DebtServiceAction implements DebtService{
    private final DebtRepository debtRepository;
    private final UserService userService;
    @Autowired
    public DebtServiceAction(DebtRepository debtRepository, UserService userService) {
        this.debtRepository = debtRepository;
        this.userService = userService;
    }

    @Override
    public Debt addDebt(Debt data) {
        this.userService.Increase(data.getWhoReceived(),data.getDebt());
        return this.debtRepository.save(data);
    }

    @Override
    public List<Debt> getDebts() {
        return this.debtRepository.findAll();
    }

    @Override
    public Optional<Debt> findById(int id) {
        Optional<Debt> result = this.debtRepository.findById(id);
        if(result.isPresent()){
            return result;
        }else{
            throw new RuntimeException("ไม่เจอ debt id : " + id);
        }
    }
}
