package com.supatkon.Debt_Tracker_backend.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.LocalDate;

@Entity
@Table(name="debt")
public class Debt {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "whoPaid_id", foreignKey = @ForeignKey(name = "FK_whoPaid"))
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User whoPaid;

    @ManyToOne
    @JoinColumn(name = "whoReceived_id", foreignKey = @ForeignKey(name = "FK_whoReceived"))
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User whoReceived;

    private int debt;
    private String description;
    private LocalDate date;

    public Debt() {
    }

    public Debt(User whoPaid, User whoReceived, int debt, String description, LocalDate date) {
        this.whoPaid = whoPaid;
        this.whoReceived = whoReceived;
        this.debt = debt;
        this.description = description;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getWhoPaid() {
        return whoPaid;
    }

    public void setWhoPaid(User whoPaid) {
        this.whoPaid = whoPaid;
    }

    public User getWhoReceived() {
        return whoReceived;
    }

    public void setWhoReceived(User whoReceived) {
        this.whoReceived = whoReceived;
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
