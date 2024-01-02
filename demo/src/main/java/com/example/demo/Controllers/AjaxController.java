package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Models.DataModel;
import com.example.demo.Services.DataLoaderService;

@RestController
public class AjaxController {

    @Autowired
    private DataLoaderService dataLoaderService;

    @GetMapping("/getDataSet")
    public List<DataModel> getData() {

        List<DataModel> dataModel = dataLoaderService.loadAllDataFromCSV();

        return dataModel;
    }
}
