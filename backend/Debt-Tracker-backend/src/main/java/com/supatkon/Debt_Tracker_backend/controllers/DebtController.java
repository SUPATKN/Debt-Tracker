package com.supatkon.Debt_Tracker_backend.controllers;

import com.supatkon.Debt_Tracker_backend.DTO.DebtDto;
import com.supatkon.Debt_Tracker_backend.entity.Debt;
import com.supatkon.Debt_Tracker_backend.entity.User;
import com.supatkon.Debt_Tracker_backend.services.DebtService;
import com.supatkon.Debt_Tracker_backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")
public class DebtController {
    private final DebtService debtService;
    private final UserService userService;

    @Autowired
    public DebtController(DebtService debtService, UserService userService) {
        this.debtService = debtService;
        this.userService = userService;
    }

    @GetMapping("/debts")
    public List<Debt> getDebts(){
        return this.debtService.getDebts();
    }

    @GetMapping("/debs/{id}")
    public Debt getDebtById(@PathVariable int id){
        return this.debtService.findById(id).orElseThrow();
    }

    @PostMapping("/debts")
    public Debt addDebt(@RequestBody DebtDto debtDto) {
        System.out.println(debtDto.getWhoPaidId());
        System.out.println(debtDto.getWhoReceivedId());
        User whoPaid = userService.findById(debtDto.getWhoPaidId()).orElseThrow(() -> new RuntimeException("User whoPaid not found"));
        User whoReceived = userService.findById(debtDto.getWhoReceivedId()).orElseThrow(() -> new RuntimeException("User whoPaid not found"));

        Debt debt = new Debt(whoPaid, whoReceived, debtDto.getDebt(), debtDto.getDescription(), debtDto.getDate());
        return debtService.addDebt(debt);
    }

}

