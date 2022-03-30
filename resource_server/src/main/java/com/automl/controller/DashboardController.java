package com.automl.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DashboardController {

    Logger logger = LoggerFactory.getLogger(DashboardController.class.getName());

    @PostMapping("/dashboard")
    public String getDashboard() {
        logger.info("call to /dashboard");
        return "Welcome to the dashboard";
    }
}
