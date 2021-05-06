package com.example.myplan.controller.account;

import com.example.myplan.util.MySqlConnection;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/account")
public class Register {
    @PostMapping(path = "/register")
    public Map<String, Object> register(@RequestParam String username, @RequestParam String email, @RequestParam String password){

        Map<String, Object> res = new HashMap<>();
        try{
            Connection connection = MySqlConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("INSERT into user (username, email, password) value (?,?,?)");
            preparedStatement.setString(1, username);
            preparedStatement.setString(2, email);
            preparedStatement.setString(3, password);
            preparedStatement.execute();
            res.put("success", true);
        }
        catch (SQLException e){
            e.printStackTrace();
            res.put("success", false);
        }
        return res;
    }
}
