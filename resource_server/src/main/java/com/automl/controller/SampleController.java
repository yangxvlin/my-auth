package com.automl.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {
    Logger logger = LoggerFactory.getLogger(SampleController.class.getName());

    @PostMapping("/sample")
    public String getDashboard() {
        logger.info("call to /sample");
        return "This is sample page.";
    }
}
