package com.supatkon.Debt_Tracker_backend.DTO;

import java.time.LocalDate;

public class DebtDto {
    private int whoPaidId;
    private int whoReceivedId;
    private int debt;
    private String description;
    private LocalDate date;

    public int getWhoPaidId() {
        return whoPaidId;
    }

    public void setWhoPaidId(int whoPaidId) {
        this.whoPaidId = whoPaidId;
    }

    public int getWhoReceivedId() {
        return whoReceivedId;
    }

    public void setWhoReceivedId(int whoReceivedId) {
        this.whoReceivedId = whoReceivedId;
    }

    public int getDebt() {
        return debt;
    }

    public void setDebt(int debt) {
        this.debt = debt;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
